"use client"
import Link from "next/link"

const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min";
const WHATSAPP_NUMBER = "2348142878380"; // Replace with full number (no +)
const WHATSAPP_MESSAGE = "Hello! I'd like to learn how your client acquisition system works.";

export default function CaseStudy3() {
  return (
    <section className="py-20 md:py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">Proof You Can See</h2>
  Our client <span className="font-semibold">Ken</span> booked 3 qualified calls within his first week using Genesis.
        </div>

        {/* Full-width Screenshots */}
        <div className="space-y-8">
          {/* Screenshot 1 - DM Conversations */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
            <img src="/booked calls1.jpg" alt="Successful DM conversations" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
              <p className="font-semibold text-slate-900 mb-2">Booked calls</p>
              <p className="text-sm text-slate-600">
  The right ICP list + tailored emails = real conversations. Ken started booking calls just days after launch.
              </p>
            </div>
          </div>

          {/* Screenshot 2 - Dashboard Metrics */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
            <img src="/booked calender.jpg" alt="Dashboard metrics" className="w-full h-auto" />
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
              <p className="font-semibold text-slate-900 mb-2">Ken's fully booked calender</p>
              <p className="text-sm text-slate-600">
  A real snapshot from Ken’s calendar — 3 booked calls in just one week after launching his outreach system.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
                  <Link href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
            Book a Strategy Call
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
