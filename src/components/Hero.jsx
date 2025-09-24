import { Instagram, Linkedin } from "lucide-react"
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16">
        
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-900 rounded-full"></div>
          <a href="#" className="p-2 sm:p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg">
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="#" className="p-2 sm:p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg">
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="#" className="p-2 sm:p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 text-gray-900 leading-tight font-['Epilogue']">
            We only onboard serious businesses ready to invest in{" "}
            <span className="italic text-emerald-600">scaling</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-['Epilogue']">
            Scaling isn't about more ads or more posts. It's about building a system where your brand attracts sales,
            revenue, and loyalty on autopilot.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            <div className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-full border border-emerald-100">
              <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-800 font-['Epilogue']">$5M+ Revenue Generated</span>
            </div>
            <div className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-full border border-emerald-100">
              <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-800 font-['Epilogue']">20+ Businesses & Brands Scaled</span>
            </div>
            <div className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-full border border-emerald-100">
              <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-800 font-['Epilogue']">5x+ ROI Delivered (Average)</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-emerald-600 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full text-base sm:text-lg lg:text-xl font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl font-['Epilogue'] transform" onClick={() => navigate('/book-call')}>
            Book a call
          </button>
        </div>
      </div>
    </div>
  )
}
