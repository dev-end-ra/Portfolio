import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { Zap } from "lucide-react";

// Utility to wrap value between min and max
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Create a skew effect based on velocity
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-15, 15]);
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap leading-[0.8]">
      <motion.div 
        className="font-['Space_Grotesk'] font-[1000] uppercase text-5xl md:text-[10rem] flex whitespace-nowrap items-center flex-nowrap tracking-tighter text-gray-500"
        style={{ x, skew: skewVelocity }}
      >
        <span className="flex items-center mr-6 md:mr-32">{children} </span>
        <span className="flex items-center mr-6 md:mr-32">{children} </span>
        <span className="flex items-center mr-6 md:mr-32">{children} </span>
        <span className="flex items-center mr-6 md:mr-32">{children} </span>
      </motion.div>
    </div>
  );
};

const VelocityScroll = () => {
  return (
    <section className="relative w-full py-6 md:py-10 mt-10 md:mt-20 bg-white/5 border-y border-white/10 text-gray-500 overflow-hidden backdrop-blur-sm">
      <div className="relative mix-blend-overlay">
         <ParallaxText baseVelocity={0.5}>
            FULL STACK DEV <span className="text-yellow-400 mx-6 md:mx-20"><Zap size="0.8em" fill="#a39f44ff" /></span> 
            PROBLEM SOLVER <span className="text-yellow-400 mx-6 md:mx-20"><Zap size="0.8em" fill="#a39f44ff" /></span> 
            INNOVATIVE CODER <span className="text-yellow-400 mx-6 md:mx-20"><Zap size="0.8em" fill="#a39f44ff" /></span>
         </ParallaxText>
         <ParallaxText baseVelocity={-0.5}>
            DSA EXPERT <span className="text-yellow-400 mx-6 md:mx-20"><Zap size="0.8em" fill="#a39f44ff" /></span> 
            TECH ENTHUSIAST <span className="text-yellow-400 mx-6 md:mx-20"><Zap size="0.8em" fill="#a39f44ff" /></span> 
            BUILDING FUTURE <span className="text-yellow-400 mx-6 md:mx-20"><Zap size="0.8em" fill="#a39f44ff" /></span>
         </ParallaxText>
      </div>
    </section>
  );
};

export default VelocityScroll;
