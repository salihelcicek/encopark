'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      role: "İstanbul Belediyesi Park Müdürü",
      quote: "EN-CO PARK'ın sunduğu oyun parkları, hem çocukların güvenliği hem de uzun ömürlü kalitesi ile bizi fazlasıyla memnun etti. Belediye olarak tüm parklarımızda onların ürünlerini tercih ediyoruz.",
      image: "/testimonial1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Ayşe Demir",
      role: "Site Yöneticisi",
      quote: "Sitenin ortak alanlarında kullandığımız kent mobilyaları hem estetik hem de dayanıklı. Sakinlerimiz çok memnun, EN-CO PARK ekibine profesyonel yaklaşımları için teşekkür ederiz.",
      image: "/testimonial2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      role: "Okul Müdürü",
      quote: "Okul bahçemizi yenilerken EN-CO PARK ile çalışmak harika bir deneyimdi. Çocuklarımızın ihtiyaçlarını anladılar ve en uygun çözümleri sundular. Sonuçtan çok memnunuz.",
      image: "/testimonial3.jpg",
      rating: 4,
    },
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müşteri <span className="text-teal-500">Yorumları</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Müşterilerimizin memnuniyeti bizim için en büyük motivasyon kaynağı. İşte bazı değerli görüşler.
          </p>
        </div>
        
        {/* Testimonials slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left: Image */}
              <div className="w-full md:w-1/3">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="w-full md:w-2/3">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonials[activeIndex].rating ? "fill-orange-500 text-orange-500" : "text-gray-300"}
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-900 text-lg md:text-xl italic mb-6">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-teal-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeIndex ? "bg-orange-500 w-6" : "bg-gray-300 hover:bg-orange-300"
                  }`}
                  aria-label={`Yorum ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 