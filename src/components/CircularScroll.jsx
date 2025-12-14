import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const CircularScroll = () => {
  const { scrollYProgress } = useScroll();
  const [rotation, setRotation] = useState(0);

  // Smooth progress for the circle fill
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Continuous rotation for the text
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center pointer-events-none mix-blend-difference"
    >
      {/* Container */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        
        {/* Rotating Text Ring */}
        <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ rotate: rotation }}
        >
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                />
                <text className="fill-white text-[9.5px] font-bold uppercase tracking-[0.15em]">
                    <textPath href="#circlePath" startOffset="0%">
                        Scroll to explore • Scroll to explore •
                    </textPath>
                </text>
            </svg>
        </motion.div>

        {/* Inner Circle Container with Vertical Fill */}
        <div className="absolute w-12 h-12 rounded-full border border-white/20 overflow-hidden flex items-center justify-center">
            {/* The Plain Color Fill (Rising Water Effect) */}
            <motion.div 
                className="absolute bottom-0 left-0 w-full bg-white"
                style={{ 
                    height: useTransform(scrollProgress, [0, 1], ["0%", "100%"])
                }}
            />
            
            {/* Arrow Icon - Mix Blend Mode ensures visibility on both backgrounds */}
            <div className="relative z-10 text-white mix-blend-exclusion">
                <i className="ri-arrow-down-line text-xl"></i>
            </div>
        </div>

      </div>
    </motion.div>
  );
};

export default CircularScroll;
