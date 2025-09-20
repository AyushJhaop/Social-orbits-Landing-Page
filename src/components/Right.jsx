"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function CaseStudySection() {
  const [currentCard, setCurrentCard] = useState(0)

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
      setCurrentCard((prev) => (prev + 1) % cards.length)
    }, 5000) // Change card every 5 seconds

    return () => clearInterval(interval)
  }, [cards.length])

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Case Study Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've transformed businesses and generated exceptional results for our clients
          </p>
        </div>
        
        {/* Card Container */}
        <div className="relative h-[700px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-12 h-full">
                <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {cards[currentCard].h1}
                      </h1>
                      <h2 className="text-2xl lg:text-3xl font-semibold text-emerald-600">
                        {cards[currentCard].h2}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {cards[currentCard].description}
                    </p>
                    
                    {/* How Section - Only for Dungarpur Jewellers */}
                    {cards[currentCard].howTitle && (
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {cards[currentCard].howTitle}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {cards[currentCard].howDescription}
                        </p>
                      </div>
                    )}
                    
                    {/* Numbers/Metrics */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {cards[currentCard].howTitle ? "Numbers" : "Results"}
                      </h3>
                      <div className="space-y-3">
                        {cards[currentCard].metrics.map((metric, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <span className="text-emerald-500 text-lg">✅</span>
                            <span className="text-gray-800 font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Card - Only show for Dungarpur Jewellers */}
                  {cards[currentCard].howTitle && (
                    <div className="relative flex justify-center items-center h-full">
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-emerald-200">
                        <div className="text-center space-y-6">
                          {/* Icon */}
                          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-2xl font-bold text-gray-900">
                            {cards[currentCard].h1 === "Dungarpur Jewellers" 
                              ? "Ad Performance Analytics" 
                              : cards[currentCard].h1 === "Ohalala Café & Restro"
                              ? "Content Performance Analytics"
                              : "Authority Building Analytics"
                            }
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed">
                            {cards[currentCard].h1 === "Dungarpur Jewellers" 
                              ? "Dungarpur Jewellers campaign performance metrics and engagement results."
                              : cards[currentCard].h1 === "Ohalala Café & Restro"
                              ? "Ohalala Café & Restro content strategy performance and market visibility metrics."
                              : "Khodaniya Jewellers authority-building campaign performance and market dominance metrics."
                            }
                          </p>
                          
                          {/* Stats */}
                          {cards[currentCard].h1 === "Dungarpur Jewellers" ? (
                            <div className="grid grid-cols-1 gap-4 pt-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">+6K</div>
                                <div className="text-sm text-gray-500">New Followers</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">3x</div>
                                <div className="text-sm text-gray-500">Store Footfalls</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">2x</div>
                                <div className="text-sm text-gray-500">Customer Inquiries</div>
                              </div>
                            </div>
                          ) : cards[currentCard].h1 === "Ohalala Café & Restro" ? (
                            <div className="grid grid-cols-1 gap-4 pt-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">74.8K</div>
                                <div className="text-sm text-gray-500">Followers</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">1M+</div>
                                <div className="text-sm text-gray-500">Views</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">↗️</div>
                                <div className="text-sm text-gray-500">Sales Growth</div>
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 gap-4 pt-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">+7K</div>
                                <div className="text-sm text-gray-500">New Followers</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">5M+</div>
                                <div className="text-sm text-gray-500">Views</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">5x</div>
                                <div className="text-sm text-gray-500">Footfalls</div>
                              </div>
                            </div>
                          )}
                          
                          {/* CTA */}
                          <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200">
                            {cards[currentCard].h1 === "Dungarpur Jewellers" 
                              ? "View Analytics" 
                              : cards[currentCard].h1 === "Ohalala Café & Restro"
                              ? "View Content Strategy"
                              : "View Authority Results"
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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