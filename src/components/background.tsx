import React from 'react'

function background() {
  return (
    <div
        className="fixed inset-0 w-full h-full min-h-screen z-[-1] bg-cover bg-center"
        style={{
          backgroundImage: "url('/map.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'invert(100%) brightness(10.18) contrast(1.5) saturate(0.6) hue-rotate(180deg) invert(100%) brightness(0.1)',
          // Only for mobile: make sure it stays behind and covers
          minHeight: '100vh',
          width: '100vw',
          left: 0,
          top: 0,
        }}
      ></div>
  )
}

export default background