'use client'

import { useEffect, useState, useContext, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)
  const t = translations[language]

  const [show, setShow] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      const threshold = 150

      // header visible seulement après threshold
      if (current > threshold) {
        setShow(false)
      } else {
        setShow(true)
      }

      lastScrollY.current = current
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t.header.home, href: '#' },
    { label: t.header.holding, href: '#holding' },
    { label: t.header.tourism, href: '#tourism' },
    { label: t.header.longevity, href: '#longevity' },
    { label: t.header.contact, href: '#contact' },
  ]

  return (
    <header
  className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-500
    ${show ? 'translate-y-0' : '-translate-y-full'}
    bg-gradient-to-b from-white/40 via-white/30 to-white/20
    backdrop-blur-xl
    border-b border-amber-400/20
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
  `}
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <div className="flex justify-between items-center h-24">

      {/* Logo premium */}
      <Link href="#" className="flex items-center gap-4 group">
        <div className="
          w-11 h-11 rounded-full
          bg-gradient-to-br from-emerald-700 to-emerald-900
          flex items-center justify-center
          shadow-md
          ring-2 ring-amber-400/40
        ">
          <span className="text-amber-200 font-semibold text-lg tracking-wide">
            S
          </span>
        </div>

        <span className="
          hidden sm:inline
          font-serif text-2xl md:text-3xl
          font-semibold tracking-widest
          text-emerald-950
          group-hover:text-emerald-800
          transition-colors duration-300
        ">
          Soa Life
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">

        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="
              relative text-sm font-medium tracking-wide
              text-emerald-950
              hover:text-emerald-700
              transition-all duration-300
              group
            "
          >
            {item.label}

            {/* underline luxe or */}
            <span className="
              absolute left-0 -bottom-1
              w-0 h-[1.5px]
              bg-gradient-to-r from-amber-400 to-amber-600
              group-hover:w-full
              transition-all duration-300
            " />
          </Link>
        ))}
      </nav>

      {/* Language Switcher premium */}
      <div className="hidden md:flex items-center gap-3 ml-10">

        <div className="flex rounded-full p-1 bg-emerald-950/5 border border-amber-400/20">
          <button
            onClick={() => setLanguage('en')}
            className={`
              px-4 py-1.5 text-sm font-medium rounded-full
              transition-all duration-300
              ${language === 'en'
                ? 'bg-emerald-800 text-amber-100 shadow-md'
                : 'text-emerald-950 hover:text-emerald-700'
              }
            `}
          >
            EN
          </button>

          <button
            onClick={() => setLanguage('fr')}
            className={`
              px-4 py-1.5 text-sm font-medium rounded-full
              transition-all duration-300
              ${language === 'fr'
                ? 'bg-emerald-800 text-amber-100 shadow-md'
                : 'text-emerald-950 hover:text-emerald-700'
              }
            `}
          >
            FR
          </button>
        </div>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-emerald-950" />
        ) : (
          <Menu className="w-7 h-7 text-emerald-950" />
        )}
      </button>

    </div>

    {/* Mobile Navigation */}
    {isOpen && (
      <nav className="
        md:hidden pb-5 space-y-2
        border-t border-amber-400/20 mt-2 pt-3
      ">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="
              block px-4 py-3 text-sm font-medium
              text-emerald-950
              hover:bg-emerald-50
              rounded-lg
              transition-all
            "
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