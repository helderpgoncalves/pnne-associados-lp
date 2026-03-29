import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Target, ShieldCheck, UserCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sociedade | Patrícia Nibra & Nuno Esteves',
  description: 'Conheça a nossa sociedade de agentes de execução. Quem somos, a nossa missão, valores e equipa.',
}

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Assegurar a condução de processos executivos com rigor técnico, celeridade e total transparência, adaptando a nossa atuação às necessidades de cada interveniente e situação específica.',
  },
  {
    icon: ShieldCheck,
    title: 'Valores',
    description: 'Rigor profissional, responsabilidade, proximidade com o cliente, confidencialidade e eficiência operacional — os pilares que orientam a nossa atuação diária.',
  },
]

const team = [
  {
    name: 'Patrícia Nibra',
    role: 'Agente de Execução',
    cedula: 'Cédula Profissional n.º 5213',
    bio: 'Solicitadora e jurista, exerce funções como Agente de Execução desde outubro de 2013. Sócia fundadora da sociedade, alia competência técnica a uma abordagem próxima e orientada para o cliente.',
  },
  {
    name: 'Nuno Martins Esteves',
    role: 'Agente de Execução',
    cedula: 'Cédula Profissional n.º 6662',
    bio: 'Advogado e Agente de Execução desde outubro de 2013. Sócio fundador, a sua formação jurídica dupla confere à equipa uma perspetiva aprofundada sobre cada processo.',
  },
  {
    name: 'A. Amorim Carvalho',
    role: 'Agente de Execução',
    cedula: 'Cédula Profissional n.º 5166',
    bio: 'Solicitador e jurista, integra a sociedade desde outubro de 2011. Com a experiência mais longa da equipa, garante solidez e maturidade processual em qualquer tipo de ação executiva.',
  },
]

export default function SociedadePage() {
  return (
    <>
      <PageHeader
        title="Sociedade"
        description="Conheça quem somos, a nossa missão, valores e a equipa que dá vida à sociedade."
      />

      {/* Quem Somos */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
                Quem Somos
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  A <strong>Patrícia Nibra, Nuno Esteves & Associados — Sociedade de Agentes de Execução, SP, RL</strong>, inscrita na OSAE com o número 128, foi constituída em 2014 e tem sede em Barcelos, exercendo a sua atividade em todo o território nacional.
                </p>
                <p>
                  A sociedade é composta por juristas licenciados em Solicitadoria e Direito, o que garante uma abordagem tecnicamente fundamentada em cada processo. A sua estrutura especializada e vocacionada exclusivamente para a ação executiva permite adaptar o <em>modus operandi</em> às necessidades específicas de cada interveniente.
                </p>
                <p>
                  Ao longo de mais de uma década de atividade, consolidámos uma prática orientada para a eficiência processual, a segurança jurídica das partes e a mais elevada taxa de recuperação possível dentro dos limites legais.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-full max-w-md rounded-xl bg-secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="bg-secondary py-20 sm:py-24">
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
                className="rounded-xl border border-border bg-card p-8 text-center"
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
      </section>

      {/* Equipa */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
              Equipa
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Uma equipa focada na gestão eficaz de processos e no acompanhamento personalizado.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <UserCircle className="h-9 w-9 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.cedula}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
