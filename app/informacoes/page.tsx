import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParallaxSectionBg } from "@/components/parallax-section-bg";

export const metadata: Metadata = {
  title: "PNNE - Informações Úteis",
  description:
    "Perguntas frequentes sobre processos executivos. Esclareça as suas dúvidas sobre execuções, documentos necessários e prazos.",
};

const faqs = [
  {
    question: "Como iniciar um processo executivo?",
    answer:
      "Para instaurar uma ação executiva é necessário dispor de um título executivo (sentença judicial, contrato com força executiva, livrança, entre outros) e recorrer a um mandatário - advogado ou solicitador - que apresente o requerimento executivo. O Agente de Execução é posteriormente nomeado para tramitar o processo.",
  },
  {
    question: "Que documentos são necessários?",
    answer:
      "Os documentos necessários variam consoante o tipo de processo e o título executivo em causa. Em regra, serão necessários o título executivo, os documentos de identificação das partes e elementos comprovativos da dívida. O seu mandatário orientá-lo-á sobre a documentação específica para o seu caso.",
  },
  {
    question: "Quanto tempo demora um processo executivo?",
    answer:
      "A duração varia consoante a natureza e complexidade do processo, o tipo de bens penhoráveis e a colaboração das partes. A nossa equipa atua com celeridade em todas as diligências, mantendo comunicação regular sobre o andamento de cada processo.",
  },
  {
    question: "Como acompanhar o estado do meu processo?",
    answer:
      "O acompanhamento é feito, em regra, através do mandatário, com acesso ao sistema CITIUS. Pode também contactar diretamente o nosso gabinete para obter informações sobre o andamento de qualquer processo em que seja parte ou interveniente.",
  },
  {
    question: "Como entrar em contacto com a sociedade?",
    answer:
      "Pode contactar-nos por telefone, email ou através do formulário disponível na página de Contactos. Todas as solicitações são respondidas com brevidade e tratadas com total confidencialidade.",
  },
];

const resources = [
  {
    title: "OSAE",
    description:
      "Ordem dos Solicitadores e dos Agentes de Execução - pesquisa de agentes e informação profissional.",
    url: "https://www.osae.pt",
  },
  {
    title: "CITIUS",
    description:
      "Portal da ação executiva - acompanhamento de processos e consulta de informação processual.",
    url: "https://www.citius.mj.pt",
  },
  {
    title: "dgpj.justiça.gov.pt",
    description:
      "Direção-Geral da Política de Justiça - estatísticas, legislação e informação sobre o sistema judicial.",
    url: "https://dgpj.justica.gov.pt",
  },
];

export default function InformacoesPage() {
  return (
    <>
      <PageHeader
        title="Informações Úteis"
        imageSrc="/images/informacoes.webp"
        description="Informação clara para decisões mais seguras. Esclareça as suas dúvidas sobre processos executivos."
      />

      {/* FAQ Section */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Os processos executivos podem suscitar dúvidas legítimas. Reunimos
              aqui as questões mais comuns para o ajudar a compreender melhor o
              funcionamento da ação executiva em Portugal e os seus direitos
              enquanto interveniente.
            </p>

            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-base hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Resources Section — fundo sala-arquivo com parallax (desktop) */}
      <ParallaxSectionBg
        imageSrc="/images/sala-arquivo.webp"
        className="bg-secondary py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Ligações úteis
            </h2>
            <p className="mt-3 text-muted-foreground">
              Recursos e entidades oficiais relevantes para o acompanhamento de
              processos executivos em Portugal.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {resources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur-[0.5px] transition-all hover:border-foreground/20 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold group-hover:text-foreground/80">
                        {resource.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSectionBg>

      {/* Contact CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 text-center sm:p-12">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Não encontrou a resposta que procurava?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Entre em contacto connosco diretamente. Teremos todo o gosto em
              esclarecer a sua situação específica com a atenção que merece.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-6">
              <Link href="/contactos">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
