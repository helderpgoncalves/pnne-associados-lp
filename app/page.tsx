import { HeroSection } from '@/components/home/hero-section'
import { AboutPreview } from '@/components/home/about-preview'
import { ServicesSection } from '@/components/home/services-section'
import { TrustSection } from '@/components/home/trust-section'
import { FaqPreview } from '@/components/home/faq-preview'
import { ContactCta } from '@/components/home/contact-cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <TrustSection />
      <FaqPreview />
      <ContactCta />
    </>
  )
}
