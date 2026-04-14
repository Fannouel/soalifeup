'use client'

import { useContext } from 'react'
import Image from 'next/image'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'

export function Intro() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
//   const handleScroll = () => {
//     const element = document.getElementById('holding')
//     element?.scrollIntoView({ behavior: 'smooth' })
//   }

  return (
      <section className="relative w-full py-32 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">

        {/* Glow subtle (effet luxe) */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.15),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-[fadeInUp_1s_ease-out_forwards]">

          {/* Subtitle */}
          <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
            Private Holding • Luxury Experiences • Longevity
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-serif font-semibold leading-tight mb-8">
            {t.intro.title} <br className="hidden md:block" />
            {t.intro.br}
          </h2>

          {/* Main Text */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
            {t.intro.description}
          </p>

          {/* Secondary Text */}
          <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t.intro.secondary}
          </p>

        </div>
      </section>
  )
}