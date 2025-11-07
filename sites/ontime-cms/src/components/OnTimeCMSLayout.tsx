'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface OnTimeCMSLayoutProps {
  children: ReactNode
}

export default function OnTimeCMSLayout({ children }: OnTimeCMSLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/logo.svg" 
                alt="OnTime CMS Logo" 
                width={120}
                height={30}
                className="object-contain"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-800 hover:text-[#F97316] transition-colors">Home</Link>
              <Link href="#services" className="text-gray-800 hover:text-[#F97316] transition-colors">Services</Link>
              <Link href="#reviews" className="text-gray-800 hover:text-[#F97316] transition-colors">Reviews</Link>
              <Link href="#contact" className="text-gray-800 hover:text-[#F97316] transition-colors">Contact</Link>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4">
                <a href="/quoteflow/calculator" className="bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 w-full sm:w-auto text-center">
                  Get an Instant Quote
                </a>
                <a href="https://wa.me/447000000001" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 w-full sm:w-auto text-center">
                  Message Us Anytime
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-[#F97316] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="#home" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-[#F97316] transition-colors">Home</Link>
                <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-[#F97316] transition-colors">Services</Link>
                <Link href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-[#F97316] transition-colors">Reviews</Link>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-[#F97316] transition-colors">Contact</Link>
                <div className="flex flex-col gap-2 mt-2">
                  <a href="/quoteflow/calculator" className="bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 w-full text-center">
                    Get an Instant Quote
                  </a>
                  <a href="https://wa.me/447000000001" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 w-full text-center">
                    Message Us Anytime
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#334155] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold mb-4 block">OnTime CMS</span>
              <p className="text-gray-300 mb-4">
                Professional plumbing and maintenance services with instant online quotes. 
                Professional, fast and customer-focused service.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#services" className="hover:text-white transition-colors">Plumbing Services</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Maintenance</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Repairs</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Emergency Services</Link></li>
                <li><Link href="/quoteflow/calculator" className="hover:text-white transition-colors">Get a Quote</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="text-center md:text-left text-gray-300 text-sm md:text-base space-y-2">
                <p>
                  <a href="https://wa.me/447000000001" target="_blank" rel="noopener noreferrer" className="text-[#F97316] hover:underline font-medium transition-colors">
                    Message Us Anytime
                  </a>
                </p>
                <p>
                  <a href="https://www.checkatrade.com/ontimecms" target="_blank" rel="noopener noreferrer" className="text-[#F97316] hover:underline font-medium transition-colors">
                    View Our Reviews
                  </a>
                </p>
                <p className="mt-4">📍 Available for service calls</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-gray-300">
            <p>&copy; 2025 OnTime CMS. All rights reserved.</p>
            <p className="mt-2">Powered by <a href="https://www.fixblox.com" target="_blank" rel="noopener noreferrer" className="text-[#F97316] hover:underline">FixBlox</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
