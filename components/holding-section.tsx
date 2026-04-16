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
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            { t.holding.mainTitle }
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            { t.holding.mainDescription }
          </p>
        </div>

        {/* ECOSYSTEM */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {items.map((item, i) => (
            <Link key={i} 
                  href={item.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block">
              <div className="group cursor-pointer rounded-2xl overflow-hidden border hover:shadow-xl transition bg-white">

                {/* IMAGE */}
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>
        <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 mb-20 border overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/50 rounded-full blur-2xl"></div>

          {/* HEADER */}
          <div className="mb-10 max-w-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Approche
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nous construisons un modèle intégré qui aligne vision stratégique globale
              et excellence opérationnelle locale, en créant des synergies durables à forte valeur.
            </p>
          </div>

          {/* PILIERS */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="group p-6 rounded-2xl bg-blue-100 border hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-xl bg-white shadow-sm">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Marchés internationaux
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Identification et accès à des opportunités globales à forte croissance.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-blue-100 border hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-xl bg-white shadow-sm">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Ressources locales premium
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Valorisation durable et éthique des richesses naturelles malagasy.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-blue-100 border hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-xl bg-white shadow-sm">
                  <Settings className="w-5 h-5 text-gray-700" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Expertise opérationnelle
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Exécution rigoureuse et maîtrise des opérations terrain à haute performance.
              </p>
            </div>

          </div>

          {/* FOOT NOTE (optionnel premium) */}
          <div className="mt-10 pt-6 border-t text-sm text-gray-500">
            Une approche conçue pour générer un impact économique durable et scalable.
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
