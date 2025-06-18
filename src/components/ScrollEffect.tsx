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
    position: 'right',
    title: 'Affordable Subscription',
    description:
      'Choose the subscription plan that perfectly fits your needs and preferences.',
    image: 'https://trualert.com/wp-content/uploads/2025/05/Group-39265-1.png',
  },
  {
    position: 'left',
    title: 'One Tap for Immediate Safety',
    description:
      'Quickly summon help with a single tap. Provide additional info to ensure rapid response to your exact location.',
    image: 'https://trualert.com/wp-content/uploads/2025/04/iPhone-14-Pro-Max-1.png',
  },
  {
    position: 'right',
    title: 'Track Your Safety History',
    description:
      'Easily view your emergency activity log, including button presses, locations, and response times, for complete peace of mind.',
    image: 'https://trualert.com/wp-content/uploads/2025/04/iPhone-14-Pro-Max-3.png',
  },
];

const ScrollEffect: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.5,
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

  return (
    <div className="relative flex w-full bg-white px-10 gap-10">
      {/* Sticky Image */}
      <div className="w-1/2 flex justify-center items-center sticky top-0 h-screen z-10">
        <img
          src={sections[activeIndex]?.image}
          alt="Phone"
          className="max-h-[80%] transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Scrollable Sections */}
      <div className="w-1/2 flex flex-col gap-80 py-40">
        {sections.map((section, idx) => (
          <div
            key={idx}
            ref={(el) => { sectionRefs.current[idx] = el; }}
            data-index={idx}
            className={`flex ${
              section.position === 'left' ? 'flex-row-reverse' : 'flex-row'
            } items-center gap-10`}
          >
            <div className="w-full">
              <h3 className="text-3xl font-bold text-black">{section.title}</h3>
              <p className="text-lg text-gray-600 mt-3">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollEffect;
