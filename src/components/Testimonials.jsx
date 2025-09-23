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
    emphasis: "3 weeks in advance.",
    author: "Founder",
    company: "Ohalala Café & Restro",
    role: "Restaurant Business",
    results: "85K+ Followers | 300% Booking Increase"
  },
  {
    quote: "SocialBud's content strategy helped us reach customers across India. Our online jewellery sales went from zero to ",
    emphasis: "₹25 lakhs per month.",
    author: "Managing Director",
    company: "Khodaniya Jewellers",
    role: "Jewellery Business",
    results: "₹25L+ Monthly Revenue | 60K+ Customers"
  }
]

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
    <path
      fill="white"
      d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"
    />
  </svg>
)

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            What our clients says
          </h1>
        </div>

        {/* Navigation Buttons - Outside the white container */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mx-16 border border-gray-100">

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg mb-8">
              <div className="w-8 h-8">
                <QuoteIcon />
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="space-y-8">
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                "{currentTestimonial.quote}
                <em className="font-bold italic text-emerald-600">{currentTestimonial.emphasis}</em>"
              </blockquote>

              {/* Results Badge */}
              <div className="inline-block bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3">
                <p className="text-base font-semibold text-emerald-700">
                  🎯 {currentTestimonial.results}
                </p>
              </div>

              {/* Attribution */}
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-gray-900">
                  {currentTestimonial.author}
                </p>
                <p className="text-xl text-gray-600">
                  {currentTestimonial.role} • {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-emerald-600 scale-125 shadow-lg" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}