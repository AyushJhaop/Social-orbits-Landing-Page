function Left() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 text-center font-['Epilogue']">
          Top performing content
        </h1>
        
        {/* Mobile: Stack vertically, Desktop: Horizontal scroll */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 sm:overflow-x-auto pb-6 md:pb-8 sm:scrollbar-hide">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] h-[360px] xs:h-[400px] sm:h-[440px] md:h-[480px] bg-gray-900 rounded-[25px] xs:rounded-[30px] md:rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[20px] xs:rounded-[22px] md:rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DEugfaQoFv2/embed"
                  className="w-full h-full border-0 rounded-[18px] xs:rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-2 xs:mt-3 md:mt-4">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">ohlalagoa</h3>
              <p className="text-xs text-gray-600">See how we scaled this brand 300%</p>
            </div>
          </div>

          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] h-[360px] xs:h-[400px] sm:h-[440px] md:h-[480px] bg-gray-900 rounded-[25px] xs:rounded-[30px] md:rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[20px] xs:rounded-[22px] md:rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DOVMfl8kXXi/embed"
                  className="w-full h-full border-0 rounded-[18px] xs:rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-2 xs:mt-3 md:mt-4">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">khodaniyajewellers</h3>
              <p className="text-xs text-gray-600">From startup to market leader</p>
            </div>
          </div>

          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] h-[360px] xs:h-[400px] sm:h-[440px] md:h-[480px] bg-gray-900 rounded-[25px] xs:rounded-[30px] md:rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[20px] xs:rounded-[22px] md:rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DMSa9TYvcRI/embed"
                  className="w-full h-full border-0 rounded-[18px] xs:rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-2 xs:mt-3 md:mt-4">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">tomatoesgoa</h3>
              <p className="text-xs text-gray-600">8x return on investment</p>
            </div>
          </div>

          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] h-[360px] xs:h-[400px] sm:h-[440px] md:h-[480px] bg-gray-900 rounded-[25px] xs:rounded-[30px] md:rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[20px] xs:rounded-[22px] md:rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DLg8T4fxfdd/embed"
                  className="w-full h-full border-0 rounded-[18px] xs:rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-2 xs:mt-3 md:mt-4">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">tomatoesgoa</h3>
              <p className="text-xs text-gray-600">Behind the scenes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Left;
