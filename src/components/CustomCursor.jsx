import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Instant movement for the dot - useMotionValue tracks without physics
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for the outer ring
  const springConfigOuter = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorOuterX = useSpring(-100, springConfigOuter);
  const cursorOuterY = useSpring(-100, springConfigOuter);

  useEffect(() => {
    const moveCursor = (e) => {
      // Update dot instantly
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Update ring with spring physics
      cursorOuterX.set(e.clientX);
      cursorOuterY.set(e.clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    // Check for hoverable elements
    const handleMouseOver = (e) => {
        if (e.target.tagName === 'A' || 
            e.target.tagName === 'BUTTON' || 
            e.target.closest('a') || 
            e.target.closest('button') ||
            e.target.classList.contains('cursor-pointer') ||
            window.getComputedStyle(e.target).cursor === 'pointer'
        ) {
            setHovering(true);
        } else {
            setHovering(false);
        }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, cursorOuterX, cursorOuterY]);

  return (
    <>
      {/* Main Dot - Instant Follow */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: clicked ? 0.8 : 1,
        }}
      />
      
      {/* Trailing Ring - Smooth Follow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full z-[9998] pointer-events-none mix-blend-difference"
        style={{
          x: cursorOuterX,
          y: cursorOuterY,
          translateX: '-50%',
          translateY: '-50%',
          scale: hovering ? 1.5 : (clicked ? 0.8 : 1),
          opacity: 0.6
        }}
        transition={{
            duration: 0.15
        }}
      />
    </>
  );
};

export default CustomCursor;
