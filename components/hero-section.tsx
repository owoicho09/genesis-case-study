"use client"


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min";
const WHATSAPP_NUMBER = "2348142878380"; // Replace with full number (no +)
const WHATSAPP_MESSAGE = "Hello! I'd like to learn how your client acquisition system works.";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-20 md:py-32">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8 inline-block">
          <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            Genesis.ai
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight text-balance">
          Client Results.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
          Genesis booked consistent calls
          within weeks using a fully automated client acquisition system — from no leads inboxes to booked calls on autopilot.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Link href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Book a Call

          </Button>
        </Link>

        <Link
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg px-8 py-6 text-base font-semibold bg-transparent"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Message on WhatsApp

          </Button>
            </Link>
        </div>

        {/* Hero Visual - Dashboard Mockup */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <img src="/analytics.JPG" alt="Genesis.ai Dashboard" className="w-full h-auto" />
          </div>
          {/* Floating card accent */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-200 max-w-xs hidden md:block">
            <div className="text-sm font-semibold text-slate-900">✓ 340% increase in booked calls</div>
            <div className="text-xs text-slate-500 mt-1">Average client result in 30 days</div>
          </div>
        </div>
      </div>
    </section>
  )
}
