import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/public/images/hero-justice.webp";
import { LcpImagePreload } from "@/components/lcp-image-preload";
import { DECORATIVE_IMAGE_BLUR } from "@/lib/image-blur";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background text-primary-foreground">
      <LcpImagePreload href={heroImage.src} />
      <Image
        src={heroImage}
        alt=""
        fill
        className="z-0 object-cover"
        sizes="(max-width: 1920px) 100vw, 1920px"
        priority
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={DECORATIVE_IMAGE_BLUR}
        quality={75}
      />
      <div
        className="absolute inset-0 z-[1] bg-white/72 backdrop-blur-[1px] dark:bg-zinc-950/60"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-5xl text-center">
          {/* <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-foreground/10">
            <Scale className="h-7 w-7" />
          </div>*/}
          <h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl">
            <span className="block md:whitespace-nowrap">
              {"Patrícia Nibra, Nuno\u00A0Esteves"}
            </span>
            <span className="block">{"&"}</span>
            <span className="block">Associados</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-primary-foreground/90 sm:text-xl">
            Sociedade de Agentes de Execução, SP, RL
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Competência, celeridade processual e acompanhamento personalizado -
            ao serviço da recuperação processual.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="outlineOnPrimary">
              <Link href="/contactos">
                Entrar em Contacto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
