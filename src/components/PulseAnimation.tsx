'use client';

import React from 'react';

const PulseEffect: React.FC = () => {
  return (
    <>
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        {/* First pulse */}
        <div className="w-48 h-48 bg-[#666060] rounded-full animate-pulse-large-fast" />

        {/* Second pulse with delay */}
        <div
          className="w-48 h-48 bg-[#666060] rounded-full animate-pulse-large-fast absolute top-0 left-0"
          style={{ animationDelay: '0.75s' }} // Half of 1.5s
        />
      </div>

      <style jsx>{`
        @keyframes pulse-large-fast {
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
        .animate-pulse-large-fast {
          animation: pulse-large-fast 2s ease-out infinite;
        }
      `}</style>
    </>
  );
};

export default PulseEffect;
