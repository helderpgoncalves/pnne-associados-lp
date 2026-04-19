import Image from 'next/image'
import { DECORATIVE_IMAGE_BLUR } from '@/lib/image-blur'
import { LcpImagePreload } from '@/components/lcp-image-preload'

interface PageHeaderProps {
  title: string
  description?: string
  /** Caminho público, ex.: /images/servicos-header.jpg */
  imageSrc?: string
  imageAlt?: string
}

export function PageHeader({
  title,
  description,
  imageSrc,
  imageAlt = '',
}: PageHeaderProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-border py-16 sm:py-20 ${
        imageSrc
          ? 'min-h-[280px] bg-background sm:min-h-[320px]'
          : 'bg-secondary'
      }`}
    >
      {imageSrc && (
        <>
          <LcpImagePreload href={imageSrc} />
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
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
          <div className="pointer-events-none absolute inset-0 z-[2] opacity-10" aria-hidden>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>
        </>
      )}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
