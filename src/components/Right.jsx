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
      description: "Expanded from city-level to leading district jewellery brand.",
      howTitle: "How",
      howDescription: "Funnel-driven campaign with targeted ads & organic growth.",
      metrics: ["+6K Followers", "3x Footfalls", "2x Inquiries"]
    },
    {
      id: 2,
      h1: "Ohalala Café & Restro",
      h2: "Achievements", 
      description: "Built strong visibility in competitive Goa market.",
      howTitle: "How",
      howDescription: "Strategic content plan with consistent creative approach.",
      metrics: ["74.8K Followers", "Millions Views", "High Growth"]
    },
    {
      id: 3,
      h1: "Khodaniya Jewellers",
      h2: "Achievements",
      description: "Became the leading jewellery brand in Wagad region.",
      howTitle: "How", 
      howDescription: "Authority-building content made us the go-to brand.",
      metrics: ["28,860 Interactions", "25,594 Likes", "2,965 Shares", "5x Footfalls"]
    }
  ]

  // Auto-rotation disabled - only arrow buttons control navigation
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToNext()
  //   }, 5000) // Change card every 5 seconds

  //   return () => clearInterval(interval)
  // }, [currentCard])

  return (
    <section className="bg-white py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-1 xs:px-2 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Case Study Heading */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-1 xs:px-2">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 xs:mb-3 md:mb-4 font-['Epilogue']">Case Studies</h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 xs:px-4 sm:px-0">
            Discover how we've transformed businesses and generated exceptional results for our clients
          </p>
        </div>
        
        {/* Card Container with mobile-optimized responsive sizing */}
        <div className={`relative px-2 sm:px-0 lg:mx-16 xl:mx-20 ${
          cards[currentCard].h1 === "Khodaniya Jewellers" 
            ? "min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px]" 
            : "min-h-[380px] xs:min-h-[420px] sm:min-h-[480px] md:min-h-[550px] lg:min-h-[600px]"
        }`}>
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
              {/* Single Card Layout - Content + Image Combined */}
              <div className="flex justify-center h-full">
                <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-100 max-w-6xl w-full mx-1 xs:mx-2 sm:mx-4 md:mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 h-full items-start lg:items-center">
                    
                    {/* Content Section */}
                    <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 order-2 lg:order-1">
                      <div className="space-y-0.5 xs:space-y-1 sm:space-y-1.5 md:space-y-2">
                        <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight font-['Epilogue']">
                          {cards[currentCard].h1}
                        </h1>
                        <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-emerald-600">
                          {cards[currentCard].h2}
                        </h2>
                      </div>
                      
                      <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-tight">
                        {cards[currentCard].description}
                      </p>
                      
                      {/* How Section */}
                      {cards[currentCard].howTitle && (
                        <div className="space-y-0.5 xs:space-y-1 md:space-y-1.5">
                          <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900">
                            {cards[currentCard].howTitle}
                          </h3>
                          <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-tight">
                            {cards[currentCard].howDescription}
                          </p>
                        </div>
                      )}
                      
                      {/* Numbers/Metrics */}
                      <div className="space-y-0.5 md:space-y-1">
                        <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900">
                          {cards[currentCard].howTitle ? "Numbers" : "Results"}
                        </h3>
                        <div className="space-y-0.5 md:space-y-1">
                          {cards[currentCard].metrics.map((metric, index) => (
                            <div key={index} className="flex items-center space-x-1 xs:space-x-1.5">
                              <span className="text-emerald-500 text-xs">✅</span>
                              <span className="text-gray-800 font-medium text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image Section - Show for specific case studies */}
                    {(cards[currentCard].h1 === "Dungarpur Jewellers" || cards[currentCard].h1 === "Ohalala Café & Restro" || cards[currentCard].h1 === "Khodaniya Jewellers") && (
                      <div className="w-full flex items-center justify-center order-1 lg:order-2 mb-1 xs:mb-2 lg:mb-0">
                        <div className={`w-full rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg bg-gray-100 border border-gray-200 ${
                          cards[currentCard].h1 === "Khodaniya Jewellers" 
                            ? "h-[160px] xs:h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px]" 
                            : "h-[100px] xs:h-[120px] sm:h-[150px] md:h-[180px] lg:h-[220px]"
                        }`}>
                          <img 
                            src={
                              cards[currentCard].h1 === "Dungarpur Jewellers" 
                                ? "/WhatsApp Image 2025-09-21 at 13.09.25 (3).jpeg"
                                : cards[currentCard].h1 === "Ohalala Café & Restro"
                                ? "/WhatsApp Image 2025-09-21 at 13.09.25.jpeg"
                                : "/screenshot-analytics.png"
                            }
                            alt={
                              cards[currentCard].h1 === "Dungarpur Jewellers" 
                                ? "Dungarpur Jewellers showcase"
                                : cards[currentCard].h1 === "Ohalala Café & Restro"
                                ? "Ohalala Café & Restro showcase"
                                : "Khodaniya Jewellers analytics dashboard"
                            }
                            className={`w-full h-full hover:scale-105 transition-transform duration-300 ${
                              cards[currentCard].h1 === "Khodaniya Jewellers" 
                                ? "object-contain" 
                                : "object-cover object-center"
                            }`}
                            loading="lazy"
                            style={cards[currentCard].h1 === "Khodaniya Jewellers" 
                              ? { objectPosition: 'center center', transform: 'scale(1.0)' } 
                              : { objectPosition: 'left center', transform: 'scale(1.2)' }
                            }
                            onError={(e) => {
                              console.log('Image failed to load:', e.target.src);
                              e.target.style.display = 'block';
                              e.target.style.backgroundColor = '#f3f4f6';
                            }}
                          />
                        </div>
                      </div>
                    )}
                    
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Buttons - Improved styling */}
              <div className="flex lg:hidden justify-center space-x-3 mt-3 pt-2">
                <button
                  onClick={goToPrevious}
                  className="w-8 h-8 xs:w-10 xs:h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg"
                  aria-label="Previous case study"
                >
                  <ChevronLeft size={16} className="xs:w-4 xs:h-4" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-8 h-8 xs:w-10 xs:h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg"
                  aria-label="Next case study"
                >
                  <ChevronRight size={16} className="xs:w-4 xs:h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center space-x-1.5 xs:space-x-2 md:space-x-3 mt-2 xs:mt-4 md:mt-6 pb-2 xs:pb-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentCard 
                  ? 'bg-emerald-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}