"use client"

export default function ClothingCaseStudy() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section - Left */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="https://framerusercontent.com/assets/EnIr8BLCc5cHl97sMAoX13URc.mp4" type="video/mp4" />
              </video>
              {/* Brand overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl font-light italic tracking-wide">theo</h3>
              </div>
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">Client results</p>

              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Growing a clothing brand with <span className="italic font-light">video</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Theo came to us ahead of a new collection launch, looking to grow their reach and build anticipation. We
                combined UGC with light influencer seeding and short-form video.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-black">18K</div>
                <div className="text-xl font-semibold text-black">Followers</div>
                <div className="text-gray-500 text-sm">In six weeks</div>
              </div>

              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-black">156%</div>
                <div className="text-xl font-semibold text-black">Engagement</div>
                <div className="text-gray-500 text-sm">Compared to previous month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}