'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ScreenContent {
  id: string;
  content: React.ReactNode;
}

interface TextSection {
  id: string;
  side: 'left' | 'right';
  position: string;
  content: {
    title: string;
    description: string;
    features: string[];
  };
}

const TruAlertScrollEffect: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [phonePosition, setPhonePosition] = useState<{ position: 'absolute' | 'fixed'; top: string; transform: string }>({
    position: 'absolute',
    top: '10%',
    transform: 'translateX(-50%)'
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateContent = (): void => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the container
      const scrollProgress = Math.max(0, Math.min(1, -containerTop / (containerHeight - windowHeight)));
      
      // Update phone position based on scroll progress
      let newPhonePosition;
      
      if (scrollProgress < 0.15) {
        // Phone starts at top and follows scroll
        newPhonePosition = {
          position: 'absolute' as const,
          top: '10%',
          transform: 'translateX(-50%)'
        };
      } else if (scrollProgress < 0.85) {
        // Phone locks in the middle
        newPhonePosition = {
          position: 'fixed' as const,
          top: '50%',
          transform: 'translateX(-50%) translateY(-50%)'
        };
      } else {
        // Phone stops following and stays at bottom section
        newPhonePosition = {
          position: 'absolute' as const,
          top: '90%',
          transform: 'translateX(-50%) translateY(-100%)'
        };
      }
      
      setPhonePosition(newPhonePosition);
      
      // Update screen content
      let newScreen: number;
      if (scrollProgress < 0.33) {
        newScreen = 0;
      } else if (scrollProgress < 0.66) {
        newScreen = 1;
      } else {
        newScreen = 2;
      }

      if (newScreen !== currentScreen) {
        setCurrentScreen(newScreen);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = (): void => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateContent();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateContent(); // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentScreen]);

  const screens: ScreenContent[] = [
    {
      id: 'screen1',
      content: (
        <div className="flex flex-col items-center justify-center h-full px-8 py-10 text-center">
          <div className="w-15 h-15 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-5 flex items-center justify-center text-white text-2xl">
            🛡️
          </div>
          <h2 className="text-2xl font-bold mb-5 text-gray-900">TRUalert</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">Emergency aid, just a tap away</p>
          <div className="w-30 h-30 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg mb-5">
            TAP FOR HELP
          </div>
          <p className="text-sm text-gray-400">One tap connects you to professional emergency dispatchers</p>
        </div>
      )
    },
    {
      id: 'screen2',
      content: (
        <div className="flex flex-col items-center justify-center h-full px-8 py-10 text-center">
          <h2 className="text-2xl font-bold mb-5 text-gray-900">Emergency Alert</h2>
          <div className="w-30 h-30 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg mb-5 animate-pulse">
            ACTIVE
          </div>
          <p className="font-semibold text-gray-800 mb-2">Connecting to Noonlight...</p>
          <p className="text-sm text-gray-600 mb-5">Your location has been shared with emergency services</p>
          <div className="mt-5 p-4 bg-gray-50 rounded-lg w-full">
            <p className="text-xs text-gray-600">
              📍 Current Location Detected<br/>
              🚨 Emergency Services Notified
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'screen3',
      content: (
        <div className="flex flex-col items-center justify-center h-full px-8 py-10 text-center">
          <h2 className="text-2xl font-bold mb-5 text-gray-900">Stay Protected</h2>
          <div className="grid grid-cols-2 gap-4 w-full my-5">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl mb-1">⚡</div>
              <p className="text-xs text-gray-600">Quick Alert</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl mb-1">📍</div>
              <p className="text-xs text-gray-600">Location Share</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl mb-1">🔒</div>
              <p className="text-xs text-gray-600">Secure</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl mb-1">📞</div>
              <p className="text-xs text-gray-600">24/7 Support</p>
            </div>
          </div>
          <p className="text-gray-600">Comprehensive safety features designed for peace of mind</p>
        </div>
      )
    }
  ];

  const textSections: TextSection[] = [
    {
      id: 'text1',
      side: 'left',
      position: 'top-[20%]',
      content: {
        title: 'Emergency Protection',
        description: 'Experience peace of mind knowing help is just a tap away. TRUalert instantly connects you to professional emergency dispatchers.',
        features: [
          'Instant emergency connection',
          'Professional dispatcher support',
          'No tracking, maximum privacy'
        ]
      }
    },
    {
      id: 'text2',
      side: 'right',
      position: 'top-[45%]',
      content: {
        title: 'Trusted Emergency Help',
        description: 'With TRUalert, you\'re never alone. One tap connects you to Noonlight\'s professional dispatchers who coordinate emergency response.',
        features: [
          'SMS and call coordination',
          'Quick and discreet response',
          'Always ready when needed'
        ]
      }
    },
    {
      id: 'text3',
      side: 'left',
      position: 'top-[70%]',
      content: {
        title: 'Complete Safety Solution',
        description: 'Building safer communities with comprehensive protection features that work around the clock to keep you secure.',
        features: [
          'Campus safety integration',
          '24/7 monitoring support',
          'Affordable subscription plans'
        ]
      }
    }
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden h-[200vh] bg-gradient-to-b from-gray-900 to-black">
      {/* Floating background elements */}
      <div className="absolute top-[10%] left-[10%] opacity-10 animate-bounce text-4xl" style={{ animationDelay: '0s', animationDuration: '6s' }}>
        🛡️
      </div>
      <div className="absolute top-[60%] right-[15%] opacity-10 animate-bounce text-4xl" style={{ animationDelay: '2s', animationDuration: '6s' }}>
        📱
      </div>
      <div className="absolute bottom-[20%] left-[20%] opacity-10 animate-bounce text-4xl" style={{ animationDelay: '4s', animationDuration: '6s' }}>
        🚨
      </div>
      
      {/* Dynamic phone mockup */}
      <div 
        className="left-1/2 w-70 h-[560px] z-10 transition-all duration-300 ease-out"
        style={{
          position: phonePosition.position,
          top: phonePosition.top,
          transform: phonePosition.transform
        }}
      >
        <div className="w-full h-full bg-gray-900 rounded-[35px] p-4 shadow-2xl relative">
          {/* Phone screen */}
          <div className="w-full h-full bg-white rounded-[25px] overflow-hidden relative">
            {screens.map((screen, index) => (
              <div
                key={screen.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-800 ease-in-out ${
                  currentScreen === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {screen.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side text content */}
      {textSections.map((section) => (
        <div
          key={section.id}
          className={`absolute w-[350px] z-5 ${section.position} ${
            section.side === 'left' 
              ? 'left-[8%] text-right pr-12' 
              : 'right-[8%] text-left pl-12'
          }`}
        >
          <h3 className="text-4xl font-bold mb-5 text-white">
            {section.content.title}
          </h3>
          <p className="text-lg leading-relaxed text-white/90 mb-4">
            {section.content.description}
          </p>
          <ul className="list-none my-5">
            {section.content.features.map((feature, index) => (
              <li key={index} className="text-white/80 my-2 relative pl-5">
                <span className="absolute left-0 text-teal-400 font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Progress indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-15">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full my-4 transition-all duration-300 ${
              currentScreen === index 
                ? 'bg-white transform scale-110' 
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TruAlertScrollEffect;