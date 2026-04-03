import Image from 'next/image'

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
        imageSrc ? 'min-h-[280px] sm:min-h-[320px]' : 'bg-secondary'
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
          />
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"
            aria-hidden
          />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
