'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

interface Bacteria {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

export default function BacteriaBackground() {
  const [bacteria, setBacteria] = useState<Bacteria[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const generateNewBacteria = useCallback((count: number): Bacteria[] => {
    return Array.from({ length: count }, (_, index) => ({
      id: Date.now() + index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 25, // Smaller range: 25-30
      rotation: Math.random() * 360,
    }));
  }, []);

  const BacteriaSVG = ({ size }: { size: number }) => (
    <Image
      src="/bacteria.png"
      alt="Bacteria"
      width={size}
      height={size}
      className="object-contain"
    />
  );

  useEffect(() => {
    setBacteria(generateNewBacteria(2)); // Start with five bacteria
  }, [generateNewBacteria]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPosition(currentScrollY);
      setIsAtTop(currentScrollY === 0);

      // Calculate the scroll percentage
      const scrollPercentage = currentScrollY / scrollHeight;

      // Adjust the bacteria count based on scroll percentage
      const targetBacteriaCount = Math.floor(10 + (290 * scrollPercentage)); // Max 300 bacteria

      setBacteria(prevBacteria => {
        if (prevBacteria.length < targetBacteriaCount) {
          // Add bacteria
          return [...prevBacteria, ...generateNewBacteria(targetBacteriaCount - prevBacteria.length)];
        } else if (prevBacteria.length > targetBacteriaCount) {
          // Remove bacteria
          return prevBacteria.slice(0, targetBacteriaCount);
        }
        return prevBacteria;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [generateNewBacteria]);

  return (
    <div
      className={`fixed overflow-hidden pointer-events-none transition-all duration-300 ${
        isAtTop ? 'bg-black inset-0 top-20' : 'bg-transparent inset-0'
      }`}
    >
      {bacteria.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            transform: `rotate(${b.rotation}deg)`,
          }}
        >
          <BacteriaSVG size={b.size} />
        </div>
      ))}
    </div>
  );
}