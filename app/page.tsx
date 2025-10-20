"use client"
import HeroSection from "@/components/hero-section"
import CaseStudy1 from "@/components/case-study-1"
import CaseStudy2 from "@/components/case-study-2"
import CaseStudy3 from "@/components/case-study-3"
import FinalCTA from "@/components/final-cta"
import StickyMobileCTA from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <StickyMobileCTA />
      <HeroSection />
      <CaseStudy1 />
      <CaseStudy2 />
      <CaseStudy3 />
      <FinalCTA />
    </main>
  )
}
