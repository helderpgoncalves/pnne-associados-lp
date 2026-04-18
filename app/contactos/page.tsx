import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contactos | Patrícia Nibra & Nuno Esteves",
  description:
    "Entre em contacto com a nossa sociedade de agentes de execução. Estamos disponíveis para esclarecer as suas dúvidas.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Morada",
    details: [
      "Rua D. Diogo Pinheiro, n.º 95, 1.º andar, Sala 102",
      "4750-282 Barcelos",
    ],
  },
  {
    icon: Phone,
    title: "Telefone",
    details: ["+351 253 814 274"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["nibra.esteves@gmail.com"],
  },
  {
    icon: Clock,
    title: "Horário",
    details: [
      "De 2ª a 6ª Feira: das 09:00h às 13:00h e das 14:00h às 18:00h.",
      "Sábados, Domingos e Feriados: Encerrado.",
    ],
  },
];

const OFFICE_ADDRESS =
  "Rua D. Diogo Pinheiro, n.º 95, 1.º andar, Sala 102, 4750-282 Barcelos, Portugal";

const MAPS_SEARCH_QUERY = "R. Dom Diogo Pinheiro 95, Barcelos, Portugal";

const googleMapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_SEARCH_QUERY)}`;

const googleMapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_SEARCH_QUERY)}&hl=pt&z=18&output=embed`;

export default function ContactosPage() {
  return (
    <>
      <PageHeader
        title="Contactos"
        description="Estamos disponíveis para si. Todas as comunicações são tratadas com discrição e respondidas com brevidade."
        imageSrc="/images/contactos.webp"
      />

      {/* Contact Section */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Informações de Contacto
              </h2>
              <p className="mt-3 text-muted-foreground">
                Pode contactar-nos por qualquer um dos meios abaixo. Respondemos
                a todas as solicitações com brevidade e tratamos cada contacto
                com total confidencialidade.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <div className="mt-1 space-y-0.5">
                        {item.details.map((detail, index) => (
                          <p
                            key={index}
                            className="text-sm text-muted-foreground"
                          >
                            {item.title === "Telefone" ? (
                              <a
                                href={`tel:${detail.replace(/\s/g, "")}`}
                                className="hover:text-foreground transition-colors"
                              >
                                {detail}
                              </a>
                            ) : item.title === "Email" ? (
                              <a
                                href={`mailto:${detail}`}
                                className="hover:text-foreground transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Envie-nos uma mensagem</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Preencha o formulário e entraremos em contacto brevemente. Todos
                os dados são tratados com total confidencialidade.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa — Google Maps (morada em texto + embed + link) */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-foreground">
            Como chegar
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
            {OFFICE_ADDRESS}
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <iframe
              title="Mapa — localização do gabinete em Barcelos"
              src={googleMapsEmbedSrc}
              className="h-[min(22rem,70vw)] w-full min-h-[16rem] border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center">
            <a
              href={googleMapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              Abrir no Google Maps
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
