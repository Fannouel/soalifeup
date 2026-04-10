'use client'

import Image from 'next/image'
import { Shield, Eye, Target } from 'lucide-react'
import { useContext } from 'react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'

export function CommitmentSection() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  const values = [
    {
      icon: Shield,
      title: t.commitment.values[0].title,
      description: t.commitment.values[0].description
    },
    {
      icon: Eye,
      title: t.commitment.values[1].title,
      description: t.commitment.values[1].description
    },
    {
      icon: Target,
      title: t.commitment.values[2].title,
      description: t.commitment.values[2].description
    }
  ]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-primary/5 via-white to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            {t.commitment.title}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t.commitment.missionDesc}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="text-center group p-6 rounded-xl hover:bg-white/50 transition-all duration-300 transform hover:scale-105">
                <div className="inline-block p-4 bg-primary/15 rounded-full mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Mission Statement with Image */}
        <div className="relative overflow-hidden rounded-2xl p-12 sm:p-16 text-white shadow-2xl">
          <Image
            src="/commitment-values.jpg"
            alt="Commitment to values"
            fill
            className="absolute inset-0 object-cover -z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-charcoal/70 to-secondary/60 -z-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-black">
              {t.commitment.mission_state.title}
            </h3>
            <p className="text-lg text-black/90 leading-relaxed mb-6">
              {t.commitment.mission_state.p1}
            </p>
            <p className="text-lg text-black/90 leading-relaxed">
              {t.commitment.mission_state.p2}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
