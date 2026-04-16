'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { Linkedin, Instagram, Facebook } from 'lucide-react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* TOP SIGNATURE */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6">
            Elevating Life, Bridging Continents
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Une vision globale reliant excellence économique, expériences humaines et longévité durable.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-charcoal font-semibold">S</span>
              </div>
              <span className="font-serif text-2xl font-semibold">
                Soa Life
              </span>
            </div>

            <p className="text-white/60 leading-relaxed text-sm">
              {t.footer.brand}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#" },
                { label: "Holding", href: "#holding" },
                { label: "Tourisme", href: "#tourism" },
                { label: "Longévité", href: "#longevity" }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/40 mb-6">
              Ecosystem
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.madagascarbestdestination.com/en"
                  target="_blank"
                  className="text-white/70 hover:text-white transition flex items-center gap-2"
                >
                  Madabest ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.soamahatsara.com/"
                  target="_blank"
                  className="text-white/70 hover:text-white transition flex items-center gap-2"
                >
                  Soamahatsara ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/40 mb-6">
              Contact
            </h4>

            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Meydan Free Zone<br />
              Dubai, UAE
            </p>

            <p className="text-white/60 text-sm mb-6">
              contact@soalife.com
            </p>

            <div className="flex gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full 
                            border border-white/20 hover:bg-primary hover:border-primary transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">

          <p>
            © {currentYear} Soa Life LLC-FZ. {t.footer.rights}
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white transition">
              {t.footer.terms}
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}
