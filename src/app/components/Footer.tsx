import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Youtube, href: 'https://youtube.com' },
  ]
  
  const linkGroups = [
    {
      title: 'Kurumsal',
      links: [
        { label: 'Hakkımızda', href: '#about' },
        { label: 'Vizyon & Misyon', href: '#vision' },
        { label: 'Kalite Politikamız', href: '#quality' },
        { label: 'İnsan Kaynakları', href: '#careers' },
      ],
    },
    {
      title: 'Ürünlerimiz',
      links: [
        { label: 'Oyun Parkları', href: '#playgrounds' },
        { label: 'Kent Mobilyaları', href: '#urban-furniture' },
        { label: 'Spor Ekipmanları', href: '#sports-equipment' },
        { label: 'Özel Tasarımlar', href: '#custom-designs' },
      ],
    },
    {
      title: 'Faydalı Linkler',
      links: [
        { label: 'Sık Sorulan Sorular', href: '#faq' },
        { label: 'Kullanım Kılavuzları', href: '#manuals' },
        { label: 'Blog', href: '#blog' },
        { label: 'İletişim', href: '#contact' },
      ],
    },
  ]
  
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 mb-16">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
            <Image
              src="/logow.svg"
              alt="ENCO"
              width={100}
              height={40}
              className="object-contain"
            />
            </Link>
            <p className="text-white/70 mb-6">
              EN-CO PARK, modern ve güvenli oyun parkları, kent mobilyaları ve spor ekipmanları üretiminde Türkiye&apos;nin öncü markasıdır.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Link groups */}
          {linkGroups.map((group, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-white/70 hover:text-orange-500 inline-flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Bültenimize Abone Olun</h4>
            <p className="text-white/70 mb-4">
              Yeni ürünlerimiz ve güncellemelerimizden haberdar olmak için bültenimize abone olun.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="E-posta adresiniz"
                className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
              />
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-r-lg transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {currentYear} EN-CO PARK. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/70 hover:text-white text-sm">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-white text-sm">
                Kullanım Şartları
              </Link>
              <Link href="/cookies" className="text-white/70 hover:text-white text-sm">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 