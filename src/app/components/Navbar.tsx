import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Tent, Building2, Dumbbell, Info, LayoutPanelTop, PhoneCall, ShoppingBag, Search, Sun, Moon, Globe, LogIn } from 'lucide-react'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // Implement dark mode logic here
  }

  const navItems = [
    {
      name: 'Ürünler',
      href: '#products',
      hasDropdown: true,
      icon: <ShoppingBag className="w-4 h-4 mr-2" />,
      dropdownItems: [
        { name: 'Oyun Parkları', href: '#playgrounds', icon: <Tent className="w-4 h-4" /> },
        { name: 'Kent Mobilyaları', href: '#urban-furniture', icon: <Building2 className="w-4 h-4" /> },
        { name: 'Spor Ekipmanları', href: '#sports-equipment', icon: <Dumbbell className="w-4 h-4" /> }
      ]
    },
    { name: 'Hakkımızda', href: '#about', hasDropdown: false, icon: <Info className="w-4 h-4 mr-2" /> },
    { name: 'Projeler', href: '#projects', hasDropdown: false, icon: <LayoutPanelTop className="w-4 h-4 mr-2" /> },
    { name: 'İletişim', href: '#contact', hasDropdown: false, icon: <PhoneCall className="w-4 h-4 mr-2" /> }
  ]

  return (
    <header 
      className={`w-full px-4 lg:px-8 py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 shadow-md backdrop-blur-sm' 
          : 'lg:bg-white/10 lg:backdrop-blur-sm bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center space-x-1">
          <div className="flex items-center">
          <Image
              src="/logow.svg"
              alt="ENCO"
              width={100}
              height={40}
            className="object-contain"
          />
            
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasDropdown ? (
                <button 
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center transition-colors py-2 ${
                    scrolled ? 'text-white hover:text-orange-400' : 'text-white hover:text-orange-500'
                  }`}
                >
                  {item.icon}
                  {item.name}
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>
              ) : (
                <Link 
                  href={item.href} 
                  className={`flex items-center transition-colors py-2 ${
                    scrolled ? 'text-white hover:text-orange-400' : 'text-white hover:text-orange-500'
                  }`}
                >
                  {item.icon}
                  {item.name}
          </Link>
              )}
              
              {/* Dropdown for desktop */}
              {item.hasDropdown && (
                <div className={`absolute left-0 mt-1 w-52 rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                  activeDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                } ${
                  scrolled ? 'bg-gray-900/70 backdrop-blur-sm' : 'bg-white/70 backdrop-blur-sm'
                }`}>
                  <div className="py-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className={`flex items-center px-4 py-2 text-sm transition-colors ${
                          scrolled 
                            ? 'text-white hover:bg-orange-500 hover:text-white' 
                            : 'text-gray-900 hover:bg-orange-500 hover:text-white'
                        }`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="mr-3">{dropdownItem.icon}</span>
                        {dropdownItem.name}
          </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Utility Actions */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Search Toggle */}
          <div className="relative flex items-center">
            <div className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
              searchOpen ? 'w-60 opacity-100 mr-2' : 'w-0 opacity-0 mr-0'
            }`}>
              <input 
                type="text" 
                placeholder="Ara..." 
                className="w-full px-4 py-2 rounded-full border border-gray-200 text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                autoFocus={searchOpen}
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
                onClick={() => setSearchOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-black/10'
              }`}
              aria-label="Ara"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-black/10'
              }`}
              aria-label="Dil Seçimi"
            >
              <Globe className="w-5 h-5" />
            </button>
            
            {/* Language Panel */}
            <div className={`absolute right-0 top-full mt-2 w-32 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
              langOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors">
                  Türkçe
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors">
                  English
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors">
                  Deutsch
                </button>
              </div>
            </div>
          </div>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              scrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-black/10'
            }`}
            aria-label={darkMode ? 'Aydınlık Moda Geç' : 'Karanlık Moda Geç'}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {/* Login Button */}
          <Link 
            href="/login" 
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full transition-colors flex items-center space-x-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Giriş</span>
          </Link>

          {/* CTA Button */}
          <button className="bg-orange-500 text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors font-medium">
            Teklif Al
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <div className="relative flex items-center">
            <div className={`absolute right-full overflow-hidden transition-all duration-300 ease-in-out ${
              searchOpen ? 'w-48 opacity-100 mr-2' : 'w-0 opacity-0 mr-0'
            }`}>
              <input 
                type="text" 
                placeholder="Ara..." 
                className="w-full px-4 py-2 rounded-full border border-gray-700 bg-gray-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                autoFocus={searchOpen}
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
                onClick={() => setSearchOpen(false)}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full text-white hover:bg-white/10"
              aria-label="Ara"
            >
              <Search size={20} />
            </button>
          </div>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full text-white hover:bg-white/10"
            aria-label={menuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`fixed inset-0 bg-gray-900 z-[9999] transition-opacity duration-300 ease-in-out lg:hidden ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`} style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <div className="absolute inset-0 overflow-y-auto">
          <div className="h-screen px-6 pt-16 pb-20">
            {/* Close button at the top */}
            <button 
              onClick={() => setMenuOpen(false)}
              className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors z-[10000]"
              aria-label="Menüyü Kapat"
            >
              <X size={24} />
            </button>
            
            <div className="pt-8">
              {/* Logo at top of mobile menu */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/logow.svg"
                  alt="ENCO"
                  width={120}
                  height={48}
                  className="object-contain"
                />
              </div>
            
              <nav className="space-y-6 mt-4">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-800 pb-4">
                    {item.hasDropdown ? (
                      <>
                        <button 
                          onClick={() => toggleDropdown(item.name)}
                          className="flex justify-between items-center w-full text-lg font-medium text-white"
                        >
                          <span className="flex items-center">
                            {item.icon}
                            {item.name}
                          </span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile dropdown */}
                        <div className={`mt-2 ml-4 space-y-2 transition-all duration-200 ${
                          activeDropdown === item.name ? 'block' : 'hidden'
                        }`}>
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center py-2 text-gray-300 hover:text-orange-500"
                              onClick={() => setMenuOpen(false)}
                            >
                              <span className="mr-3">{dropdownItem.icon}</span>
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center text-lg font-medium text-white hover:text-orange-500"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Language Selector */}
                <div className="border-b border-gray-800 pb-4">
                  <p className="text-sm text-gray-400 mb-2">Dil Seçimi</p>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-orange-500 text-white rounded-md">TR</button>
                    <button className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-md">EN</button>
                    <button className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-md">DE</button>
                  </div>
                </div>
                
                {/* Mobile Dark Mode Toggle */}
                <div className="border-b border-gray-800 pb-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-300">Karanlık Mod</p>
                    <button 
                      onClick={toggleDarkMode}
                      className={`w-12 h-6 rounded-full p-1 transition-colors ${
                        darkMode ? 'bg-teal-500' : 'bg-gray-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                        darkMode ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                </div>
              </nav>
              
              <div className="mt-auto pt-8 space-y-4">
                {/* Mobile Login Button */}
                <Link
                  href="/login"
                  className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  Giriş Yap
                </Link>
              
                {/* Mobile CTA Button */}
                <button className="w-full bg-orange-500 text-white text-center py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Teklif Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
