export default function TeamSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm mb-4">Our team</p>
          <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            Top Creators
            <br />
            we have worked<em className="italic"> with.</em>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Sofia Little */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/professional-woman-in-tan-blazer-creative-director.jpg"
                alt="Sofia Little"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Sofia Little</h3>
            <p className="text-gray-500">Creative Lead</p>
          </div>

          {/* James Cohen */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/professional-man-in-white-t-shirt-founder-ceo-port.jpg"
                alt="James Cohen"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">James Cohen</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>

          {/* Maya Rodriguez */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/professional-woman-in-black-top-arms-crossed-growt.jpg"
                alt="Maya Rodriguez"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Maya Rodriguez</h3>
            <p className="text-gray-500">Growth Specialist</p>
          </div>
        </div>
      </div>
    </section>
  )
}