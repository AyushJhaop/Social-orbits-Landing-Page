"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import yelliottImg from '../assets/yelliott.png'
import timmckennaImg from '../assets/timmckenna.png'
import maahiewayImg from '../assets/maahieway.png'
import drewniceImg from '../assets/drewnice.png'
 declare global {
  interface Window {
    iframely?: {
      load(): void
    }
  }
}
interface Creator {
  id: string
  name: string
  handle: string
  collaboration: string
  profileEmbedUrl: string
  postImage?: string
}

const creators: Creator[] = [
  {
    id: "1",
    name: "Andy Elliott",
    handle: "@officialandyelliott",
    collaboration: "Business Leadership Campaign",
    profileEmbedUrl: "//iframely.net/S4FUtj2E?theme=white",
    postImage: yelliottImg,
  },
  {
    id: "2",
    name: "Tim McKenna",
    handle: "@timmckenna",
    collaboration: "Ocean Conservation Partnership",
    profileEmbedUrl: "//iframely.net/gVSwwxsO?theme=white",
    postImage: timmckennaImg,
  },
  {
    id: "3",
    name: "Mahi Sharma",
    handle: "@maahieway",
    collaboration: "Travel Lifestyle Campaign",
    profileEmbedUrl: "//iframely.net/5JtYPs9z?theme=white",
    postImage: maahiewayImg,
  },
  {
    id: "4",
    name: "Drew Whop",
    handle: "@drewnice561",
    collaboration: "Barber Community Partnership",
    profileEmbedUrl: "//iframely.net/RoFJBmWN?theme=white",
    postImage: drewniceImg,
  },
]

export default function Creators() {
  const [currentIndex, setCurrentIndex] = useState(0)
  // Turn off autoplay by default per request
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Preload images for better performance
  useEffect(() => {
    const imagePromises = creators.map((creator) => {
      return new Promise<void>((resolve) => {
        if (creator.postImage) {
          const img = new Image()
          img.onload = () => resolve()
          img.onerror = () => resolve() // Still resolve on error to avoid blocking
          img.src = creator.postImage
        } else {
          resolve()
        }
      })
    })

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true)
    })
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % creators.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Load Iframely script for profile embeds only
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="iframely"]')) {
      return
    }
    
    // Load Iframely script for profile embeds
    const iframelyScript = document.createElement('script')
    iframelyScript.async = true
    iframelyScript.defer = true
    iframelyScript.src = 'https://iframely.net/embed.js'
    iframelyScript.onload = () => {
      // Process embeds after script loads
      if (window.iframely) {
        window.iframely.load()
      }
    }
    document.head.appendChild(iframelyScript)

    return () => {
      // Cleanup scripts on unmount
      const scripts = document.querySelectorAll('script[src*="iframely"]')
      scripts.forEach(script => script.remove())
    }
  }, [])

  // Re-process Iframely embeds when current creator changes
  useEffect(() => {
    // Add a small delay to ensure DOM has updated
    const timer = setTimeout(() => {
      // Re-process Iframely embeds
      if (window.iframely) {
        window.iframely.load()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % creators.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + creators.length) % creators.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentCreator = creators[currentIndex]

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 font-['Epilogue']">
          Top Creators we have worked with
        </h1>
      </div>

  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center lg:items-start">
        {/* Mobile Phone Frame - Left Side with Instagram Post */}
        <div className="relative bg-gray-800 rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 shadow-xl border border-gray-700 flex-shrink-0 w-[200px] xs:w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] mx-auto lg:mx-0">
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

            {/* Creator Image */}
            <div className="bg-white h-[320px] xs:h-[360px] sm:h-[400px] md:h-[440px] lg:h-[480px] relative overflow-hidden" key={`post-${currentCreator.id}`}>
              {!imagesLoaded ? (
                <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                </div>
              ) : (
                <img
                  src={currentCreator.postImage}
                  alt={`${currentCreator.name} content`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="eager"
                  decoding="async"
                />
              )}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg w-7 h-7 md:w-8 md:h-8 rounded-md border border-gray-200 flex items-center justify-center transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-3 h-3" />
          </button>

          <button
            className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg w-7 h-7 md:w-8 md:h-8 rounded-md border border-gray-200 flex items-center justify-center transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Creator Info Card - Right Side with Profile Embed */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start min-w-0">
          <div className="w-full bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 border border-gray-100">
            <div className="text-center lg:text-left space-y-6 md:space-y-8">
              {/* Creator Name & Handle */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 font-['Epilogue']">
                  {currentCreator.name}
                </h3>
                <p className="text-lg md:text-xl font-semibold text-emerald-600">
                  {currentCreator.handle}
                </p>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {currentCreator.collaboration}
                </p>
              </div>
              
              {/* Profile Embed */}
              <div className="mb-4 md:mb-6" key={`profile-${currentCreator.id}`}>
                {imagesLoaded ? (
                  <div className="iframely-embed">
                    <div className="iframely-responsive" style={{ height: '120px', paddingBottom: 0 }}>
                      <a 
                        href={`https://www.instagram.com/${currentCreator.handle.replace('@', '')}/`} 
                        data-iframely-url={currentCreator.profileEmbedUrl}
                      ></a>
                    </div>
                  </div>
                ) : (
                  <div className="h-[120px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
                    <div className="text-sm text-gray-500">Loading profile...</div>
                  </div>
                )}
              </div>

              {/* Achievement Section */}
              <div className="pt-6 md:pt-8 border-t border-gray-200">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 font-['Epilogue']">
                  Achievement
                </h4>
                
                {/* Achievement Badge */}
                <div className="inline-block bg-emerald-50 border border-emerald-200 rounded-full px-4 md:px-6 py-2 md:py-3">
                  {currentCreator.name === "Andy Elliott" ? (
                    <p className="text-sm md:text-base font-semibold text-emerald-700">
                      Business Leadership Campaign Success
                    </p>
                  ) : currentCreator.name === "Tim McKenna" ? (
                    <p className="text-sm md:text-base font-semibold text-emerald-700">
                      Ranked website on the top in just 3 months
                    </p>
                  ) : currentCreator.name === "Mahi Sharma" ? (
                    <p className="text-sm md:text-base font-semibold text-emerald-700">
                      Helped creative content that goes viral
                    </p>
                  ) : currentCreator.name === "Drew Whop" ? (
                    <p className="text-sm md:text-base font-semibold text-emerald-700">
                      Helped getting high ticket clients consistently for drew
                    </p>
                  ) : (
                    <p className="text-sm md:text-base font-semibold text-emerald-700">
                      {currentCreator.collaboration}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
            {creators.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
                  index === currentIndex ? "bg-emerald-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
