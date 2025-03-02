'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function AsciiCat() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [frame, setFrame] = useState(0);
  const [bouncing, setBouncing] = useState(false);
  const bouncingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  
  // Will be calculated in useEffect based on container width
  const [maxWidth, setMaxWidth] = useState(800);
  const [catWidth, setCatWidth] = useState(60); // Will be measured precisely
  
  // Walking animation frames
  const catFrames = [
    [
      " /\\_/\\ ",
      "( o.o )",
      " > ^ < ",
      "  / \\  "
    ],
    [
      " /\\_/\\ ",
      "( o.o )",
      " > ^ < ",
      "  \\ /  "
    ],
    [
      " /\\_/\\ ",
      "( o.o )",
      " > ^ < ",
      "  | |  "
    ],
    [
      " /\\_/\\ ",
      "( o.o )",
      " > ^ < ",
      "  / \\  "
    ],
    [
      " /\\_/\\ ",
      "( o.o )",
      " > ^ < ",
      "  \\ /  "
    ],
    [
      " /\\_/\\ ",
      "( o.o )",
      " > ^ < ",
      "  | |  "
    ],
    [
      " /\\_/\\ ",
      "( o.o )",
      " > ^ < ",
      "  / \\  "
    ],
    [
      " /\\_/\\ ",
      "( ^.^ )",
      " > ^ < ",
      "  \\ /  "
    ]
  ];
  
  // Bounce animation frames
  const bounceFrames = [
    [
      " /\\_/\\ ",
      "( o.o )",
      " > ^ < ",
      "   ^   "
    ],
    [
      " /\\_/\\ ",
      "(!o.o!)",
      " > ^ < ",
      "  / \\  "
    ]
  ];

  useEffect(() => {
    // Calculate dimensions on mount and resize
    const calculateDimensions = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.parentElement?.clientWidth || window.innerWidth;
        setMaxWidth(parentWidth);
        
        // Measure the actual width of the cat element
        if (catRef.current) {
          const actualCatWidth = catRef.current.offsetWidth;
          setCatWidth(actualCatWidth);
          
          // Adjust position if needed
          setPosition(prev => Math.min(prev, parentWidth - actualCatWidth));
        }
      }
    };

    // Small delay to ensure the cat element is rendered
    setTimeout(calculateDimensions, 50);
    
    const handleResize = () => {
      calculateDimensions();
    };

    window.addEventListener('resize', handleResize);
    
    // Function to start bounce animation
    const startBounce = () => {
      if (bouncingRef.current) return;
      
      bouncingRef.current = true;
      setBouncing(true);
      
      // Reset after bounce animation
      setTimeout(() => {
        bouncingRef.current = false;
        setBouncing(false);
      }, 450);
    };
    
    const interval = setInterval(() => {
      if (bouncingRef.current) {
        // During bounce, just animate bounce frames
        setFrame(prev => prev === 0 ? 1 : 0);
        return;
      }
      
      // Get the actual current dimensions
      const actualCatWidth = catRef.current?.offsetWidth || catWidth;
      const currentMaxWidth = containerRef.current?.parentElement?.clientWidth || maxWidth;
      
      setPosition(prev => {
        // Calculate new position - increased speed from 8 to 15
        const newPos = prev + (direction * 15);
        
        // Check boundaries and change direction if needed
        // Use actual measured width with a small buffer
        const rightBoundary = currentMaxWidth - actualCatWidth - 5;
        
        if (newPos >= rightBoundary) {
          setDirection(-1);
          startBounce();
          return rightBoundary;
        } else if (newPos <= 0) {
          setDirection(1);
          startBounce();
          return 0;
        }
        
        return newPos;
      });
      
      // Update animation frame
      setFrame(prev => (prev + 1) % catFrames.length);
    }, 100); // Reduced interval from 150ms to 100ms

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, maxWidth, catWidth, catFrames.length]);

  // Determine which animation frames to use
  const currentFrames = bouncing ? bounceFrames : catFrames;
  const frameIndex = bouncing ? (frame % 2) : frame;
  
  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '70px',
        overflow: 'hidden',
        marginBottom: '0px'
      }}
    >
      <div 
        ref={catRef}
        style={{
          position: 'absolute',
          left: `${position}px`,
          fontFamily: 'monospace',
          whiteSpace: 'pre',
          fontSize: '16px',
          lineHeight: '1.1',
          transition: bouncing ? 'left 0.05s ease-in-out, top 0.15s ease-in-out' : 'left 0.1s linear',
          transform: direction === -1 ? 'scaleX(-1)' : 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: bouncing ? '#EF4444' : (direction === 1 ? '#D97706' : '#3B82F6'),
          textShadow: '0 0 2px rgba(0,0,0,0.3)',
          bottom: '0'
        }}
      >
        {currentFrames[frameIndex].map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}