"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Extend Window interface for Instagram and Iframely scripts
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void
      }
    }
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
  postEmbedUrl: string
}

const creators: Creator[] = [
  {
    id: "1",
    name: "Andy Elliott",
    handle: "@officialandyelliott",
    collaboration: "Business Leadership Campaign",
    profileEmbedUrl: "//iframely.net/S4FUtj2E?theme=white",
    postEmbedUrl: "https://www.instagram.com/reel/C8cf2CrA69b/?utm_source=ig_embed&utm_campaign=loading",
  },
  {
    id: "2",
    name: "Tim McKenna",
    handle: "@timmckenna",
    collaboration: "Ocean Conservation Partnership",
    profileEmbedUrl: "//iframely.net/gVSwwxsO?theme=white",
    postEmbedUrl: "https://www.instagram.com/p/DNe3-sMR5Rp/?utm_source=ig_embed&utm_campaign=loading",
  },
  {
    id: "3",
    name: "Mahi Sharma",
    handle: "@maahieway",
    collaboration: "Travel Lifestyle Campaign",
    profileEmbedUrl: "//iframely.net/5JtYPs9z?theme=white",
    postEmbedUrl: "https://www.instagram.com/reel/DM9j8kLJf_t/?utm_source=ig_embed&utm_campaign=loading",
  },
  {
    id: "4",
    name: "Drew Whop",
    handle: "@drewnice561",
    collaboration: "Barber Community Partnership",
    profileEmbedUrl: "//iframely.net/RoFJBmWN?theme=white",
    postEmbedUrl: "https://www.instagram.com/reel/C4dTGtNLJfM/?utm_source=ig_embed&utm_campaign=loading",
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

  // Load Instagram embed scripts
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.async = true
    script.src = '//www.instagram.com/embed.js'
    script.onerror = () => {
      const fallbackScript = document.createElement('script')
      fallbackScript.src = 'https://iframely.net/files/instagram_embed.js'
      document.body.appendChild(fallbackScript)
    }
    document.body.appendChild(script)

    // Load Iframely script for profile embeds
    const iframelyScript = document.createElement('script')
    iframelyScript.async = true
    iframelyScript.src = '//iframely.net/embed.js'
    document.body.appendChild(iframelyScript)

    return () => {
      // Cleanup scripts on unmount
      const scripts = document.querySelectorAll('script[src*="instagram"], script[src*="iframely"]')
      scripts.forEach(script => script.remove())
    }
  }, [])

  // Re-process embeds when current creator changes
  useEffect(() => {
    // Add a small delay to ensure DOM has updated
    const timer = setTimeout(() => {
      // Re-process Instagram embeds
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
      
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
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Mobile Phone Frame - Left Side with Instagram Post */}
        <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl flex-shrink-0 w-[280px] mx-auto lg:mx-0">
          {/* Phone Screen */}
          <div className="bg-black rounded-[1.5rem] overflow-hidden relative w-full">
            {/* Status Bar */}
            <div className="bg-black text-white text-xs px-4 py-2 flex justify-between items-center">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-white rounded-sm">
                  <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                </div>
              </div>
            </div>

            {/* Real Instagram Post Embed */}
            <div className="bg-white h-[480px] relative overflow-hidden" key={`post-${currentCreator.id}`}>
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink={currentCreator.postEmbedUrl}
                data-instgrm-version="14" 
                style={{ 
                  background: '#FFF', 
                  border: 0, 
                  borderRadius: '3px', 
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                  margin: '1px', 
                  maxWidth: '658px', 
                  minWidth: '326px', 
                  padding: 0, 
                  width: '99.375%'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href={currentCreator.postEmbedUrl}
                    style={{ 
                      background: '#FFFFFF', 
                      lineHeight: 0, 
                      padding: '0 0', 
                      textAlign: 'center', 
                      textDecoration: 'none', 
                      width: '100%' 
                    }} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View this post on Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-3 h-3" />
          </button>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Creator Info Card - Right Side with Profile Embed */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <Card className="p-8 bg-card">
            <div className="mb-6">
              <h3 className="font-playfair font-bold text-2xl text-card-foreground mb-2">{currentCreator.name}</h3>
              <p className="text-muted-foreground text-lg mb-4">{currentCreator.handle}</p>
              
              {/* Profile Embed */}
              <div className="mb-6" key={`profile-${currentCreator.id}`}>
                <div className="iframely-embed">
                  <div className="iframely-responsive" style={{ height: '140px', paddingBottom: 0 }}>
                    <a 
                      href={`https://www.instagram.com/${currentCreator.handle.replace('@', '')}/`} 
                      data-iframely-url={currentCreator.profileEmbedUrl}
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-card-foreground mb-3 text-lg">Collaboration</h4>
              <p className="text-muted-foreground text-base">{currentCreator.collaboration}</p>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-3 px-4 rounded-md font-medium transition-colors">
              View Profile
            </button>
          </Card>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {creators.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
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
