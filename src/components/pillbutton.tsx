'use client';

import React from 'react';
import { useScrollToTop } from './useScrollToTop';

interface PillButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'colored';
  children?: React.ReactNode;
  scrollToTop?: boolean; // New prop to enable scroll to top
  scrollOptions?: {
    duration?: number;
    behavior?: 'smooth' | 'instant' | 'auto';
  };
}

const PillButton: React.FC<PillButtonProps> = ({ 
  onClick, 
  href, 
  className = "", 
  size = "small",
  variant = "default",
  children,
  scrollToTop = false,
  scrollOptions = {}
}) => {
  const scrollToTopFn = useScrollToTop(scrollOptions);
  
  const baseClasses = "relative inline-block border rounded-full transition-all duration-300 cursor-pointer overflow-hidden";
  
  const sizeClasses = {
    small: "w-[34px] h-[57px] border-2",
    medium: "w-15 h-30 border-2", 
    large: "w-20 h-40 border-3",
    custom: "w-[34px] h-[57px] border-2"
  };

  const variantClasses = {
    default: "border-white/80",
    colored: "bg-gradient-to-b from-indigo-500 to-purple-600 border-white/30 hover:scale-105 hover:shadow-[0_0_25px_rgba(102,126,234,0.5)]"
  };

  const dotSizes = {
    small: "w-2 h-2",
    medium: "w-2 h-2",
    large: "w-2.5 h-2.5"
  };

  const handleClick = (e: React.MouseEvent) => {
    if (scrollToTop) {
      e.preventDefault();
      scrollToTopFn();
    }
    if (onClick) {
      onClick();
    }
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <>
      {href ? (
        <Component
          href={href}
          onClick={handleClick}
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        >
          <div
            className={`absolute ${dotSizes[size]} bg-white rounded-full left-1/2 transform -translate-x-1/2 pill-dot-animate`}
          />
          {children}
        </Component>
      ) : (
        <Component
          onClick={handleClick}
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        >
          <div
            className={`absolute ${dotSizes[size]} bg-white rounded-full left-1/2 transform -translate-x-1/2 pill-dot-animate`}
          />
          {children}
        </Component>
      )}
    </>
  );
};

export default PillButton;