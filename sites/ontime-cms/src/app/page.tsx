'use client'

import { useState } from 'react'
import Link from 'next/link'
import OnTimeCMSLayout from '@/components/OnTimeCMSLayout'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <OnTimeCMSLayout>
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-[#334155] to-[#475569] flex items-center justify-center px-8 pt-28 pb-20 md:py-20">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            OnTime CMS – Reliable Plumbing & Maintenance
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Professional, fast and customer-focused service with instant online quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/quoteflow/calculator" className="bg-[#F97316] hover:bg-[#ea580c] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.5)]">
              Get an Instant Quote
            </a>
            <a href="https://wa.me/447000000001" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white px-10 py-4 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-[#334155]">
              Message Us Anytime
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="text-white font-semibold mb-2">Instant Quotes</h3>
              <p className="text-white/70 text-sm">Get transparent pricing in seconds</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💬</div>
              <h3 className="text-white font-semibold mb-2">WhatsApp Support</h3>
              <p className="text-white/70 text-sm">Message us anytime for quick responses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="text-white font-semibold mb-2">Reliable Service</h3>
              <p className="text-white/70 text-sm">Professional and customer-focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#334155] mb-4">Our Services</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Complete plumbing and maintenance solutions for your home and business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔥',
                title: 'Boiler Installation',
                description: 'Professional boiler installation and replacement services with warranty coverage.',
                features: ['Install new boilers', 'Replace existing systems', 'Upgrade heating systems', 'Includes warranty']
              },
              {
                icon: '🔧',
                title: 'Boiler Repairs',
                description: 'Expert boiler repair services to get your heating back up and running quickly.',
                features: ['Repair emergencies', 'Diagnose faults', 'Replace components', 'Same-day service']
              },
              {
                icon: '📋',
                title: 'Boiler Servicing',
                description: 'Regular boiler maintenance to ensure efficiency and prevent breakdowns.',
                features: ['Annual servicing', 'Safety checks', 'Optimise efficiency', 'Preventive maintenance']
              },
              {
                icon: '🚰',
                title: 'Plumbing Services',
                description: 'Complete plumbing solutions for all your water and drainage needs.',
                features: ['Repair leaks', 'Install pipes', 'Bathroom plumbing', 'Drainage solutions']
              },
              {
                icon: '⚡',
                title: 'Emergency Callouts',
                description: '24/7 emergency heating and plumbing services when you need them most.',
                features: ['Available 24/7', 'Rapid response', 'Emergency repairs', 'No call-out charges']
              },
              {
                icon: '📄',
                title: 'Landlord Certificates',
                description: 'Gas safety certificates and compliance services for landlords.',
                features: ['Gas safety certificates', 'Landlord compliance', 'Property inspections', 'Complete documentation']
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#334155] mb-4">{service.title}</h3>
                <p className="text-gray-800 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-800">
                      <span className="text-[#F97316] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-8 bg-gradient-to-br from-[#334155] to-[#475569] text-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Read Our Reviews</h2>
            <p className="text-xl text-white/90 mb-8">See what our customers say about OnTime CMS</p>
          </div>
          <a 
            href="https://www.checkatrade.com/ontimecms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#334155] px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-lg mb-12"
          >
            View Our Checkatrade Reviews
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-white/90 mb-4">&ldquo;Excellent service, very professional and clean work. Highly recommend!&rdquo;</p>
              <p className="text-white/70 text-sm">&mdash; Sarah M.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-white/90 mb-4">&ldquo;Fixed our boiler quickly and efficiently. Great communication throughout.&rdquo;</p>
              <p className="text-white/70 text-sm">&mdash; James L.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-white/90 mb-4">&ldquo;Reliable, trustworthy, and excellent value for money. Will definitely use again.&rdquo;</p>
              <p className="text-white/70 text-sm">&mdash; Emma R.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Book Now Section */}
      <section id="book-now" className="py-24 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#334155] mb-4">Get an Instant Quote</h2>
            <p className="text-xl text-gray-800">Fill out the form below to get an instant, transparent quote for your plumbing and maintenance needs.</p>
          </div>
          <div className="w-full flex justify-center py-10">
            {isLoading && (
              <div className="animate-pulse text-center py-10 text-gray-500">
                Loading calculator...
              </div>
            )}
            <iframe
              src="/quoteflow/embed"
              className="w-full max-w-3xl rounded-xl border-0 shadow-sm"
              allow="forms; scripts; same-origin"
              style={{
                minHeight: "700px",
                overflow: "visible",
                borderRadius: "12px",
                opacity: isLoading ? 0 : 1,
                transition: "opacity 0.3s ease-in-out"
              }}
              onLoad={() => {
                setTimeout(() => setIsLoading(false), 500) // Small delay to ensure content is ready
              }}
              loading="lazy"
              title="OnTime CMS Quote Request Form"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-gradient-to-br from-[#334155] to-[#475569] text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">Need Help Now?</h2>
          <p className="text-xl text-white/90 mb-8">Get an instant quote or message us on WhatsApp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/447000000001?text=Hi%20I%27m%20interested%20in%20getting%20a%20quote" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message Us Anytime
            </a>
            <a href="/quoteflow/calculator" className="bg-white text-[#334155] px-10 py-4 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-transparent hover:text-white">
              Get an Instant Quote
            </a>
          </div>
        </div>
      </section>
    </OnTimeCMSLayout>
  )
}