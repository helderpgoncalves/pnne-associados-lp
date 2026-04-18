import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import {
  Gavel,
  FileStack,
  Send,
  MessageCircleQuestion,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Serviços | Patrícia Nibra & Nuno Esteves",
  description:
    "Conheça os nossos serviços de execução: Agente de Execução, Tramitação processual nas ações executivas, notificações e citações em processo declarativo, notificações judiciais avulsas, notificações extra-judiciais, procedimentos especiais e pré-executivos (pepex), encarregados de venda em processos de inventário e outros, Apoio jurídico.",
};

const services = [
  {
    icon: Gavel,
    title: "Agente de Execução",
    description:
      "Condução integral de processos executivos cíveis, praticando todos os atos legalmente incumbidos ao Agente de Execução - desde as diligências iniciais até ao encerramento do processo - com rigor técnico e estrita observância da Lei.",
  },
  {
    icon: FileStack,
    title: "Tramitação Processual",
    description:
      "Gerimos todas as fases do processo executivo: consultas de bases de dados, penhoras de bens, vendas e pagamentos. Informamos regularmente os mandatários sobre o estado de cada processo, garantindo total transparência e celeridade nas respostas.",
  },
  {
    icon: Send,
    title: "Notificações e Citações",
    description:
      "Realizamos atos de notificações e citações no âmbito da ação executiva, declarativa e procdimentos cautelares, assegurando o cumprimento escrupuloso das formalidades legais e dos prazos processuais aplicáveis.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Apoio e Esclarecimento",
    description:
      "Disponibilizamo-nos para esclarecer mandatários, credores e demais intervenientes sobre o andamento dos processos, os direitos e obrigações de cada parte e os procedimentos previstos na legislação em vigor.",
  },
];

const steps = [
  { number: "01", title: "Receção e análise do processo" },
  { number: "02", title: "Início imediato das diligências" },
  { number: "03", title: "Execução dos atos processuais" },
  { number: "04", title: "Acompanhamento e comunicação contínuos" },
];

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        title="Serviços"
        description="Competência ao serviço da recuperação processual. Atuação em todo o território nacional."
        imageSrc="/images/servicos-2.webp"
      />

      {/* Services List */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
              Como Funciona
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Após a distribuição ou indicação de um processo, iniciamos de
              imediato as diligências necessárias. A nossa estrutura
              especializada garante celeridade, economia de custos e eficácia na
              recuperação - com comunicação regular em cada fase.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card text-xl font-semibold">
                  {step.number}
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Precisa dos nossos serviços?
              </h2>
              <p className="mt-2 text-primary-foreground/80">
                Contacte-nos para analisarmos a sua situação. Respondemos com
                brevidade e discrição.
              </p>
            </div>
            <Button asChild size="lg" variant="outlineOnPrimary">
              <Link href="/contactos">
                Contactar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
