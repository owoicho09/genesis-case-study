"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min";
const WHATSAPP_NUMBER = "2349165092953"; // Replace with full number (no +)
const WHATSAPP_MESSAGE = "Hello! I'd like to learn how your client acquisition system works.";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
          Let's Build Your Case Study Next.
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Work with Genesis system to book more calls and close more deals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer">

          <Button
            size="lg"
            className="bg-white hover:bg-slate-100 text-blue-600 rounded-lg px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Phone className="w-5 h-5 mr-2" />
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
            className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-base font-semibold bg-transparent"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Message on WhatsApp
          </Button>
          </Link>
        </div>

        {/* Trust Text */}
        <p className="text-sm text-blue-100">✓ No spam. No fluff. Just results.</p>
      </div>
    </section>
  )
}
