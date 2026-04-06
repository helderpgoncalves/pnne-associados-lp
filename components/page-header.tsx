import Image from 'next/image'
import { DECORATIVE_IMAGE_BLUR } from '@/lib/image-blur'

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
          ? 'min-h-[280px] bg-primary sm:min-h-[320px]'
          : 'bg-secondary'
      }`}
    >
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL={DECORATIVE_IMAGE_BLUR}
          />
          <div
            className="absolute inset-0 z-[1] bg-primary/80 backdrop-blur-[1px]"
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
