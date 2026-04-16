'use client'

import Image from 'next/image'
import { Heart, Leaf, Zap } from 'lucide-react'
import { useContext } from 'react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'
import Link from "next/link";

export function LongevitySection() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  const categories = [
    {
      icon: Heart,
      title: t.longevity.categories[0].title,
      items: [
        t.longevity.categories[0].items[0],
        t.longevity.categories[0].items[1],
        t.longevity.categories[0].items[2]
      ]
    },
    {
      icon: Leaf,
      title: t.longevity.categories[1].title,
      items: [
        t.longevity.categories[1].items[0],
        t.longevity.categories[1].items[1],
        t.longevity.categories[1].items[2]
      ]
    },
    {
      icon: Zap,
      title: t.longevity.categories[2].title,
      items: [
        t.longevity.categories[2].items[0],
        t.longevity.categories[2].items[1],
        t.longevity.categories[2].items[2]
      ]
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Glow décoratif */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-primary/60 mb-4">
            Longevity & Wellness
          </p>

          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-charcoal mb-6">
            Curators of Longevity
          </h2>

          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Une sélection raffinée de produits essentiels pour une vie saine, équilibrée et durable.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {categories.map((category, index) => {
            const Icon = category.icon

            return (
              <div 
                key={index}
                className="group relative p-10 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200
                          hover:border-primary/40 transition-all duration-500 
                          hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>

                <div className="relative z-10">

                  <Icon className="w-8 h-8 text-primary mb-6" />

                  <h3 className="text-2xl font-semibold text-charcoal mb-4">
                    {category.title}
                  </h3>

                  <ul className="space-y-3 text-charcoal/70">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            )
          })}
        </div>

        {/* Featured Block */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/wellness-longevity.jpg"
              alt="Wellness and longevity"
              width={700}
              height={700}
              className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Text */}
          <div className="space-y-6">

            <p className="text-sm tracking-[0.3em] uppercase text-primary/60">
              Our Philosophy
            </p>

            <h3 className="font-serif text-4xl font-semibold text-charcoal leading-tight">
              {t.longevity.highlight_text.title}
            </h3>

            <p className="text-charcoal/70 leading-relaxed">
              {t.longevity.highlight_text.description}
            </p>

            <p className="text-charcoal/60 leading-relaxed">
              {t.longevity.highlight_text.description2}
            </p>

            <Link
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.soamahatsara.com/"
              className="inline-block px-8 py-3 bg-charcoal text-white rounded-full 
                        hover:bg-primary transition-all duration-300"
            >
              {t.longevity.highlight_text.button}
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}
