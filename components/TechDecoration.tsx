import React from 'react';

interface TechDecorationProps {
    className?: string;
}

export const TechDecoration: React.FC<TechDecorationProps> = ({ className }) => {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="99.5" stroke="currentColor" strokeOpacity="0.2"/>
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4 4"/>
        <path d="M100 20V40" stroke="currentColor" strokeWidth="2"/>
        <path d="M100 160V180" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 100L40 100" stroke="currentColor" strokeWidth="2"/>
        <path d="M160 100L180 100" stroke="currentColor" strokeWidth="2"/>
        <rect x="90" y="90" width="20" height="20" stroke="#FFE600" strokeWidth="2"/>
    </svg>
  );
};