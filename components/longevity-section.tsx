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
    <section id="longevity" className="py-20 sm:py-20 bg-gradient-to-b from-white via-primary/3 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -ml-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Curateurs de Longévité
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Notre curated collection essentiels pour une vie saine, longue et épanouie. Chaque produit est sélectionné pour sa qualité, son éthique et son impact sur votre bien-être.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={index}
                className="p-8 bg-white rounded-xl border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="inline-block p-3 bg-primary/15 rounded-lg mb-4 group-hover:bg-primary/25 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-charcoal mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-charcoal/70">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Philosophy Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="/wellness-longevity.jpg"
              alt="Wellness and longevity"
              width={600}
              height={600}
              className="w-full h-auto object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h3 className="font-serif text-3xl font-bold text-charcoal mb-6">
              {t.longevity.highlight_text.title}
            </h3>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              {t.longevity.highlight_text.description}
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              {t.longevity.highlight_text.description2} 
            </p>
            <Link
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.soamahatsara.com/"
                className="inline-flex px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t.longevity.highlight_text.button}
              </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-2xl"></div>
            <div className="relative bg-white p-12 rounded-xl shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{t.longevity.highlight[0].title}</h4>
                    <p className="text-charcoal/70 text-sm">{t.longevity.highlight[0].description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{t.longevity.highlight[1].title}</h4>
                    <p className="text-charcoal/70 text-sm">{t.longevity.highlight[1].description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{t.longevity.highlight[2].title}</h4>
                    <p className="text-charcoal/70 text-sm">{t.longevity.highlight[2].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
