"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'


export default function CaseStudySection() {
  const [currentCard, setCurrentCard] = useState(0)

  const goToPrevious = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length)
  }

  const cards = [
    {
      id: 1,
      h1: "Dungarpur Jewellers",
      h2: "Achievements",
      description: "Expanded from city-level recognition to a leading jewellery brand across the district.",
      howTitle: "How",
      howDescription: "Executed a funnel-driven campaign blending targeted ads with organic growth strategies.",
      metrics: ["+6,000 Followers", "3x Footfalls", "2x Inquiries"]
    },
    {
      id: 2,
      h1: "Ohalala Café & Restro",
      h2: "Achievements",
      description: "Overcame tough competition and built strong visibility in the Goa market.",
      howTitle: "How",
      howDescription: "Identified gaps and executed a detailed content plan with consistent creative strategy.",
      metrics: ["74.8K Followers", "Millions of Views", "High Sales Growth"]
    },
    {
      id: 3,
      h1: "Khodaniya Jewellers",
      h2: "Achievements",
      description: "Positioned as the leading jewellery brand in Wagad with strong authority and recognition.",
      howTitle: "How",
      howDescription: "Planned, researched, and executed authority-building content that made \"Jewellery in Wagad = Khodaniya Jewellers.\"",
      metrics: ["+7,000 Followers", "5M+ Views", "5x Footfalls"]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000) // Change card every 5 seconds

    return () => clearInterval(interval)
  }, [currentCard])

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Case Study Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 font-['Epilogue']">Case Studies</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've transformed businesses and generated exceptional results for our clients
          </p>
        </div>
        
        {/* Card Container with optimized margins for arrow buttons */}
        <div className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[750px] lg:mx-16 xl:mx-20">
          {/* Navigation Buttons - Optimally positioned for visibility and accessibility */}
          <button
            onClick={goToPrevious}
            className="hidden lg:flex absolute left-[-40px] xl:left-[-50px] top-1/2 -translate-y-1/2 w-12 h-12 xl:w-14 xl:h-14 bg-emerald-600 rounded-full items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-xl border-2 border-white z-30"
            aria-label="Previous case study"
          >
            <ChevronLeft size={20} className="xl:w-6 xl:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="hidden lg:flex absolute right-[-40px] xl:right-[-50px] top-1/2 -translate-y-1/2 w-12 h-12 xl:w-14 xl:h-14 bg-emerald-600 rounded-full items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-xl border-2 border-white z-30"
            aria-label="Next case study"
          >
            <ChevronRight size={20} className="xl:w-6 xl:h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 h-full mx-0 sm:mx-6 md:mx-12">
                {/* All Case Studies - Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 h-full items-center">
                  {/* Content */}
                  <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                    <div className="space-y-3 md:space-y-4">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-['Epilogue']">
                        {cards[currentCard].h1}
                      </h1>
                      <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-emerald-600">
                        {cards[currentCard].h2}
                      </h2>
                    </div>
                    
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {cards[currentCard].description}
                    </p>
                    
                    {/* How Section */}
                    {cards[currentCard].howTitle && (
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                          {cards[currentCard].howTitle}
                        </h3>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                          {cards[currentCard].howDescription}
                        </p>
                      </div>
                    )}
                    
                    {/* Numbers/Metrics */}
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        {cards[currentCard].howTitle ? "Numbers" : "Results"}
                      </h3>
                      <div className="space-y-2 md:space-y-3">
                        {cards[currentCard].metrics.map((metric, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <span className="text-emerald-500 text-base md:text-lg">✅</span>
                            <span className="text-gray-800 font-medium text-sm md:text-base">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Section - Visible on all screen sizes, responsive positioning */}
                  <div className="w-full h-full flex items-center justify-center order-1 lg:order-2">
                    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg bg-gray-100 border border-gray-200">
                      <img 
                        src={
                          cards[currentCard].h1 === "Dungarpur Jewellers" ? "/image3.jpeg" :
                          cards[currentCard].h1 === "Ohalala Café & Restro" ? "/ohalala-image.jpeg" :
                          "/khodaniya-image.jpeg"
                        }
                        alt={`${cards[currentCard].h1} showcase`}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        style={{ objectPosition: 'center center' }}
                        onError={(e) => {
                          console.log('Image failed to load:', e.target.src);
                          e.target.style.display = 'block';
                          e.target.style.backgroundColor = '#f3f4f6';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation Buttons - Improved styling */}
                <div className="flex lg:hidden justify-center space-x-4 mt-8">
                  <button
                    onClick={goToPrevious}
                    className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-lg border-2 border-emerald-100"
                    aria-label="Previous case study"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-lg border-2 border-emerald-100"
                    aria-label="Next case study"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center space-x-2 md:space-x-3 mt-6 md:mt-8">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentCard 
                  ? 'bg-emerald-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}