import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().trim().min(1, "Nome obrigatório.").max(200),
  email: z.string().trim().email("Email inválido.").max(320),
  message: z.string().trim().min(1, "Mensagem obrigatória.").max(10000),
});

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const msg =
      first.name?.[0] ||
      first.email?.[0] ||
      first.message?.[0] ||
      "Dados inválidos.";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !to || !from) {
    console.error(
      "[contact] Falta RESEND_API_KEY, CONTACT_EMAIL_TO ou RESEND_FROM_EMAIL.",
    );
    return NextResponse.json(
      {
        error:
          "O envio de mensagens não está configurado. Contacte o administrador do site.",
      },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r\n|\n|\r/g, "<br/>");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Contacto site — ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Nome:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Mensagem:</strong></p><p>${safeMessage}</p>`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Resend:", res.status, detail);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem. Tente mais tarde." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
