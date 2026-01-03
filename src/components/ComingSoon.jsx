import React from 'react'

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-orange-900">
      <div className="text-center px-6">
        <h1 
          className="text-6xl md:text-8xl font-bold text-white mb-6" 
          style={{ fontFamily: 'klaft, sans-serif' }}
        >
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          We're working on something amazing!
        </p>
      </div>
    </div>
  )
}

export default ComingSoon
