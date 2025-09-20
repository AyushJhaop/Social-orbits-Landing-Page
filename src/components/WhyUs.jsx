const ViralComparison = () => {
  const CrossIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="rgba(0, 0, 0, 0.48)"
      className="bi bi-x-circle-fill flex-shrink-0"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
    </svg>
  )

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="rgb(0, 0, 0)"
      className="bi bi-check-circle-fill flex-shrink-0"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  )

  const ViralLogo = () => (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="white" />
        </svg>
      </div>
      <span className="text-black font-normal text-2xl">viral</span>
    </div>
  )

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-8 bg-emerald-100">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-20">
          <p className="text-black text-base mb-12 font-medium">The difference</p>
          <h1 className="text-6xl font-bold text-black leading-tight mb-4">Why choose Viral</h1>
          <h1 className="text-6xl text-black leading-tight">
            over <em className="italic font-light">everyone</em> else?
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-32">
          {/* Other Agencies Column */}
          <div>
            <h2 className="text-3xl font-light text-gray-400 mb-16">Other Agencies</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CrossIcon />
                <span className="text-gray-400 text-lg font-normal">Generic content templates</span>
              </div>
              <div className="flex items-center gap-4">
                <CrossIcon />
                <span className="text-gray-400 text-lg font-normal">Monthly reporting only</span>
              </div>
              <div className="flex items-center gap-4">
                <CrossIcon />
                <span className="text-gray-400 text-lg font-normal">Separate teams for different platforms</span>
              </div>
              <div className="flex items-center gap-4">
                <CrossIcon />
                <span className="text-gray-400 text-lg font-normal">Long-term contracts required</span>
              </div>
              <div className="flex items-center gap-4">
                <CrossIcon />
                <span className="text-gray-400 text-lg font-normal">One-size-fits-all approach</span>
              </div>
            </div>
          </div>

          {/* Viral Column */}
          <div>
            <div className="mb-16">
              <ViralLogo />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-black text-lg font-normal">Custom content for your brand</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-black text-lg font-normal">Real-time performance tracking</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-black text-lg font-normal">Integrated cross-platform strategy</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-black text-lg font-normal">Flexible month-to-month options</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-black text-lg font-normal">Tailored to your specific goals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViralComparison