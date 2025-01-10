'use client';

import React, { useState, useEffect } from 'react';

const ANIMATION_DURATION = 10; // in seconds

export default function Cat() {
  const [catClass, setCatClass] = useState('cat cat-maneki');

  useEffect(() => {
    function getRandomCatType() {
      const randomValue = Math.random();
      if (randomValue < 0.1) {
        // 10% chance
        return 'cat cat-firefox';
      } else if (randomValue < 0.1 + 0.3) {
        // 30% chance
        return 'cat cat-midnight';
      } else if (randomValue < 0.1 + 0.3 + 0.2) {
        // 20% chance
        return 'cat cat-kinako';
      } else {
        // 40% chance
        return 'cat cat-maneki';
      }
    }

    // Set the initial cat type
    setCatClass(getRandomCatType());

    // Change the cat type every ANIMATION_DURATION seconds
    const interval = setInterval(() => {
      setCatClass(getRandomCatType());
    }, ANIMATION_DURATION * 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cat-container">
      <div
        className={catClass}
        style={{
          animationDelay: '0s',
          animationDuration: `${ANIMATION_DURATION}s`,
        }}
      ></div>
    </div>
  );
}
