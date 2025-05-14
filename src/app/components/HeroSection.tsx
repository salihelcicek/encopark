'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  // For parallax effect
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section 
        ref={heroRef}
        className="relative min-h-screen w-full flex items-center overflow-hidden pt-16"
      >
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30 z-10"
          />
          <Image
            src="/encoparkkidplaying.jpg" // Replace with your park image
            alt="Park background"
            fill
            priority
            sizes="100vw"
            style={{ 
              objectFit: 'cover',
              transform: `translateY(${scrollY * 0.2}px)` // Parallax effect
            }}
            className="select-none brightness-75"
          />
        </div>

        {/* Decorative shapes - enhanced for better contrast */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-orange-500/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-teal-500/30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-gray-900/50 blur-3xl" />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 gap-12">
          {/* Left section: Text and CTAs */}
          <div className="text-white max-w-xl space-y-8">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="text-orange-400 font-medium uppercase tracking-wider text-sm">EN-CO PARK</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-md">
              Şehirlerin <span className="text-orange-400 inline-block relative">
                geleceğini 
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5" stroke="#FF7A00" strokeWidth="3" fill="none" />
                </svg>
              </span> tasarlıyoruz
            </h1>
            
            <p className="text-lg text-white leading-relaxed drop-shadow-sm">
              Modern ve sürdürülebilir oyun parkları, kent mobilyaları ve spor ekipmanları ile şehirleri daha yaşanabilir hale getiriyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link 
                href="#products"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-colors group"
              >
                <span>Ürünlerimizi Keşfet</span>
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center sm:justify-start text-white hover:text-orange-500 px-8 py-4 sm:px-0 rounded-full border sm:border-0 border-white/20 transition-colors group"
              >
                <span>Bize Ulaşın</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Partners/Credentials */}
            {/* <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/60 mb-4">Güvenilir İş Ortaklarımız</p>
              <div className="flex flex-wrap items-center gap-8">
                <Image src="/partner1.png" alt="Partner 1" width={80} height={30} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="/partner2.png" alt="Partner 2" width={80} height={30} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="/partner3.png" alt="Partner 3" width={80} height={30} className="grayscale hover:grayscale-0 transition-all" />
              </div>
            </div> */}
          </div>
          
          {/* Right section: Floating product showcase */}
          <div className="relative w-full max-w-lg lg:max-w-md xl:max-w-lg hidden md:block">
            <Link href="#playgrounds" className="group relative block">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 group-hover:shadow-orange-500/20 group-hover:border-orange-500/20">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <Image
                  src="/product-showcase.jpg" // Replace with your product image
                  alt="Ürün Görseli"
                  fill
                  className="object-cover scale-105 transition-all duration-700 group-hover:scale-115"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
                    <p className="text-white/90 text-sm font-medium">Öne Çıkan</p>
                  </div>
                  <h3 className="text-white text-xl font-bold mt-2 drop-shadow-md">Modern Oyun Parkı</h3>
                  
                  {/* Hidden button that shows on hover */}
                  <div className="flex items-center mt-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-white text-sm font-medium mr-2">İncele</span>
                    <div className="bg-orange-500 rounded-full p-1">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-5"></div>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-white/60 text-sm mb-2">Keşfet</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Why EN-CO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium tracking-wider text-sm uppercase">Farkımız</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Neden EN-CO?</h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-orange-500 rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              20 yılı aşkın deneyimimiz ve uzman ekibimizle şehirlerin yaşam kalitesini artıracak 
              çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Kalite Kartı */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-500/10 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-teal-500/10 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-orange-500/10 mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-500">01</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kalite ve Dayanıklılık</h3>
                
                <div className="w-12 h-1 bg-orange-500 rounded-full mb-4 transition-all duration-300 group-hover:w-20"></div>
                
                <p className="text-gray-600 mb-6">
                  En kaliteli malzemeler ve en son teknolojilerle üretilen ürünlerimiz, uzun yıllar boyunca ilk günkü performansını korur. Tüm ürünlerimiz uluslararası güvenlik standartlarına uygun olarak üretilmektedir.
                </p>
                
                <div className="overflow-hidden h-8">
                  <div className="transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0 text-orange-500 font-medium flex items-center">
                    <span>Daha Fazla Bilgi</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Çözüm Odaklılık Kartı */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-teal-500/10 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-orange-500/10 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-teal-500/10 mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-teal-500">02</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">İnovatif Çözümler</h3>
                
                <div className="w-12 h-1 bg-teal-500 rounded-full mb-4 transition-all duration-300 group-hover:w-20"></div>
                
                <p className="text-gray-600 mb-6">
                  Her projeye özel olarak geliştirilen çözümlerle, hem çocuklar hem yetişkinler için eğlenceli, güvenli ve estetik alanlar tasarlıyoruz. Sürekli Ar-Ge çalışmalarımızla sektöre yön veriyoruz.
                </p>
                
                <div className="overflow-hidden h-8">
                  <div className="transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0 text-teal-500 font-medium flex items-center">
                    <span>Daha Fazla Bilgi</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sürdürülebilirlik Kartı */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-gray-500/10 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-orange-500/10 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gray-200 mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-700">03</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Çevre Dostu Yaklaşım</h3>
                
                <div className="w-12 h-1 bg-gray-700 rounded-full mb-4 transition-all duration-300 group-hover:w-20"></div>
                
                <p className="text-gray-600 mb-6">
                  Çevreye duyarlı üretim süreçleri ve geri dönüştürülebilir malzeme kullanımıyla doğaya saygılı ürünler üretiyoruz. Sürdürülebilir şehircilik anlayışıyla geleceği bugünden düşünüyoruz.
                </p>
                
                <div className="overflow-hidden h-8">
                  <div className="transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0 text-gray-700 font-medium flex items-center">
                    <span>Daha Fazla Bilgi</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
