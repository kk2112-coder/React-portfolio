import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

/**
 * Sticky navigation bar that mimics Apple’s minimal header.
 * It hides on scroll‑down and reappears on scroll‑up.
 * Uses a tiny ``useScrollDirection`` hook defined inline.
 */
function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up');
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastYPos && currentY > 50) {
        setScrollDir('down');
      } else if (currentY < lastYPos) {
        setScrollDir('up');
      }
      setLastYPos(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastYPos]);

  return scrollDir;
}

export default function StickyNav() {
  const scrollDir = useScrollDirection();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-transform duration-300 backdrop-blur-md bg-white/10 dark:bg-black/30 ${
        scrollDir === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <Link to="/" className="text-lg font-medium text-gray-800 dark:text-gray-200">
        Krishan Kant
      </Link>
      <div className="flex items-center space-x-4">
        {/* Placeholder for future navigation links */}
        <ThemeToggle />
      </div>
    </header>
  );
}
