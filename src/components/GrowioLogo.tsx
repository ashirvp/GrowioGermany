import React from 'react';
import logoImg from '../assets/logo.png';

interface GrowioLogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const GrowioLogo: React.FC<GrowioLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center overflow-hidden select-none ${className}`}>
        <img
          src={logoImg}
          alt="Growio Icon"
          className={`${heightMap[size]} w-auto object-cover object-left max-w-[40px]`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Growio Logo"
        className={`${heightMap[size]} w-auto object-contain transition-opacity duration-300 hover:opacity-95`}
      />
    </div>
  );
};

