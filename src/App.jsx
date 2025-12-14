import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Lenis from 'lenis';

// Components
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import CircularScroll from "./components/CircularScroll";
import Loader from "./components/Loader";

import { motion, AnimatePresence } from "framer-motion";

import VelocityScroll from "./components/VelocityScroll";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-[#050505] overflow-x-hidden">
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>

      {/* Main Content - Always rendered behind loader for reveal effect */}
      <div className="relative z-0">
            {/* Scroll Progress Bar - Replaced with CircularScroll */}
            <CircularScroll />

            {/* Subtle Grid Background */}
            <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="fixed inset-0 z-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 pointer-events-none"></div>

            <CustomCursor />
            <Navbar />

            <Hero />
            <VelocityScroll />
            <About />
            <div id="education">
                <Education />
            </div>
            <div id="projects">
                <TechStack />
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
      </div>
    </div>
  );
};

export default App;