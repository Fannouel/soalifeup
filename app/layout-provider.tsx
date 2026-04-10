'use client'

import { createContext, useState, ReactNode } from 'react'
import { Language } from '@/lib/translations'
import { Analytics } from '@vercel/analytics/next'

export const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
}>({
  language: 'en',
  setLanguage: () => {},
})

export function LayoutProvider({
  children,
  lang,
}: {
  children: ReactNode
  lang: Language
}) {
  const [language, setLanguage] = useState<Language>(lang)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </LanguageContext.Provider>
  )
}
