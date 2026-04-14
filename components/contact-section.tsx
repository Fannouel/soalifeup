'use client'

import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from 'lucide-react'
import { useState } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'

export function ContactSection() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info[0].label,
      value: t.contact.info[0].value
    },
    {
      icon: Phone,
      label: t.contact.info[1].label,
      value: t.contact.info[1].value
    },
    {
      icon: Mail,
      label: t.contact.info[2].label,
      value: t.contact.info[2].value
    }
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' }
  ]

  return (
    <section id="contact" className="py-20 sm:py-20 bg-gradient-to-b from-white to-primary/3 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t.contact.mainDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 transform hover:translate-x-2">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/15 hover:bg-primary/25 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal/60">{info.label}</p>
                    <p className="text-lg font-semibold text-charcoal">{info.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-primary/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.name}
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 bg-primary/5 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all text-charcoal placeholder:text-charcoal/50"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.email}
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 bg-primary/5 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all text-charcoal placeholder:text-charcoal/50"
                  required
                />
              </div>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/5 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all text-charcoal"
                required
              >
                <option value="">{t.contact.selectSubject}</option>
                {t.contact.subjects.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
                        {/* <option value="investment">Opportunités d'Investissement</option>
                        <option value="tourism">Voyage Exclusif</option>
                        <option value="longevity">Produits Longévité</option>
                        <option value="partnership">Partenariats</option>
                        <option value="other">Autre</option> */}
              </select>

              <textarea
                name="message"
                placeholder={t.contact.message}
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-primary/5 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all text-charcoal placeholder:text-charcoal/50 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t.contact.send}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 pt-8 border-t border-primary/10">
          <span className="text-charcoal/70 font-medium">{t.contact.followUs}</span>
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.href}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Social link"
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
