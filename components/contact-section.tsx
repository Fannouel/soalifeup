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
    <section id="contact" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-primary/60 mb-4">
            Private Inquiry
          </p>

          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-charcoal mb-6">
            {t.contact.title}
          </h2>

          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            {t.contact.mainDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT - Contact Info */}
          <div className="space-y-8">

            {contactInfo.map((info, index) => {
              const Icon = info.icon

              return (
                <div
                  key={index}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center 
                                  group-hover:bg-primary/20 transition">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-charcoal/50 mb-1">
                      {info.label}
                    </p>
                    <p className="text-lg font-medium text-charcoal">
                      {info.value}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* Extra note */}
            <p className="text-sm text-charcoal/50 pt-4">
              Nous répondons sous 24 à 48 heures. Toutes les demandes sont traitées de manière confidentielle.
            </p>

          </div>

          {/* RIGHT - Form */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl"></div>

            <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-200">

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contact.name}
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.email}
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition"
                    required
                  />
                </div>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition"
                  required
                >
                  <option value="">{t.contact.selectSubject}</option>
                  {t.contact.subjects.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder={t.contact.message}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-charcoal text-white rounded-full 
                            hover:bg-primary transition-all duration-300"
                >
                  {t.contact.send}
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Social */}
        <div className="flex justify-center items-center gap-6 pt-16">
          <span className="text-charcoal/50 uppercase tracking-wider text-sm">
            {t.contact.followUs}
          </span>

          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.href}
                className="w-10 h-10 flex items-center justify-center rounded-full 
                          border border-gray-300 hover:bg-primary hover:text-white transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
