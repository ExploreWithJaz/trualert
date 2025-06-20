'use client';

import React from 'react';

const PulseEffect: React.FC = () => {
  return (
    <>
      {/* Wrapper centered relative to phone screen */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        {/* First pulse */}
        <div className="w-48 h-48 bg-[#666060]/80 rounded-full animate-pulse-large-slow" />

        {/* Second pulse with delay */}
        <div
          className="w-48 h-48 bg-[#666060]/50 rounded-full animate-pulse-large-slow absolute top-0 left-0"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <style jsx>{`
        @keyframes pulse-large-slow {
          0% {
            transform: scale(0);
            opacity: 0.5;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-pulse-large-slow {
          animation: pulse-large-slow 4s ease-out infinite;
        }
      `}</style>
    </>
  );
};

export default PulseEffect;
