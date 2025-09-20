import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { motion } from "framer-motion";

function Left() {
  // Sample Instagram reel URLs - replace with actual reel URLs
  const instagramReels = [
    {
      id: 1,
      embedUrl: "https://www.instagram.com/reel/C8vN2HRO7Kt/embed",
      title: "ohlalagoa",
      description: "See how we scaled this brand 300%"
    },
    {
      id: 2,
      embedUrl: "https://www.instagram.com/reel/C8sP4RqO8Lt/embed",
      title: "khodaniyajewellers",
      description: "From startup to market leader"
    },
    {
      id: 3,
      embedUrl: "https://www.instagram.com/reel/C8rM1HqO9Mt/embed",
      title: "tomatoesgoa",
      description: "8x return on investment achieved"
    },
    {
      id: 4,
      embedUrl: "https://www.instagram.com/reel/C8qL5HqO1Pt/embed",
      title: "tomatoesgoa",
      description: "Behind the scenes of our method"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Promotional Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Check Out Our <span className="text-emerald-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Watch real results from real clients. These Instagram reels showcase the transformations we've delivered.
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Check Out The Reels Now!</span>
          </div>
        </motion.div>

        {/* 4 Mobile Phones Lineup */}
        <div className="flex justify-center items-center space-x-6 lg:space-x-8 overflow-x-auto pb-8">
          {instagramReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              className="flex-shrink-0 relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Mobile Phone Container */}
              <div className="relative hover:scale-105 transition-transform duration-300">
                {/* Phone Frame */}
                <div className="relative w-[240px] h-[480px] bg-gray-900 rounded-[35px] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full bg-black rounded-[25px] overflow-hidden relative">
                    {/* Instagram Interface Mockup */}
                    <div className="w-full h-full bg-white relative">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-10 bg-white flex items-center justify-between px-4 text-black text-sm font-medium">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                          <div className="w-6 h-3 border border-black rounded-sm">
                            <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* Instagram Header */}
                      <div className="absolute top-10 left-0 right-0 h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">
                        <div className="flex items-center space-x-2">
                          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <span className="font-bold text-black">Instagram</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                      </div>

                      {/* Main Content Area */}
                      <div className="absolute top-22 left-0 right-0 bottom-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-500">
                        {/* Profile Info at Top */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-emerald-600">SO</span>
                            </div>
                            <span className="text-white font-medium text-sm">socialorbits</span>
                            <span className="text-white opacity-75 text-xs">• 2h</span>
                          </div>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                          </svg>
                        </div>

                        {/* Center Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-opacity-30 transition-all">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>

                        {/* Bottom Engagement */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex justify-between items-end">
                            <div className="flex-1">
                              <p className="text-white text-sm font-medium mb-1">{reel.title}</p>
                              <p className="text-white text-xs opacity-90">{reel.description}</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 ml-2">
                              <div className="flex flex-col items-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className="text-white text-xs">2.1k</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="text-white text-xs">89</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                <span className="text-white text-xs">Share</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white border-t border-gray-200 flex items-center justify-around">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone Button */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Mobile Description */}
              <div className="text-center mt-4 space-y-1 max-w-[240px]">
                <h3 className="text-sm font-bold text-gray-900">{reel.title}</h3>
                <p className="text-xs text-gray-600">{reel.description}</p>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium text-xs flex items-center justify-center space-x-1 mx-auto">
                  <span>Watch Now</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the brands featured in these reels and start scaling today
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Book Your Strategy Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Left;
