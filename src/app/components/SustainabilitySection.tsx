'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Recycle, Wind, Droplets } from 'lucide-react'

export const SustainabilitySection = () => {
  // Paralaks efekti için
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 md:py-16 w-full overflow-hidden"
    >
      {/* Paralaks efekti ile hareket eden arka plan görseli */}
      <div 
  className="absolute inset-0 z-0 will-change-transform transition-transform duration-500"
  style={{ transform: `translateY(${scrollY * 0.015}px)` }}
>
  <div className="absolute inset-0 bg-black/50 z-10" />
  <Image
    src="/nature.jpg"
    alt="Sürdürülebilir doğa"
    fill
    sizes="100vw"
    style={{ objectFit: 'cover', objectPosition: 'center' }}
    className="brightness-90"
  />
</div>


      {/* Ana içerik */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Sürdürülebilir bir gelecek için ne yapıyoruz?
          </h2>
          
          <div className="w-24 h-1 bg-green-500 mx-auto my-8 rounded-full"></div>
          
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Çevreye duyarlı yaklaşımımız, yenilenebilir malzeme kullanımımız ve sürdürülebilir üretim süreçlerimizle gelecek nesillere daha temiz bir dünya bırakmayı hedefliyoruz.
          </p>
          
          <Link 
            href="#sustainability"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium transition-colors group"
          >
            <span>İncele</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Sürdürülebilirlik ikonları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 max-w-4xl mx-auto">
          {/* Doğal kaynaklar */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Leaf className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Doğal Kaynaklarımız</h3>
            <p className="text-white/80 text-sm">Doğal malzemeler ve sürdürülebilir ormanlardan elde edilen ahşap kullanıyoruz.</p>
          </div>
          
          {/* Geri dönüşüm */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Recycle className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Geri Dönüşüm</h3>
            <p className="text-white/80 text-sm">%100 geri dönüştürülebilir malzemeler ve atık yönetim sistemleri kullanıyoruz.</p>
          </div>
          
          {/* Yenilenebilir enerji */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Wind className="w-8 h-8 text-orange-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Temiz Enerji</h3>
            <p className="text-white/80 text-sm">Üretim tesislerimizde yenilenebilir enerji kaynakları kullanıyoruz.</p>
          </div>
          
          {/* Su tasarrufu */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 bg-teal-500/20 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Droplets className="w-8 h-8 text-teal-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Su Tasarrufu</h3>
            <p className="text-white/80 text-sm">Su tasarrufu sağlayan teknolojiler ve yağmur suyu toplama sistemleri kullanıyoruz.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 