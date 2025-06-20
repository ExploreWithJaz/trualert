'use client';

import React from 'react';

const PulseEffect: React.FC = () => {
  return (
    <>
  <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#666060]/80 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-large-slow" />
  <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#666060]/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-large-slow animation-delay-1000" />

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
