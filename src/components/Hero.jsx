import hero_bg from "../assets/hero-bg.svg";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative z-30 flex flex-col md:flex-row items-center justify-between min-h-screen px-4 md:px-20 pt-20 overflow-hidden">
      
      {/* Content Side */}
      <div className="md:w-1/2 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"> 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text font-semibold tracking-wide text-sm">
              AVAILABLE FOR HIRE
            </span>
          </div>
          
          <h1 className="text-white text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Mastering Algorithms <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 bg-300% animate-gradient">
              & Web Development
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            I'm Devendra, a Full-Stack Developer with a strong foundation in Data Structures & Algorithms, creating accessible, human-centered applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Magnetic>
                <a href="#projects" className='px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all inline-flex justify-center items-center gap-2'>
                View Projects <i className="ri-arrow-right-line"></i>
                </a>
            </Magnetic>
            <Magnetic>
                <a href="#contact" className='px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all inline-flex justify-center items-center gap-2'>
                Contact Me
                </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Visual Side */}
      <div className="md:w-1/2 h-full flex items-center justify-center relative mt-10 md:mt-0 z-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative"
        >
            <div className="w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/30 to-cyan-600/30 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <motion.img 
                src={hero_bg} 
                className="relative z-10 max-h-[500px] drop-shadow-2xl" 
                alt="Hero Visual"
                animate={{ y: [-15, 15, -15] }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 6, 
                    ease: "easeInOut" 
                }}
            />
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
