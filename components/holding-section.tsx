'use client'

import { useContext } from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'

export function HoldingSection() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  
  const features = t.holding.features

  return (
    <section id="holding" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full -ml-36 -mb-36"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            {t.holding.mainTitle}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t.holding.mainDescription}
          </p>
        </div>

        {/* Features Grid with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/holding-operations.jpg"
              alt="Holding operations"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group flex gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 transform hover:translate-x-2"
              >
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Box */}
        <div className="p-8 sm:p-12 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-2xl border border-secondary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
            {t.holding.Highlight_box.title}
          </h3>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            {t.holding.Highlight_box.description}
          </p>
          <ul className="space-y-3 text-charcoal/70">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>{language === 'en' ? t.holding.Highlight_box.integrity : 'L\'intégrité dans chaque transaction commerciale'}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>{language === 'en' ? 'Transparency with our partners and stakeholders' : 'La transparence avec nos partenaires et stakeholders'}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>{language === 'en' ? 'Positive social impact on local communities' : 'L\'impact social positif sur les communautés locales'}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
