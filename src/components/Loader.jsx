import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import astronaut from "../assets/astronaut.png";
import saturn from "../assets/saturn.png";

const Loader = ({ setLoading }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 800); 
          return 100;
        }
        // Increment for ~2 seconds duration
        const increment = Math.floor(Math.random() * 5) + 1; 
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [setLoading]);

  // Generate 5 columns
  const columns = Array.from({ length: 5 });

  return (
    <div className="fixed inset-0 z-[100] flex flex-col pointer-events-none bg-[#050505]">
        {/* Shutter Columns (Background Layer) - Now we animate these out */}
        <div className="absolute inset-0 flex w-full h-full z-20 pointer-events-none">
            {columns.map((_, i) => (
                <motion.div
                    key={i}
                    className="h-full w-full bg-[#111] border-r border-[#222] relative overflow-hidden"
                    initial={{ height: "100%" }}
                    exit={{ 
                        height: "0%",
                        transition: { 
                            duration: 0.8, 
                            delay: i * 0.1,
                            ease: [0.76, 0, 0.24, 1] 
                        } 
                    }}
                >
                   {/* Texture Overlay inside columns */}
                   <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                </motion.div>
            ))}
        </div>

        {/* Content Overlay - Fades out before shutters */}
        <motion.div 
            className="absolute inset-0 z-30 flex flex-col justify-between p-8 md:p-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
             {/* HeaderMarquee */}
             <div className="w-full overflow-hidden">
                <motion.div 
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="whitespace-nowrap flex gap-10 opacity-30"
                >
                    <span className="text-xl md:text-2xl font-mono uppercase text-gray-400">Design • Development • Experience • Innovation • </span>
                    <span className="text-xl md:text-2xl font-mono uppercase text-gray-400">Design • Development • Experience • Innovation • </span>
                    <span className="text-xl md:text-2xl font-mono uppercase text-gray-400">Design • Development • Experience • Innovation • </span>
                </motion.div>
             </div>

             {/* Floating Icons/Elements */}
             <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                 {/* Saturn - Top Left */}
                 <motion.img 
                    src={saturn}
                    alt="Saturn"
                    className="absolute left-[10%] top-[15%] w-32 md:w-48 opacity-80 object-contain drop-shadow-2xl"
                    animate={{ 
                        y: [-10, 10, -10],
                        rotate: [0, 5, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 />

                 {/* Astronaut - Bottom Right */}
                 <motion.img 
                    src={astronaut}
                    alt="Astronaut"
                    className="absolute right-[15%] bottom-[20%] w-40 md:w-64 opacity-90 object-contain drop-shadow-2xl"
                    animate={{ 
                        y: [0, -30, 0],
                        x: [0, -20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 />

                 {/* Subtle Element - Center */}
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[500px] h-[500px] border border-white/5 rounded-full"
                 />
             </div>

            {/* Counter - Moved to Bottom Left to avoid overlap */}
            <div className="flex items-end justify-start w-full">
                <h1 className="text-[12rem] md:text-[20rem] font-bold font-sans italic tracking-tight text-transparent [-webkit-text-stroke:2px_#ffffff] leading-none mix-blend-difference">
                    {count}%
                </h1>
            </div>
        </motion.div>
    </div>
  );
};


export default Loader;
