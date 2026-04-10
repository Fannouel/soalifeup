'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/layout'

export function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-lg transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-white'
            : 'text-charcoal hover:bg-primary/10'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 text-sm font-medium rounded-lg transition-all duration-300 ${
          language === 'fr'
            ? 'bg-primary text-white'
            : 'text-charcoal hover:bg-primary/10'
        }`}
      >
        FR
      </button>
    </div>
  )
}
