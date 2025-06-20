'use client';

import React, { useEffect, useRef, useState } from 'react';

type Section = {
  position: 'left' | 'right';
  title: string;
  description: string;
  image: string;
};

const sections: Section[] = [
  {
    position: 'left',
    title: 'AFFORDABLE SUBSCRIPTION',
    description:
      'Choose the subscription plan that perfectly fits your needs and preferences.',
    image: 'https://trualert.com/wp-content/uploads/2025/05/Group-39265-1.png',
  },
  {
    position: 'right',
    title: 'ONE TAP FOR IMMEDIATE SAFETY',
    description:
      'Quickly summon help with a single tap. Provide additional info to ensure rapid response to your exact location.',
    image: 'https://trualert.com/wp-content/uploads/2025/04/iPhone-14-Pro-Max-1.png',
  },
  {
    position: 'left',
    title: 'TRACK YOUR SAFETY HISTORY',
    description:
      'Easily view your emergency activity log, including button presses, locations, and response times, for complete peace of mind.',
    image: 'https://trualert.com/wp-content/uploads/2025/04/iPhone-14-Pro-Max-3.png',
  },
];

const ScrollEffect: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        // Modified observer settings for better detection
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Add console log for debugging
  useEffect(() => {
    console.log("Active index changed to:", activeIndex);
  }, [activeIndex]);


  return (
    <div className="relative w-full" ref={containerRef}>
    {/* Sticky Phone Container - Will stay centered */}
    <div className="sticky top-0 left-0 right-0 bottom-0 h-screen px-20">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-[600px] flex items-center justify-center">
        <img
          src={sections[activeIndex]?.image}
          alt="Phone"
          className="w-[300px] max-w-full max-h-full object-contain transition-all duration-700 ease-in-out"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
        />
      </div>
    </div>

    {/* Scrollable Content */}
    <div className="relative">
      {sections.map((section, idx) => (
        <div
          key={idx}
          ref={(el) => { sectionRefs.current[idx] = el; }}
          data-index={idx}
          className="h-[635px] flex items-center px-20"
        >
            <div className="w-full max-w-[1140px] mx-auto">
              <div
                className={`flex items-center ${section.position === 'left'
                  ? 'justify-start'
                  : 'justify-end'
                  }`}
              >
                <div
                  className={`w-[366.66px] flex flex-col gap-5 p-2.5 text-left ${section.position === 'left'
                    ? 'mr-80'
                    : 'ml-80'
                    }`}
                >
                  <h2 className="text-[32px] font-bold text-white leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Add spacer div after all sections */}
      <div className="h-[15vh]"></div>
      </div>
    </div>
  );
};

export default ScrollEffect;