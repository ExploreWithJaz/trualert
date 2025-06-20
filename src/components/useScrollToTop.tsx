'use client';

import { useCallback } from 'react';

interface ScrollToTopOptions {
  duration?: number;
  behavior?: 'smooth' | 'instant' | 'auto';
}

export const useScrollToTop = (options: ScrollToTopOptions = {}) => {
  const { duration = 800, behavior = 'smooth' } = options;

  const scrollToTop = useCallback(() => {
    if (behavior === 'smooth' && duration > 0) {
      // Custom smooth scroll with duration control
      const startPosition = window.pageYOffset;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, startPosition * (1 - easeOut));
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    } else {
      // Use native browser behavior
      window.scrollTo({
        top: 0,
        behavior: behavior
      });
    }
  }, [duration, behavior]);

  return scrollToTop;
};