'use client'

import { useContext } from 'react'
import Image from 'next/image'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'

export function Hero() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  const handleScroll = () => {
    const element = document.getElementById('holding')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="p-24 relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-dubai-madagascar.jpg"
        alt="Dubai and Madagascar luxury destinations"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Title with animation */}
          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance drop-shadow-lg">
              {t.hero.title}
            </h1>
            
            {/* Decorative line */}
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary via-primary to-transparent rounded-full opacity-0 animate-slide-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            {t.hero.subtitle}
          </p>

          {/* CTA Button with animation */}
          <button
            onClick={handleScroll}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl opacity-0 animate-fade-in"
            style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}
          >
            {t.hero.cta}
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            width: 0;
          }
          to {
            opacity: 1;
            width: 100%;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
