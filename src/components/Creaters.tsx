"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share, Bookmark } from "lucide-react"
 
interface Creator {
  id: string
  name: string
  handle: string
  avatar: string
  followers: string
  posts: number
  engagement: string
  collaboration: string
  instagramPost: {
    image: string
    likes: string
    comments: string
    caption: string
  }
}

const creators: Creator[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    handle: "@sarahjohnson",
    avatar: "/female-fashion-influencer-profile-photo.jpg",
    followers: "125K",
    posts: 1247,
    engagement: "4.2%",
    collaboration: "Fashion Campaign 2024",
    instagramPost: {
      image: "/fashion-lifestyle-instagram-post-with-trendy-outfi.jpg",
      likes: "8,234",
      comments: "156",
      caption: "Loving this new collection! Perfect for the season ✨ #fashion #style",
    },
  },
  {
    id: "2",
    name: "Marcus Chen",
    handle: "@marcuschen",
    avatar: "/male-lifestyle-influencer-profile-photo.jpg",
    followers: "89K",
    posts: 892,
    engagement: "5.1%",
    collaboration: "Tech Product Launch",
    instagramPost: {
      image: "/tech-lifestyle-instagram-post-with-modern-gadgets.jpg",
      likes: "12,567",
      comments: "234",
      caption: "Game-changing tech that actually makes life easier 🚀 #tech #innovation",
    },
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    handle: "@emmarodriguez",
    avatar: "/female-wellness-influencer-profile-photo.jpg",
    followers: "203K",
    posts: 1856,
    engagement: "3.8%",
    collaboration: "Wellness Brand Partnership",
    instagramPost: {
      image: "/wellness-lifestyle-instagram-post-with-healthy-foo.jpg",
      likes: "15,892",
      comments: "298",
      caption: "Starting the day right with mindful choices 🌱 #wellness #mindfulness",
    },
  },
  {
    id: "4",
    name: "David Kim",
    handle: "@davidkim",
    avatar: "/male-travel-influencer-profile-photo.jpg",
    followers: "156K",
    posts: 2134,
    engagement: "4.7%",
    collaboration: "Travel Campaign",
    instagramPost: {
      image: "/travel-instagram-post-with-beautiful-landscape.jpg",
      likes: "9,876",
      comments: "187",
      caption: "Adventures that feed the soul 🌍 #travel #wanderlust",
    },
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
        {/* Mobile Phone Frame */}
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

            {/* Instagram Interface */}
            <div className="bg-white h-[480px] relative overflow-hidden">
              {/* Instagram Header */}
              <div className="flex items-center justify-between p-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <img
                    src={currentCreator.avatar || "/placeholder.svg"}
                    alt={currentCreator.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="font-semibold text-xs">{currentCreator.handle}</span>
                </div>
                <div className="w-5 h-5">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                </div>
              </div>

              {/* Instagram Post Image */}
              <div className="relative">
                <img
                  src={currentCreator.instagramPost.image || "/placeholder.svg"}
                  alt="Instagram post"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Instagram Actions */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5" />
                    <MessageCircle className="w-5 h-5" />
                    <Share className="w-5 h-5" />
                  </div>
                  <Bookmark className="w-5 h-5" />
                </div>

                <div className="text-xs font-semibold mb-2">{currentCreator.instagramPost.likes} likes</div>

                <div className="text-xs">
                  <span className="font-semibold">{currentCreator.handle}</span>{" "}
                  <span className="text-gray-700">{currentCreator.instagramPost.caption}</span>
                </div>

                <div className="text-xs text-gray-500 mt-1">
                  View all {currentCreator.instagramPost.comments} comments
                </div>
              </div>
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

        {/* Creator Info Card */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <Card className="p-8 bg-card">
            <div className="flex items-center gap-6 mb-6">
              <img
                src={currentCreator.avatar || "/placeholder.svg"}
                alt={currentCreator.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="font-playfair font-bold text-2xl text-card-foreground">{currentCreator.name}</h3>
                <p className="text-muted-foreground text-lg">{currentCreator.handle}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6 text-center">
              <div>
                <div className="font-bold text-2xl text-emerald-600">{currentCreator.followers}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-emerald-600">{currentCreator.posts}</div>
                <div className="text-sm text-muted-foreground">Posts</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-emerald-600">{currentCreator.engagement}</div>
                <div className="text-sm text-muted-foreground">Engagement</div>
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
