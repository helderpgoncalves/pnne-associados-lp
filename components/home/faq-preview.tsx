import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

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
    question: "Como posso acompanhar o meu processo?",
    answer:
      "O acompanhamento é feito, em regra, através do mandatário, com acesso ao sistema CITIUS. Pode também contactar diretamente o nosso gabinete para obter informações sobre o andamento de qualquer processo em que seja parte ou interveniente.",
  },
];

export function FaqPreview() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Tem dúvidas sobre processos executivos? Reunimos as questões mais
              comuns para o ajudar a compreender cada etapa.
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/informacoes">
                Ver todas as informações
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
