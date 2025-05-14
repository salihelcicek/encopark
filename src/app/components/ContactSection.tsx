'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'Genel Bilgi'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      
      // Reset form after a delay
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: 'Genel Bilgi'
        })
      }, 3000)
    }, 1500)
  }
  
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Bizimle <span className="text-orange-500">İletişime Geçin</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Projeleriniz, sorularınız veya iş birliği fırsatları için bizimle iletişime geçin. Size en kısa sürede yanıt vereceğiz.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Mesaj Gönder</h3>
            
            {submitted ? (
              <div className="bg-teal-500/20 text-white p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                  <Send size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Mesajınız İletildi!</h4>
                <p className="text-white/70">
                  Mesajınız için teşekkür ederiz. En kısa sürede size dönüş yapacağız.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      İsim Soyisim*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="İsminizi giriniz"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      E-posta Adresi*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="E-posta adresinizi giriniz"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                      Telefon Numarası
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Telefon numaranızı giriniz"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                      Konu
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Genel Bilgi">Genel Bilgi</option>
                      <option value="Ürün Bilgisi">Ürün Bilgisi</option>
                      <option value="Fiyat Teklifi">Fiyat Teklifi</option>
                      <option value="İş Birliği">İş Birliği</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Mesajınız*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Mesajınızı yazınız..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        Gönder <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Right: Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Adres</h4>
                  <p className="text-white/70">SARAY MAHALLESİ GİMAT DEPOLAMA ALANI 110. CADDE NO:28/A KAHARAMANKAZAN / ANKARA</p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Telefon</h4>
                  <p className="text-white/70">+90 312 514 48 16</p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">E-posta</h4>
                  <p className="text-white/70">info@encopark.com</p>
                  <p className="text-white/70 mt-1">satis@encopark.com</p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col">
                <h4 className="font-medium text-lg mb-1">Çalışma Saatleri</h4>
                <p className="text-white/70">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="text-white/70 mt-1">Cumartesi: 09:00 - 13:00</p>
                <p className="text-white/70 mt-1">Pazar: Kapalı</p>
              </div>
            </div>
            
            {/* Map (Placeholder - normally would include a real map) */}
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.851647669417!2d32.612247499999995!3d40.05641149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33f347fb273a3%3A0xe0df675579dd25ab!2sEnco%20Park!5e0!3m2!1str!2str!4v1747173700087!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 