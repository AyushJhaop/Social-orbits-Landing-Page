"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "SocialBud transformed our traditional jewellery business into a digital powerhouse. Our Instagram followers grew from 500 to 45K and sales increased by ",
    emphasis: "350% in just 6 months.",
    author: "Owner",
    company: "Dungarpur Jewellers",
    role: "Jewellery Business",
    results: "45K+ Followers | 350% Sales Growth"
  },
  {
    quote: "From a small local café to the most Instagram-famous restaurant in the city. Our weekend reservations are now booked ",
    emphasis: "weeks in advance!",
    author: "Founder",
    company: "Ohalala Café & Restro",
    role: "Restaurant & Café",
    results: "74.8K Followers | Millions of Views"
  },
  {
    quote: "In Wagad, when people think jewellery, they think Khodaniya. SocialBud made this possible with their strategic content that built our authority and brought us ",
    emphasis: "5x more footfall.",
    author: "Owner",
    company: "Khodaniya Jewellers", 
    role: "Premium Jewellery",
    results: "7K+ Followers | 5M+ Views"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight font-['Epilogue']">
            What our clients says
          </h1>
        </div>

        {/* Container with centered positioning for testimonial card */}
        <div className="relative flex justify-center items-center min-h-[500px] lg:mx-16 xl:mx-20">
          {/* Navigation Buttons - Enhanced positioning for better visibility */}
          <button
            onClick={goToPrevious}
            className="hidden lg:flex absolute left-[-30px] xl:left-[-40px] top-1/2 -translate-y-1/2 w-12 h-12 xl:w-14 xl:h-14 bg-emerald-600 rounded-full items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-xl border-2 border-white z-30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="xl:w-6 xl:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="hidden lg:flex absolute right-[-30px] xl:right-[-40px] top-1/2 -translate-y-1/2 w-12 h-12 xl:w-14 xl:h-14 bg-emerald-600 rounded-full items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-xl border-2 border-white z-30"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="xl:w-6 xl:h-6" />
          </button>

          {/* Testimonial Content */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 max-w-5xl mx-auto border border-gray-100">
            <div className="text-center space-y-6 md:space-y-8">
              {/* Quote */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-6xl md:text-8xl text-emerald-200 leading-none font-serif">
                  "
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-['Epilogue'] relative z-10">
                  {currentTestimonial.quote}
                  <span className="font-bold text-emerald-600">
                    {currentTestimonial.emphasis}
                  </span>
                </blockquote>
                <div className="absolute -bottom-4 -right-4 text-6xl md:text-8xl text-emerald-200 leading-none font-serif transform rotate-180">
                  "
                </div>
              </div>

              {/* Author Info */}
              <div className="space-y-3 md:space-y-4 pt-6 md:pt-8 border-t border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-['Epilogue']">
                  {currentTestimonial.author}
                </h3>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-lg md:text-xl font-semibold text-emerald-600">
                    {currentTestimonial.company}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    {currentTestimonial.role}
                  </p>
                </div>
                
                {/* Results Badge */}
                <div className="inline-block bg-emerald-50 border border-emerald-200 rounded-full px-4 md:px-6 py-2 md:py-3 mt-4">
                  <p className="text-sm md:text-base font-semibold text-emerald-700">
                    {currentTestimonial.results}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Indicators - Positioned at bottom of card */}
            <div className="flex justify-center space-x-2 md:space-x-3 mt-8 pt-6 border-t border-gray-100">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-emerald-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Buttons - Below the card */}
        <div className="flex lg:hidden justify-center space-x-4 mt-8">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-lg border-2 border-emerald-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-lg border-2 border-emerald-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  )
}