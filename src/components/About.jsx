import React, { useRef } from "react";
import me from "../assets/me.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative z-30 flex flex-col md:flex-row items-center justify-center min-h-screen py-12 md:py-20 px-4 md:px-20 gap-10 md:gap-16 overflow-hidden">
      
      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/3 max-w-[400px]"
      >
        <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
            <img src={me} alt="Devendra" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-6 -left-6 w-full h-full border border-white/10 rounded-2xl z-0"></div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">About Me</h2>
        
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>
            I'm currently pursuing my B.E. in Computer Engineering, building a strong foundation in full-stack development. I combine technical expertise with a keen eye for design to create applications that are not only functional but also intuitive and engaging.
          </p>
          <p>
            My philosophy is simple: <span className="text-white font-medium">stay curious, stay consistent, and never stop building</span>. I approach every challenge as an opportunity to learn something new and push the boundaries of what's possible on the web.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-12">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Tech Stack & Tools</h3>
            <div className="flex flex-wrap gap-3">
                {[
                    "React", "Node.js", "Python", "MongoDB", "TypeScript", 
                    "Tailwind", "Three.js", "AWS", "Figma", "Git"
                ].map((skill, index) => (
                    <span 
                        key={index}
                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
