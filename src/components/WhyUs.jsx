import { useNavigate } from 'react-router-dom';

const ViralComparison = () => {
  const navigate = useNavigate();
  
  const handleBookCall = () => {
    navigate('/book-call')
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 50)
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
              Book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViralComparison