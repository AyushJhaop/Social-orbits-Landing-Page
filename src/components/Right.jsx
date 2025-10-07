"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import images and video
import durgapur1 from '../assets/durgapur1.jpeg'
import durgapur2 from '../assets/durgapur2.jpeg'
import durgapur3 from '../assets/durgapur3.jpeg'
import olala1 from '../assets/olala1.jpeg'
import olala2 from '../assets/olala2.jpeg'
import olala3 from '../assets/olala3.jpeg'
import jwel1 from '../assets/jwel1.jpeg'
import kho from '../assets/kho.png'
import khodaniyaVideo from '../assets/SaveGram.App_AQPYGTzroysovf_l8QMeFmxof21Rpeje_G88KHttCh40Q85HeqXgcNFqCNJ6uyX5Vn0YjZhHLbJ7sCxyYD3t1vGVjzwdcEyN9IWbGG4.mp4'

export default function CaseStudySection() {
  const [currentCard, setCurrentCard] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setDirection(1)
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
      metrics: ["75k Followers", "10 M+ Views ", "4xROI generated"]
    },
    {
      id: 3,
      h1: "Khodaniya Jewellers",
      h2: "Achievements",
      description: "Became the leading jewellery brand in Wagad region.",
      howTitle: "How", 
      howDescription: "Authority-building content made us the go-to brand.",
      metrics: ["28,860 Interactions", "+7,000 Followers", "5M+ views", "5x Footfalls"]
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
        
        {/* Main Container with Layout from Design */}
        <div className="relative px-2 sm:px-0 lg:mx-16 xl:mx-20">
          {/* Navigation Buttons */}
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

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentCard}
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -300 : 300 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut",
                x: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="w-full"
            >
              {/* Main Card with Left Content + Right Images Layout */}
              <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[400px] lg:min-h-[500px]">
                  
                  {/* Left Container - Content Section (2/3 width) */}
                  <div className="lg:col-span-2 flex flex-col justify-center space-y-4 md:space-y-6 lg:space-y-8 rounded-lg p-4 md:p-6 lg:p-8 bg-gray-50">
                    <div className="space-y-2 md:space-y-3">
                      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-['Epilogue']">
                        {cards[currentCard].h1}
                      </h1>
                      <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-600">
                        {cards[currentCard].h2}
                      </h2>
                    </div>
                    
                    <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                      {cards[currentCard].description}
                    </p>
                    
                    {/* How Section */}
                    {cards[currentCard].howTitle && (
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
                          {cards[currentCard].howTitle}
                        </h3>
                        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                          {cards[currentCard].howDescription}
                        </p>
                      </div>
                    )}
                    
                    {/* Numbers/Metrics */}
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
                        Numbers
                      </h3>
                      <div className="space-y-2 md:space-y-3">
                        {cards[currentCard].metrics.map((metric, index) => (
                          <div key={index} className="flex items-center space-x-3 md:space-x-4">
                            <span className="text-emerald-500 text-lg md:text-xl">✅</span>
                            <span className="text-gray-800 font-medium text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Container - Image Boxes (1/3 width) */}
                  <div className="lg:col-span-1 flex flex-col gap-4 md:gap-6">
                    {/* Conditional rendering based on current case study */}
                    {cards[currentCard].h1 === "Dungarpur Jewellers" && (
                      <>
                        {/* Image Container 1 */}
                        <div className="flex-1 border-8 border-white rounded-xl overflow-hidden bg-gray-100 min-h-[160px] md:min-h-[180px] lg:min-h-[200px] shadow-lg">
                          <img 
                            src={durgapur1}
                            alt="Dungarpur Jewellers showcase 1"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>

                        {/* Image Container 2 */}
                        <div className="flex-1 border-8 border-white rounded-xl overflow-hidden bg-gray-100 min-h-[160px] md:min-h-[180px] lg:min-h-[200px] shadow-lg">
                          <img 
                            src={durgapur2}
                            alt="Dungarpur Jewellers showcase 2"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>

                        {/* Image Container 3 */}
                        <div className="flex-1 border-8 border-white rounded-xl overflow-hidden bg-gray-100 min-h-[160px] md:min-h-[180px] lg:min-h-[200px] shadow-lg">
                          <img 
                            src={durgapur3}
                            alt="Dungarpur Jewellers showcase 3"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      </>
                    )}

                    {cards[currentCard].h1 === "Ohalala Café & Restro" && (
                      <>
                        {/* Image Container 1 */}
                        <div className="flex-1 border-8 border-white rounded-xl overflow-hidden bg-gray-100 min-h-[160px] md:min-h-[180px] lg:min-h-[200px] shadow-lg">
                          <img 
                            src={olala1}
                            alt="Ohalala Café & Restro showcase 1"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>

                        {/* Image Container 2 */}
                        <div className="flex-1 border-8 border-white rounded-xl overflow-hidden bg-gray-100 min-h-[160px] md:min-h-[180px] lg:min-h-[200px] shadow-lg">
                          <img 
                            src={olala2}
                            alt="Ohalala Café & Restro showcase 2"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>

                        {/* Image Container 3 */}
                        <div className="flex-1 border-8 border-white rounded-xl overflow-hidden bg-gray-100 min-h-[160px] md:min-h-[180px] lg:min-h-[200px] shadow-lg">
                          <img 
                            src={olala3}
                            alt="Ohalala Café & Restro showcase 3"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      </>
                    )}

                    {cards[currentCard].h1 === "Khodaniya Jewellers" && (
                      <>
                        {/* Mobile Phone Frame with Video for Khodaniya Jewellers */}
                        <div className="flex-1 flex justify-center items-center">
                          <div className="relative bg-gray-800 rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 shadow-xl border border-gray-700 w-[200px] xs:w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px]">
                            {/* Phone Screen */}
                            <div className="bg-gray-900 rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden relative w-full border border-gray-600">
                              {/* Status Bar */}
                              <div className="bg-gray-900 text-white text-xs px-3 md:px-4 py-1.5 md:py-2 flex justify-between items-center border-b border-gray-700">
                                <span>9:41</span>
                                <div className="flex items-center gap-1">
                                  <div className="w-3 md:w-4 h-1.5 md:h-2 border border-white/60 rounded-sm">
                                    <div className="w-2 md:w-3 h-0.5 md:h-1 bg-white/60 rounded-sm m-0.5"></div>
                                  </div>
                                </div>
                              </div>

                              {/* Video Content */}
                              <div className="bg-black h-[320px] xs:h-[360px] sm:h-[400px] md:h-[440px] lg:h-[480px] relative overflow-hidden">
                                <video 
                                  src={khodaniyaVideo}
                                  controls
                                  muted
                                  className="w-full h-full object-cover"
                                  poster=""
                                >
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  
                </div>
              </div>

              {/* Mobile Navigation Buttons */}
              <div className="flex lg:hidden justify-center space-x-3 mt-6">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg"
                  aria-label="Previous case study"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg"
                  aria-label="Next case study"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center space-x-1.5 xs:space-x-2 md:space-x-3 mt-6 xs:mt-8 md:mt-10 pb-2 xs:pb-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentCard ? 1 : -1)
                setCurrentCard(index)
              }}
              className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
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