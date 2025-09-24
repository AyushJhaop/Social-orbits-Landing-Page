"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
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
  postImage: string
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % creators.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Load Iframely script for profile embeds only
  useEffect(() => {
    // Load Iframely script for profile embeds
    const iframelyScript = document.createElement('script')
    iframelyScript.async = true
    iframelyScript.src = '//iframely.net/embed.js'
    document.body.appendChild(iframelyScript)

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

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
        {/* Mobile Phone Frame - Left Side with Instagram Post */}
        <div className="relative bg-gray-900 rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 shadow-2xl flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] mx-auto lg:mx-0">
          {/* Phone Screen */}
          <div className="bg-black rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden relative w-full">
            {/* Status Bar */}
            <div className="bg-black text-white text-xs px-3 md:px-4 py-1.5 md:py-2 flex justify-between items-center">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-3 md:w-4 h-1.5 md:h-2 border border-white rounded-sm">
                  <div className="w-2 md:w-3 h-0.5 md:h-1 bg-white rounded-sm m-0.5"></div>
                </div>
              </div>
            </div>

            {/* Creator Image */}
            <div className="bg-white h-[400px] sm:h-[440px] md:h-[480px] relative overflow-hidden" key={`post-${currentCreator.id}`}>
              <img
                src={currentCreator.postImage}
                alt={`${currentCreator.name} content`}
                className="w-full h-full object-cover"
              />
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
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <Card className="p-4 sm:p-6 md:p-8 bg-card">
            <div className="mb-4 md:mb-6">
              <h3 className="font-playfair font-bold text-xl md:text-2xl text-card-foreground mb-2">{currentCreator.name}</h3>
              <p className="text-muted-foreground text-base md:text-lg mb-3 md:mb-4">{currentCreator.handle}</p>
              
              {/* Profile Embed */}
              <div className="mb-4 md:mb-6" key={`profile-${currentCreator.id}`}>
                <div className="iframely-embed">
                  <div className="iframely-responsive" style={{ height: '120px', paddingBottom: 0 }}>
                    <a 
                      href={`https://www.instagram.com/${currentCreator.handle.replace('@', '')}/`} 
                      data-iframely-url={currentCreator.profileEmbedUrl}
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              <h4 className="font-semibold text-card-foreground mb-2 md:mb-3 text-base md:text-lg">Collaboration</h4>
              <p className="text-muted-foreground text-sm md:text-base">{currentCreator.collaboration}</p>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-base md:text-lg py-2.5 md:py-3 px-4 rounded-md font-medium transition-colors">
              View Profile
            </button>
          </Card>

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
