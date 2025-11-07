"use client"

import OnTimeCMSLayout from "@/components/OnTimeCMSLayout";
import ReviewsSection from "@/components/ReviewsSection";

export default function ReviewsPage() {
  return (
    <OnTimeCMSLayout>
      {/* Reviews as first section */}
      <div className="min-h-screen bg-white">
        <div className="pt-20">{/* offset for fixed nav */}
          <header className="text-center px-8 py-8">
            <h1 className="text-4xl font-semibold text-[#334155]">What Our Customers Say</h1>
            <p className="text-gray-600 mt-2">Real feedback from happy OnTime CMS customers</p>
          </header>
          <ReviewsSection />
        </div>
      </div>
    </OnTimeCMSLayout>
  )
}


