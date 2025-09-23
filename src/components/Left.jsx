function Left() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
          Check Out Our <span className="text-emerald-600">Success Stories</span>
        </h2>
        
        {/* Mobile: Stack vertically, Desktop: Horizontal scroll */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:space-x-4 lg:space-x-6 sm:overflow-x-auto pb-6 md:pb-8 space-y-6 sm:space-y-0">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-[200px] sm:w-[220px] md:w-[240px] h-[400px] sm:h-[440px] md:h-[480px] bg-gray-900 rounded-[30px] md:rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[22px] md:rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/C8J3-ZOtKWi/embed"
                  className="w-full h-full border-0 rounded-[18px] md:rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-3 md:mt-4">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">ohlalagoa</h3>
              <p className="text-xs text-gray-600">See how we scaled this brand 300%</p>
            </div>
          </div>

          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-[200px] sm:w-[220px] md:w-[240px] h-[400px] sm:h-[440px] md:h-[480px] bg-gray-900 rounded-[30px] md:rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[22px] md:rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DHp-DNhxq3G/embed"
                  className="w-full h-full border-0 rounded-[18px] md:rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-3 md:mt-4">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">khodaniyajewellers</h3>
              <p className="text-xs text-gray-600">From startup to market leader</p>
            </div>
          </div>

          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-[200px] sm:w-[220px] md:w-[240px] h-[400px] sm:h-[440px] md:h-[480px] bg-gray-900 rounded-[30px] md:rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[22px] md:rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DMSa9TYvcRI/embed"
                  className="w-full h-full border-0 rounded-[18px] md:rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-3 md:mt-4">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">tomatoesgoa</h3>
              <p className="text-xs text-gray-600">8x return on investment</p>
            </div>
          </div>

          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-[200px] sm:w-[220px] md:w-[240px] h-[400px] sm:h-[440px] md:h-[480px] bg-gray-900 rounded-[30px] md:rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[22px] md:rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DLg8T4fxfdd/embed"
                  className="w-full h-full border-0 rounded-[18px] md:rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-3 md:mt-4">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">tomatoesgoa</h3>
              <p className="text-xs text-gray-600">Behind the scenes</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-base md:text-lg mb-4 md:mb-6 opacity-90">
              Join the brands featured in these reels and start scaling today
            </p>
            <button className="bg-white text-emerald-600 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
              Book Your Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Left;
