import React, { useState, useEffect } from "react";
import dp from "../assets/image.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-14 flex items-center justify-between px-2 pl-4 z-50 transition-all duration-300 rounded-full ${
        scrolled ? "bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20" : "bg-transparent border border-transparent"
      }`}
    >
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <motion.img 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="h-8 w-8 rounded-full object-cover border border-white/10" 
            src={dp} 
            alt="profile" 
        />
        <span className="font-semibold text-white text-sm tracking-wide">Devendra</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-6">
        {["Home", "Projects", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="group relative h-5 overflow-hidden font-medium text-sm"
          >
            <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
              <span className="h-5 flex items-center text-gray-400 group-hover:text-white transition-colors">{item}</span>
              <span className="h-5 flex items-center text-white font-semibold">{item}</span>
            </span>
          </a>
        ))}
      </div>

      {/* CTA & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="group relative bg-white text-black text-xs font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-white/5 flex items-center h-8"
        >
            <div className="relative h-4 overflow-hidden">
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                    <span className="h-4 flex items-center justify-center">Let's Talk</span>
                    <span className="h-4 flex items-center justify-center">Let's Talk</span>
                </span>
            </div>
        </motion.a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setHoveredTab(!hoveredTab)} 
          className="md:hidden text-white text-xl"
        >
          <i className={`${hoveredTab ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {hoveredTab && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 left-0 right-0 p-4 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-xl flex flex-col gap-2 md:hidden"
          >
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setHoveredTab(false)}
                className="block p-3 text-center text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
