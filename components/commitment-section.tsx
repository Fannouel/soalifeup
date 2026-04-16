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
    <section className="relative py-15 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Glow décoratif */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-primary/60 mb-4">
            Our Foundation
          </p>

          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-charcoal mb-6">
            {t.commitment.title}
          </h2>

          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            {t.commitment.missionDesc}
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">

          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <div
                key={index}
                className="group p-10 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200
                          hover:border-primary/40 transition-all duration-500 
                          hover:-translate-y-3 hover:shadow-2xl text-left"
              >
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {value.title}
                </h3>

                <p className="text-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}

        </div>

        {/* Manifesto Block */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">

          {/* Background */}
          <Image
            src="/commitment-values.jpg"
            alt="Commitment"
            width={1400}
            height={600}
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-10 md:px-20">
            <div className="max-w-2xl text-white space-y-6">

              <p className="text-sm tracking-[0.3em] uppercase text-white/60">
                Our Commitment
              </p>

              <h3 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
                {t.commitment.mission_state.title}
              </h3>

              <p className="text-lg text-white/90 leading-relaxed">
                {t.commitment.mission_state.p1}
              </p>

              <p className="text-white/70 leading-relaxed">
                {t.commitment.mission_state.p2}
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
