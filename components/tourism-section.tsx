'use client'

import Image from 'next/image'
import { Compass, Leaf, Users, Zap } from 'lucide-react'
import { useContext } from 'react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'
import Link from "next/link";

export function TourismSection() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  const xp_t = t.tourism.experiences
  const experiences = [
    {
      icon: Compass,
      title: xp_t[0].title,
      description: xp_t[0].description
    },
    {
      icon: Zap,
      title: xp_t[1].title,
      description: xp_t[1].description
    },
    {
      icon: Leaf,
      title: xp_t[2].title,
      description: xp_t[2].description
    },
    {
      icon: Users,
      title: xp_t[3].title,
      description: xp_t[3].description
    }
  ]

  return (
    <section id="tourism" className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary/60 mb-4">
            Experiences by Madabest
          </p>

          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-charcoal mb-6">
            Voyages Immersifs & Destinations Privées
          </h2>

          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Des expériences uniques, conçues pour offrir une immersion totale entre luxe, nature et culture malagasy.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-4 gap-10 mb-24">
          {experiences.map((exp, index) => {
            const Icon = exp.icon

            return (
              <div 
                key={index}
                className="group relative p-10 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 
                          hover:border-primary/40 transition-all duration-500 
                          hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>

                <div className="relative z-10">

                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    {exp.title}
                  </h3>

                  <p className="text-charcoal/70 leading-relaxed">
                    {exp.description}
                  </p>

                </div>
              </div>
            )
          })}
        </div>

        {/* Featured Experience */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">

          <Image
            src="/luxury-cruise.jpg"
            alt="Luxury cruise experience"
            width={1400}
            height={600}
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-10 md:px-20">
            <div className="max-w-xl text-white space-y-6">

              <p className="text-sm tracking-[0.3em] uppercase text-white/60">
                Signature Experience
              </p>

              <h3 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
                {t.tourism.highlight.title}
              </h3>

              <p className="text-lg text-white/90 leading-relaxed">
                {t.tourism.highlight.description}
              </p>

              <Link
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.madagascarbestdestination.com/en"
                className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full 
                          hover:bg-primary hover:text-white transition-all duration-300"
              >
                {t.tourism.highlight.button}
              </Link>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
