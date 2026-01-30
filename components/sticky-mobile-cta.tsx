"use client"

import { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"
import Link from "next/link"

const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min";
const WHATSAPP_NUMBER = "2349165092953"; // Replace with full number (no +)
const WHATSAPP_MESSAGE = "Hello! I'd like to learn how your client acquisition system works.";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-white border-t border-slate-200 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">Ready to grow?</p>
          <p className="text-xs text-slate-600">Book your strategy call today</p>
        </div>
        <Link href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer">

        <button className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all">
          <Phone className="w-4 h-4" />
          Call
        </button>
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
