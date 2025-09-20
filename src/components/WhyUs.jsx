import { useState } from 'react'

const ViralComparison = () => {
  const [showContact, setShowContact] = useState(false)

  const handleBookCall = () => {
    setShowContact(!showContact)
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-8 bg-emerald-100">
      <div className="w-full max-w-7xl">
        {/* New Section - Serious Business */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              If you are really serious to scale your business or brand then you are 
              <span className="text-emerald-600"> next step away</span>
            </h2>
            
            <div className="space-y-6">
              <button 
                onClick={handleBookCall}
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                Book a strategy call
              </button>
              
              {/* Contact Info - Shows when button is clicked */}
              {showContact && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-200 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-600 text-lg">📧</span>
                      <span className="text-gray-800">contact@socialbud.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-600 text-lg">📱</span>
                      <span className="text-gray-800">+91 9876543210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-600 text-lg">🌐</span>
                      <span className="text-gray-800">www.socialbud.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-600 text-lg">📍</span>
                      <span className="text-gray-800">Mumbai, Maharashtra, India</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Hero-style Card */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="bg-white rounded-3xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[3/4] bg-gradient-to-br from-emerald-200 via-emerald-300 to-emerald-400 rounded-2xl overflow-hidden relative">
                  {/* Mock Social Media UI */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <span className="text-white font-medium text-sm">socialbud</span>
                      <span className="text-white opacity-75 text-sm">2h</span>
                    </div>
                  </div>
                  
                  {/* Growth chart visualization */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 via-emerald-200 to-emerald-400 opacity-80">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-32 bg-white rounded-full opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-white text-2xl">📈</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViralComparison