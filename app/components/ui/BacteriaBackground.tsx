'use client';

import { useEffect, useState, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';

interface Bacteria {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

const BacteriaSVG = memo(({ size }: { size: number }) => (
  <Image
    src="https://res.cloudinary.com/dko9vskvn/image/upload/v1727676090/bacteria_mdeifq.png"
    alt="Bacteria"
    width={size}
    height={size}
    className="object-contain"
  />
));

BacteriaSVG.displayName = 'BacteriaSVG';

export default function BacteriaBackground() {
  const [bacteria, setBacteria] = useState<Bacteria[]>([]);
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

  const initialBacteria = useMemo(() => generateNewBacteria(10), [generateNewBacteria]);

  useEffect(() => {
    setBacteria(initialBacteria);
  }, [initialBacteria]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
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
  }, [generateNewBacteria]);

  useEffect(() => {
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

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
            transform: `translate(${b.x}vw, ${b.y}vh) rotate(${b.rotation}deg)`,
            width: `${b.size}px`,
            height: `${b.size}px`,
          }}
        >
          <BacteriaSVG size={b.size} />
        </div>
      ))}
    </div>
  );
}