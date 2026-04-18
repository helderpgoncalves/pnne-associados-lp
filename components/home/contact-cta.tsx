import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export function ContactCta() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
              Entre em Contacto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Estamos disponíveis para esclarecer qualquer questão e acompanhar
              o seu processo. Resposta rápida e tratamento confidencial
              garantidos.
            </p>
            <Button asChild size="lg" variant="outlineOnPrimary" className="mt-8">
              <Link href="/contactos">
                Fale connosco
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60">Telefone</p>
                <a
                  href="tel:+351253814274"
                  className="font-medium transition-colors hover:text-primary-foreground/80"
                >
                  253 814 274
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60">Morada</p>
                <p className="font-medium">
                  Rua D. Diogo Pinheiro, n.º 95, 1.º andar, Sala 102
                </p>
                <p className="text-sm text-primary-foreground/70">
                  4750-282 Barcelos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
