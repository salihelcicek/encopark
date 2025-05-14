'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Shield, Recycle, Award, Users } from 'lucide-react'

export const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('playgrounds')
  
  const featuresData = {
    playgrounds: {
      title: 'Oyun Parkları',
      subtitle: 'Çocuklar için güvenli ve eğlenceli deneyimler sunan modern oyun parkları',
      image: '/playground.png',
      features: [
        { title: 'Güvenlik', description: 'EN 1176 standartlarına uygun, çocuklara özel güvenlik özellikleri', icon: Shield },
        { title: 'Sürdürülebilirlik', description: 'Çevre dostu, yüksek kaliteli ve uzun ömürlü malzemeler', icon: Recycle },
        { title: 'Erişilebilirlik', description: 'Tüm çocukların erişimine uygun kapsayıcı tasarımlar', icon: Users },
      ],
    },
    urbanFurniture: {
      title: 'Kent Mobilyaları',
      subtitle: 'Şehirlere işlevsellik ve estetik katan modern kentsel çözümler',
      image: '/urban-furniture.jpg',
      features: [
        { title: 'Dayanıklılık', description: 'Her türlü hava koşuluna dayanıklı, uzun ömürlü yapı', icon: Shield },
        { title: 'Estetik', description: 'Şehir dokusuna uyumlu, modern ve şık tasarımlar', icon: Award },
        { title: 'Pratiklik', description: 'Kullanım kolaylığı sunan, ergonomik tasarımlar', icon: Users },
      ],
    },
    sportsEquipment: {
      title: 'Spor Ekipmanları',
      subtitle: 'Açık alanlarda spor yapmayı teşvik eden dayanıklı ekipmanlar',
      image: '/sports-equipment.jpg',
      features: [
        { title: 'Performans', description: 'Profesyonel standartlara uygun, yüksek performanslı ekipmanlar', icon: Award },
        { title: 'Dayanıklılık', description: 'Dış ortam koşullarına uygun, vandalizme dayanıklı yapı', icon: Shield },
        { title: 'Çeşitlilik', description: 'Her yaş ve fitness seviyesine uygun geniş ürün yelpazesi', icon: Users },
      ],
    },
  }
  
  const tabs = [
    { id: 'playgrounds', label: 'Oyun Parkları' },
    { id: 'urbanFurniture', label: 'Kent Mobilyaları' },
    { id: 'sportsEquipment', label: 'Spor Ekipmanları' },
  ]
  
  const activeFeatures = featuresData[activeTab as keyof typeof featuresData]

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ürün <span className="text-orange-500">Kategorilerimiz</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            EN-CO PARK olarak, her yaştan insanın yaşam kalitesini artırmak için tasarlanmış çeşitli ürün grupları sunuyoruz.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-6 rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Featured content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <Image
              src={activeFeatures.image}
              alt={activeFeatures.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <h3 className="text-white text-2xl font-bold">{activeFeatures.title}</h3>
            </div>
          </div>
          
          {/* Right: Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">{activeFeatures.title}</h3>
            <p className="text-gray-600 text-lg">{activeFeatures.subtitle}</p>
            
            <div className="mt-8 space-y-6">
              {activeFeatures.features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors group">
              <span>Daha Fazla Bilgi</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 