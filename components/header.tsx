'use client'

import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)
  const t = translations[language]
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Détecter si on a scrollé
        setScrolled(currentScrollY > 50);

        // Direction scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShow(false); // scroll vers le bas → cacher
        } else {
          setShow(true); // scroll vers le haut → montrer
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navItems = [
      { label: t.header.home, href: '#' },
      { label: t.header.holding, href: '#holding' },
      { label: t.header.tourism, href: '#tourism' },
      { label: t.header.longevity, href: '#longevity' },
      { label: t.header.contact, href: '#contact' },
    ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${show ? "translate-y-0" : "-translate-y-full"}
        ${
          scrolled
            ? "bg-transparent backdrop-blur-md shadow-md border-b border-primary-200"
            : "bg-transparent"
        }
      `}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex justify-between items-center h-24">

        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-semibold text-base">S</span>
          </div>

          <span className="font-serif text-2xl md:text-3xl font-semibold text-charcoal tracking-wide hidden sm:inline">
            Soa Life
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-medium text-charcoal hover:text-primary 
                        transition-all duration-300 relative group tracking-wide"
            >
              {item.label}

              <span className="absolute -bottom-1 left-0 w-0 h-[2px] 
                              bg-gradient-to-r from-primary to-secondary 
                              group-hover:w-full transition-all duration-300">
              </span>
            </Link>
          ))}

        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center gap-3 ml-10">

          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
              language === 'en'
                ? 'bg-primary text-white shadow-sm'
                : 'text-charcoal hover:bg-primary/10'
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLanguage('fr')}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
              language === 'fr'
                ? 'bg-primary text-white shadow-sm'
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
            <X className="w-7 h-7 text-charcoal" />
          ) : (
            <Menu className="w-7 h-7 text-charcoal" />
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
