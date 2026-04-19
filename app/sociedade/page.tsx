import { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { ParallaxSectionBg } from "@/components/parallax-section-bg";
import { DECORATIVE_IMAGE_BLUR } from "@/lib/image-blur";
import { Target, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "PNNE - Sociedade",
  description:
    "Conheça a nossa sociedade de agentes de execução. Quem somos, a nossa missão, valores e equipa.",
};

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Assegurar a condução de processos executivos com rigor técnico, celeridade e total transparência, adaptando a nossa atuação às necessidades de cada interveniente e situação específica.",
  },
  {
    icon: ShieldCheck,
    title: "Valores",
    description:
      "Rigor profissional, responsabilidade, proximidade com o cliente, confidencialidade e eficiência operacional - os pilares que orientam a nossa atuação diária.",
  },
];

const team = [
  {
    name: "Patrícia Nibra",
    role: "Agente de Execução, desde 2013",
    cedula: "Cédula Profissional n.º 5213",
    bio: "Agente de Execução e Solicitadora. Administradora e sócia fundadora da sociedade, alia competência jurídica e técnica, experiência profissional a uma abordagem próxima e orientada para o cliente.",
  },
  {
    name: "Nuno Martins Esteves",
    role: "Agente de Execução desde 2013",
    cedula: "Cédula Profissional n.º 6662",
    bio: "Agente de Execução e Advogado. Administrador e sócio fundador da sociedade, a sua formação jurídica, experiência profissional e técnica, confere à equipa uma perspetiva aprofundada sobre cada processo.",
  },
  {
    name: "A. Amorim Carvalho",
    role: "Agente de Execução, desde 2011",
    cedula: "Cédula Profissional n.º 5166",
    bio: "Agente de Execução e Solicitador. Sócio da sociedade, alia sua competência jurídica, prática e técnica com experiência profissional e foco no cliente.",
  },
];

export default function SociedadePage() {
  return (
    <>
      <PageHeader
        title="Sociedade"
        imageSrc="/images/sociedade-2.webp"
        description="Conheça quem somos, a nossa missão, valores e a equipa que dá vida à sociedade."
      />

      {/* Quem Somos */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
            Quem Somos
          </h2>
          <div className="mt-8 grid items-stretch gap-12 lg:mt-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A sociedade{" "}
                <strong>
                  Patrícia Nibra, Nuno Esteves & Associados Sociedade de Agentes
                  de Execução, SP, RL
                </strong>{" "}
                encontra-se inscrita na OSAE com o número 128, foi constituída
                em 2014 e tem sede em Barcelos, exerce a sua atividade em todo o
                território nacional.
              </p>
              <p>
                A sociedade é composta por licenciados em Solicitadoria e
                Direito, o que garante uma abordagem jurídica e tecnicamente
                eficaz em cada processo.
              </p>
              <p>
                A sua estrutura especializada e vocacionada exclusivamente para
                a ação executiva permite adaptar o <em>modus operandi</em> às
                necessidades específicas de cada interveniente, é constituída
                por uma equipa multidisciplinar que se distingue pelo dinamismo,
                pela capacidade de inovação, pela qualidade dos serviços
                prestados, pelo compromisso com o cliente e pela capacidade de
                acção.
              </p>
            </div>
            <div className="flex h-full min-h-80 justify-center lg:min-h-0">
              <div className="relative h-full min-h-80 w-full max-w-md overflow-hidden rounded-xl shadow-sm ring-1 ring-border">
                <Image
                  src="/images/galo.jpg"
                  alt="Galo de Barcelos junto à sede da sociedade em Barcelos."
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 28rem"
                  placeholder="blur"
                  blurDataURL={DECORATIVE_IMAGE_BLUR}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores — fundo diplomas com parallax (desktop) */}
      <ParallaxSectionBg
        imageSrc="/images/diplomas.webp"
        className="bg-secondary py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
              Missão e Valores
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Os princípios que orientam a nossa atuação diária.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card/95 p-8 text-center shadow-sm backdrop-blur-[0.5px]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSectionBg>

      {/* Equipa */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
              Equipa
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Uma equipa focada na gestão eficaz de processos e no
              acompanhamento personalizado.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border bg-card p-8 text-center"
              >
                <h3 className="text-lg font-semibold leading-tight">
                  {member.name}
                </h3>
                <p className="mt-2 text-pretty text-sm font-medium text-foreground">
                  {member.role}
                </p>
                <p className="mt-1 text-xs text-foreground/75">
                  {member.cedula}
                </p>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
