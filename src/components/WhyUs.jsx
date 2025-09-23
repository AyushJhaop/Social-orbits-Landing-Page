import { useState } from 'react'

const ViralComparison = () => {
  const [showContact, setShowContact] = useState(false)

  const handleBookCall = () => {
    setShowContact(!showContact)
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-emerald-100">
      <div className="w-full max-w-5xl mx-auto text-center">
        {/* Content */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight font-['Epilogue']">
            If you are really serious to scale your business or brand then you are 
            <span className="text-emerald-600"> next step away</span>
          </h2>
          
          {/* CTA Button */}
          <div className="space-y-6">
            <button 
              onClick={handleBookCall}
              className="bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg font-['Epilogue']"
            >
              Book a strategy call
            </button>
            
            {/* Contact Info - Shows when button is clicked */}
            {showContact && (
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-emerald-200 space-y-3 md:space-y-4 max-w-sm md:max-w-md mx-auto">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 font-['Epilogue']">Contact Information</h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-600 text-base md:text-lg">📧</span>
                    <span className="text-gray-800 text-sm md:text-base">contact@socialbud.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-600 text-base md:text-lg">📱</span>
                    <span className="text-gray-800 text-sm md:text-base">+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-600 text-base md:text-lg">🌐</span>
                    <span className="text-gray-800 text-sm md:text-base">www.socialbud.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-600 text-base md:text-lg">📍</span>
                    <span className="text-gray-800 text-sm md:text-base">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViralComparison