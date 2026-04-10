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
    <footer className="bg-gradient-to-b from-charcoal to-charcoal/95 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 pointer-events-none"></div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-charcoal font-bold text-sm">S</span>
              </div>
              <span className="font-serif text-lg font-bold">Soa Life</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.footer.brand}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#holding" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                  Groupe Holding
                </a>
              </li>
              <li>
                <a href="#tourism" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                  Tourisme
                </a>
              </li>
              <li>
                <a href="#longevity" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                  Longévité
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.partners}</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://madabest.mg" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block flex items-center gap-1">
                  {t.footer.madabest}
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href="https://soamahatsara.mg" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block flex items-center gap-1">
                  {t.footer.soamahatsara}
                  <span className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Dubaï, UAE</h4>
            <p className="text-white/70 text-sm mb-4">
              Meydan Free Zone<br />
              Dubai, United Arab Emirates
            </p>
            <p className="text-white/70 text-sm mb-4">
              contact@soalife.com
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>
            © {currentYear} Soa Life LLC-FZ. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
