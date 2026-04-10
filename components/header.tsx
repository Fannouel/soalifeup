'use client'

import { useState, useContext } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)
  const t = translations[language]

  const navItems = [
    { label: t.header.home, href: '#' },
    { label: t.header.holding, href: '#holding' },
    { label: t.header.tourism, href: '#tourism' },
    { label: t.header.longevity, href: '#longevity' },
    { label: t.header.contact, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border-b border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-serif text-xl font-bold text-charcoal hidden sm:inline">
              Soa Life
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-charcoal hover:text-primary transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-2 ml-8">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-white'
                  : 'text-charcoal hover:bg-primary/10'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                language === 'fr'
                  ? 'bg-primary text-white'
                  : 'text-charcoal hover:bg-primary/10'
              }`}
            >
              FR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-charcoal hover:bg-primary/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
