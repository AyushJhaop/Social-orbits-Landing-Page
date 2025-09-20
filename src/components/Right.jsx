"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function CaseStudySection() {
  const [currentCard, setCurrentCard] = useState(0)

  const cards = [
    {
      id: 1,
      h1: "Digital Transformation",
      h2: "Revolutionizing Customer Experience",
      description: "We helped transform traditional businesses into digital-first companies, creating seamless customer journeys that drive engagement and increase conversion rates by 300%.",
      metrics: ["300% Conversion Increase", "50K+ New Customers", "2M+ Revenue Growth"]
    },
    {
      id: 2,
      h1: "Brand Scaling Success",
      h2: "From Startup to Market Leader",
      description: "Our comprehensive scaling strategy took emerging brands from zero to hero, implementing data-driven marketing campaigns that generated exponential growth and market dominance.",
      metrics: ["500% Revenue Growth", "15+ Market Expansion", "1M+ Brand Reach"]
    },
    {
      id: 3,
      h1: "ROI Optimization",
      h2: "Maximizing Return on Investment",
      description: "Through strategic campaign optimization and advanced analytics, we consistently deliver exceptional ROI for our clients, turning marketing spend into profitable revenue streams.",
      metrics: ["8x Average ROI", "40% Cost Reduction", "90% Client Retention"]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length)
    }, 5000) // Change card every 5 seconds

    return () => clearInterval(interval)
  }, [cards.length])

  return (
    <section className="bg-gray-50 py-16 px-6">
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
                    
                    {/* Metrics */}
                    <div className="space-y-3">
                      {cards[currentCard].metrics.map((metric, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="text-emerald-500 text-lg">✅</span>
                          <span className="text-gray-800 font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                      View Full Case Study
                    </button>
                  </div>

                  {/* Right Card */}
                  <div className="relative flex justify-center items-center h-full">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-emerald-200">
                      <div className="text-center space-y-6">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900">
                          Performance Analytics
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                          Track your campaign performance with real-time analytics and detailed insights that drive results.
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600">98%</div>
                            <div className="text-sm text-gray-500">Accuracy</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600">24/7</div>
                            <div className="text-sm text-gray-500">Monitoring</div>
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
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