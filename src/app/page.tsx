'use client'

import React from 'react'
import { Navbar } from '@/app/components/Navbar'
import { HeroSection } from '@/app/components/HeroSection'
import { FeaturesSection } from '@/app/components/FeaturesSection'
import { TestimonialsSection } from '@/app/components/TestimonialsSection'
import { ContactSection } from '@/app/components/ContactSection'
import { Footer } from '@/app/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
