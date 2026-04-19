"use client";

import Link from "next/link";
import {
  ArrowRight,
  Gavel,
  FileStack,
  Send,
  MessageCircleQuestion,
} from "lucide-react";
import { ParallaxSectionBg } from "@/components/parallax-section-bg";

const services = [
  {
    icon: Gavel,
    title: "Agente de Execução",
    description:
      "Condução integral de processos executivos, desde as diligências iniciais até ao encerramento, em estrita observância da Lei.",
  },
  {
    icon: FileStack,
    title: "Tramitação Processual",
    description:
      "Gestão rigorosa de todas as fases do processo: consultas de bases de dados, penhoras, vendas e pagamentos, com comunicação regular ao mandatário.",
  },
  {
    icon: Send,
    title: "Notificações e Citações",
    description:
      "Realização de atos de notificação e citação com cumprimento escrupuloso das formalidades legais e dos prazos processuais aplicáveis.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Apoio / Esclarecimento",
    description:
      "Esclarecimento de dúvidas de mandatários, credores e demais intervenientes sobre o andamento dos processos e os direitos de cada parte.",
  },
];

const QUADRO_BG = "/images/quadro.jpeg";

export function ServicesSection() {
  return (
    <ParallaxSectionBg
      imageSrc={QUADRO_BG}
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
              Os Nossos Serviços
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              Competência ao serviço da recuperação processual. Atuamos em todo
              o território nacional com rigor, imparcialidade e total
              conformidade com a legislação portuguesa.{" "}
            </p>
          </div>
          <Link
            href="/servicos"
            className="group flex items-center gap-2 text-sm font-medium transition-colors hover:text-muted-foreground"
          >
            Ver todos os serviços
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur-[0.5px] transition-all hover:border-foreground/20 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSectionBg>
  );
}
