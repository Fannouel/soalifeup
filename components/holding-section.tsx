'use client'

import { useContext } from 'react'
import Image from 'next/image'
import Link from "next/link";
import { CheckCircle } from 'lucide-react'
import { LanguageContext } from '@/app/layout-provider'
import { translations } from '@/lib/translations'
import { Globe, Leaf, Settings } from "lucide-react";

export function HoldingSection() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  
  const features = t.holding.features

  const items = [
    {
      title: "Soa Life",
      desc: "Vision globale, structuration et développement international",
      image: "/soalife.png",
      href: "https://soalifeup.vercel.app/ ",
    },
    {
      title: "Soamahatsara",
      desc: "Valorisation éthique des ressources naturelles malagasy",
      image: "/soamahatsara.png",
      href: "https://www.soamahatsara.com",
    },
    {
      title: "Madagascar Best Destination",
      desc: "Tour opérateur spécialisé dans les expériences immersives et haut de gamme à Madagascar",
      image: "/madabest.png",
      href: "https://www.madagascarbestdestination.com",
    },
  ];
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-primary/60 mb-4">
            Global Ecosystem
          </p>

          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-charcoal mb-6">
            {t.holding.mainTitle}
          </h2>

          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            {t.holding.mainDescription}
          </p>
        </div>

        {/* ECOSYSTEM */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">

          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              className="group block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

                {/* IMAGE */}
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* STRATEGY BLOCK */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black"></div>

          <div className="relative z-10 p-12 md:p-16">

            {/* Header */}
            <div className="mb-16 max-w-2xl text-white">
              <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">
                Strategic Approach
              </p>

              <h3 className="font-serif text-4xl font-semibold mb-6">
                Notre Approche
              </h3>

              <p className="text-white/80 leading-relaxed">
                Nous construisons un modèle intégré alignant vision stratégique globale et excellence opérationnelle locale, en créant des synergies durables à forte valeur.
              </p>
            </div>

            {/* PILIERS */}
            <div className="grid md:grid-cols-3 gap-8">

              {[
                {
                  icon: Globe,
                  title: "Marchés internationaux",
                  desc: "Accès à des opportunités globales à forte croissance."
                },
                {
                  icon: Leaf,
                  title: "Ressources locales premium",
                  desc: "Valorisation durable des richesses naturelles malagasy."
                },
                {
                  icon: Settings,
                  title: "Exécution opérationnelle",
                  desc: "Maîtrise des opérations terrain avec excellence."
                }
              ].map((item, i) => {
                const Icon = item.icon

                return (
                  <div
                    key={i}
                    className="group p-8 border border-white/10 rounded-2xl 
                              hover:border-primary/40 transition-all duration-500"
                  >
                    <div className="mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-3">
                      {item.title}
                    </h4>

                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}

            </div>

            {/* FOOT NOTE */}
            <div className="mt-12 pt-6 border-t border-white/10 text-white/50 text-sm">
              Une approche conçue pour générer un impact économique durable et scalable.
            </div>

          </div>

        </div>

      </div>
    </section>
  )
  // return (
  //   <section id="holding" className="py-20 sm:py-20 bg-white relative overflow-hidden">
  //     {/* Decorative background elements */}
  //     <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
  //     <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full -ml-36 -mb-36"></div>
      
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  //       {/* Section Header */}
  //       <div className="text-center mb-16 space-y-4">
  //         <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
  //           {t.holding.mainTitle}
  //         </h2>
  //         <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
  //           {t.holding.mainDescription}
  //         </p>
  //       </div>

  //       {/* Features Grid with Image */}
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
  //         {/* Image */}
  //         <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
  //           <Image
  //             src="/holding-operations.jpg"
  //             alt="Holding operations"
  //             width={600}
  //             height={500}
  //             className="w-full h-auto object-cover"
  //           />
  //           <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
  //         </div>

  //         {/* Features */}
  //         <div className="space-y-6">
  //           {features.map((feature, index) => (
  //             <div 
  //               key={index} 
  //               className="group flex gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 transform hover:translate-x-2"
  //             >
  //               <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
  //                 <CheckCircle className="w-6 h-6 text-primary" />
  //               </div>
  //               <div>
  //                 <h3 className="text-lg font-semibold text-charcoal mb-1">
  //                   {feature.title}
  //                 </h3>
  //                 <p className="text-charcoal/70 text-sm leading-relaxed">
  //                   {feature.description}
  //                 </p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>

  //       {/* Highlight Box */}
  //       <div className="p-8 sm:p-12 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-2xl border border-secondary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
  //         <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
  //           {t.holding.Highlight_box.title}
  //         </h3>
  //         <p className="text-charcoal/80 leading-relaxed mb-4">
  //           {t.holding.Highlight_box.description}
  //         </p>
  //         <ul className="space-y-3 text-charcoal/70">
  //           <li className="flex items-start gap-3">
  //             <span className="text-primary font-bold mt-1">•</span>
  //             <span>{language === 'en' ? t.holding.Highlight_box.integrity : 'L\'intégrité dans chaque transaction commerciale'}</span>
  //           </li>
  //           <li className="flex items-start gap-3">
  //             <span className="text-primary font-bold mt-1">•</span>
  //             <span>{language === 'en' ? 'Transparency with our partners and stakeholders' : 'La transparence avec nos partenaires et stakeholders'}</span>
  //           </li>
  //           <li className="flex items-start gap-3">
  //             <span className="text-primary font-bold mt-1">•</span>
  //             <span>{language === 'en' ? 'Positive social impact on local communities' : 'L\'impact social positif sur les communautés locales'}</span>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </section>
  // )
}
