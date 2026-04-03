import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Scale } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-primary-foreground">
      <Image
        src="/images/tingey-injury-law.webp"
        alt=""
        fill
        className="z-0 object-cover"
        sizes="100vw"
        priority
      />
      <div
        className="absolute inset-0 z-[1] bg-primary/80 backdrop-blur-[1px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-foreground/10">
            <Scale className="h-7 w-7" />
          </div>
          <h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Patrícia Nibra, Nuno Esteves & Associados
          </h1>
          <p className="mt-4 text-lg font-medium text-primary-foreground/90 sm:text-xl">
            Sociedade de Agentes de Execução, SP, RL
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Rigor técnico, celeridade processual e acompanhamento personalizado — ao serviço da recuperação que merece.
          </p>
          {/* <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
            Inscrita na OSAE com o número 128, com sede em Barcelos e atuação em todo o território nacional.
          </p>*/}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contactos">
                Entrar em Contacto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>*/}
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/servicos">Conhecer Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
