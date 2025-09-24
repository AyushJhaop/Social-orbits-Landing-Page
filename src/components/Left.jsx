function Left() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Check Out Our <span className="text-emerald-600">Success Stories</span>
        </h2>
        
        <div className="flex justify-center items-center space-x-6 overflow-x-auto pb-8">
          <div className="flex-shrink-0">
            <div className="w-[240px] h-[480px] bg-gray-900 rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DEugfaQoFv2/embed"
                  className="w-full h-full border-0 rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-900">ohlalagoa</h3>
              <p className="text-xs text-gray-600">See how we scaled this brand 300%</p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-[240px] h-[480px] bg-gray-900 rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DOVMfl8kXXi/embed"
                  className="w-full h-full border-0 rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-900">khodaniyajewellers</h3>
              <p className="text-xs text-gray-600">From startup to market leader</p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-[240px] h-[480px] bg-gray-900 rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DMSa9TYvcRI/embed"
                  className="w-full h-full border-0 rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-900">tomatoesgoa</h3>
              <p className="text-xs text-gray-600">8x return on investment</p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-[240px] h-[480px] bg-gray-900 rounded-[35px] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[25px] overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DLg8T4fxfdd/embed"
                  className="w-full h-full border-0 rounded-[20px]"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram reel"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-900">tomatoesgoa</h3>
              <p className="text-xs text-gray-600">Behind the scenes</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the brands featured in these reels and start scaling today
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Book Your Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Left;
