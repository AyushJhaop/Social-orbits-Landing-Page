"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "They took social media off our plate completely and our audience has never been ",
    emphasis: "more engaged.",
    author: "Elena Chen",
    company: "Bloom Skincare",
    image: "/close-up-beauty-shot-woman-face-skincare-serum-gol.jpg",
  },
  {
    quote: "Our engagement rates have tripled since working with them. The content strategy is ",
    emphasis: "absolutely brilliant.",
    author: "Sarah Johnson",
    company: "Glow Beauty",
    image: "/beauty-product-skincare-routine-woman-applying-cre.jpg",
  },
  {
    quote: "Professional, creative, and results-driven. They transformed our social presence ",
    emphasis: "beyond expectations.",
    author: "Michael Torres",
    company: "Pure Wellness",
    image: "/wellness-skincare-natural-products-spa-treatment.jpg",
  },
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

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation Buttons - Outside the white container */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mx-16">{/* Added mx-16 for spacing from arrows */}

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              {/* Quote Icon */}
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8">
                  <QuoteIcon />
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="space-y-6">
                <blockquote className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  {currentTestimonial.quote}
                  <em className="font-bold italic">{currentTestimonial.emphasis}</em>
                </blockquote>

                {/* Attribution */}
                <p className="text-xl text-gray-500">
                  {currentTestimonial.author} • {currentTestimonial.company}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 max-w-lg">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={`${currentTestimonial.company} testimonial`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-black" : "bg-gray-300"
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