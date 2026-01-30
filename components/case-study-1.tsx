"use client"
import Link from "next/link"

const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min";
const WHATSAPP_NUMBER = "2349165092953"; // Replace with full number (no +)
const WHATSAPP_MESSAGE = "Hello! I'd like to learn how your client acquisition system works.";

export default function CaseStudy1() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">Real Conversations, Real Results</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
  Before Gen, Ken relied on manual prospecting and irregular outreach — which made scaling impossible. Our system automated his lead flow and helped him maintain consistent client acquisition.
          </p>
        </div>

        {/* Before/After Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Before */}
          <div className="group">
            <div className="bg-slate-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4">
              <img src="/casestudy before.jpg" alt="Before Gen: Low replies" className="w-full h-auto" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Before Gen</h3>
              <p className="text-sm text-slate-600">  Ken booked only 3–4 calls a month because his lead flow was inconsistent and couldn’t scale beyond manual outreach.</p>
            </div>
          </div>

          {/* After */}
          <div className="group">
            <div className="bg-slate-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4">
              <img
                src="/casesudy after1.jpg"
                alt="After Gen: Booked call confirmed"
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">After Gen</h3>
              <p className="text-sm text-slate-600">  We delivered highly targeted leads to his outreach every week — and within just 5 days, Ken had already booked 3 qualified calls.</p>
              <p className="text-sm text-slate-600"> It all came down to having a reliable lead flow and an outreach system that actually converts.</p>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-4">Want results like this?</p>
        <Link href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Book a call now
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
