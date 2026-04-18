import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Sociedade", href: "/sociedade" },
  { name: "Serviços", href: "/servicos" },
  { name: "Informações Úteis", href: "/informacoes" },
  { name: "Contactos", href: "/contactos" },
];

const legalLinks = [
  { name: "Política de Privacidade", href: "/privacidade" },
  { name: "Política de Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Patrícia Nibra, Nuno Esteves & Associados SP RL
              </span>
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Sociedade de Agentes de Execução, SP, RL - OSAE n.º 128.
              Competência, celeridade e acompanhamento personalizado em
              processos executivos, em todo o território nacional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Contactos</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+351253814274"
                  className="transition-colors hover:text-foreground"
                >
                  +351 253 814 274
                </a>
              </li>
              <li>Rua D. Diogo Pinheiro, n.º 95, 1.º andar, Sala 102</li>
              <li>4750-282 Barcelos</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Patrícia Nibra, Nuno Esteves &
            Associados SP RL. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
