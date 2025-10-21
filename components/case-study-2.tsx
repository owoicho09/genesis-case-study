"use client"
import Link from "next/link"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min";
const WHATSAPP_NUMBER = "2348142878380"; // Replace with full number (no +)
const WHATSAPP_MESSAGE = "Hello! I'd like to learn how your client acquisition system works.";

export default function CaseStudy2() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [bars, setBars] = useState<number[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Generate bar heights only on client after hydration
  useEffect(() => {
    const initialHeights = Array.from({ length: 40 }, () => Math.random() * 80 + 20)
    setBars(initialHeights)
  }, [])

  // Handle audio play/pause
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch((err) => console.error("Playback failed:", err))
    } else {
      audio.pause()
    }

    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener("ended", handleEnded)
    return () => audio.removeEventListener("ended", handleEnded)
  }, [isPlaying])

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Hear It From the Client
          </h2>
          <p className="text-slate-600">
            Real feedback from client who transformed their outreach with Genesis
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-slate-200">
          {/* Client Avatar */}
          <div className="mb-8 flex justify-center">
            <img
              src="/founder-headshot.jpg"
              alt="Client testimonial"
              className="w-24 h-24 rounded-full border-4 border-blue-100 shadow-lg"
            />
          </div>

          {/* Audio Player */}
          <div className="mb-8 flex justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            <audio ref={audioRef} src="/audio feedback1.opus" preload="auto" />
          </div>

          {/* Waveform (client-only generated) */}
          <div className="flex items-center justify-center gap-1 mb-8 h-12">
            {bars.map((height, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-full transition-all duration-300 ease-in-out"
                style={{
                  height: isPlaying
                    ? `${height + Math.random() * 20 - 10}%`
                    : `${height * 0.4}%`,
                  opacity: isPlaying ? 0.9 : 0.4,
                }}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-lg text-slate-700 mb-4 italic">
  "They delivered leads that actually turned into real business opportunities — we booked 3 calls in the first week."
          </p>

          {/* Client Name */}
          <div className="mb-8">
            <p className="font-semibold text-slate-900">Ken Casmire</p>
            <p className="text-sm text-slate-600">Founder, Hunter Marketing Agency</p>
          </div>

          {/* CTA */}
          <Link
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Send a Whatsapp Dm
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
