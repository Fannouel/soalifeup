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
    <section id="tourism" className="py-20 sm:py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            {t.tourism.title}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t.tourism.subtitle}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <div 
                key={index}
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/40 transform hover:-translate-y-2"
              >
                <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {exp.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Featured Experience with Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/luxury-cruise.jpg"
            alt="Luxury cruise experience"
            width={1200}
            height={400}
            className="w-full h-25 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center p-12">
            <div className="max-w-2xl z-10 space-y-6">
              <h3 className="font-serif text-4xl font-bold text-white leading-tight">
                {t.tourism.highlight.title}
              </h3>
              <p className="text-lg text-white/95 leading-relaxed">
                {t.tourism.highlight.description}
              </p>
              

              <Link
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.madagascarbestdestination.com/en"
                className="inline-flex px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
