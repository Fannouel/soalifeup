import { Header } from '@/components/header'
import { Intro } from '@/components/intro'
import { Hero } from '@/components/hero'
import { HoldingSection } from '@/components/holding-section'
import { TourismSection } from '@/components/tourism-section'
import { LongevitySection } from '@/components/longevity-section'
import { CommitmentSection } from '@/components/commitment-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <Header />
      <Hero />
      <Intro />
      <HoldingSection />
      <TourismSection />
      <LongevitySection />
      <CommitmentSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
