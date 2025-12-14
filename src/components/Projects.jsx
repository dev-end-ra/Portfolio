import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import aiImg from "../assets/projects/ai_gen.png";
import ambulance from "../assets/projects/ambulance.png";
import campus from "../assets/projects/campus.png";
import spaceImg from "../assets/projects/space.png";

const projects = [
  {
    id: "p1",
    title: "AI Image Generator",
    description: "A powerful SaaS platform that uses OpenAI's DALL-E to generate creative images from text prompts. Features include community sharing, cloud storage, and high-resolution downloads.",
    tags: ["MERN", "OpenAI", "Cloudinary", "Tailwind"],
    link: "#",
    image: aiImg
  },
  {
    id: "p2",
    title: "Emergency Response",
    description: "A lifesaving platform connecting users to emergency services. Features a single-click SOS button to instantly request an ambulance and share live location.",
    tags: ["React", "Geolocation", "MongoDB", "Node.js", "Express.js"],
    link: "#",
    image: ambulance
  },
  {
    id: "p3",
    title: "Campus Doubts",
    category: "Full Stack",
    description: "A collaborative academic platform where students clarify doubts, share resources, and engage in peer-to-peer learning.",
    tags: ["React.js", "Node.js", "MongoDB", "Express"],
    link: "#",
    image: campus
  },
  {
    id: "p4",
    title: "Space Portfolio",
    description: "An immersive 3D portfolio website featuring particle systems, gravity simulations, and interactive 3D models to showcase developer skills.",
    tags: ["Three.js", "R3F", "GSAP", "Framer"],
    link: "#",
    image: spaceImg
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const containerRef = useRef(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section ref={containerRef} id="projects" className="relative z-30 min-h-screen py-16 md:py-24 px-4 flex flex-col items-center">
        
      <div className="mb-16 text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Selected Works
        </motion.h2>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6"
        />
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg"
        >
            A collection of projects where I've challenged myself to solve real problems and create impactful digital experiences. Click on a card to learn more.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
        {projects.map((project) => (
          <motion.div
            layoutId={project.id}
            key={project.id}
            onClick={() => setSelectedId(project.id)}
            whileHover={{ y: -5 }}
            className="cursor-pointer group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors"
          >
            {/* Image Section */}
            <div className="h-48 overflow-hidden relative pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60 z-10" />
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 relative z-20 pointer-events-none">
              <div className="flex justify-between items-start mb-4">
                <motion.h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{project.title}</motion.h3>
              </div>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
            <>
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedId(null)}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                />
                
                {/* Modal Container */}
                <div className="fixed inset-0 flex items-center justify-center z-[70] pointer-events-none p-4 md:p-10">
                    <motion.div 
                        layoutId={selectedId}
                        className="w-full max-w-5xl bg-[#121212] rounded-3xl overflow-hidden pointer-events-auto border border-white/10 shadow-2xl relative flex flex-col md:flex-row max-h-[80vh]"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }} 
                            className="absolute top-4 right-4 z-30 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* LEFT SIDE: Image & Tags */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto relative flex flex-col">
                            <div className="relative flex-grow h-full min-h-[200px]">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-40 z-10" />
                                <motion.img 
                                    src={selectedProject.image} 
                                    alt={selectedProject.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Technologies - Pinned to bottom of left side */}
                            <div className="p-6 bg-[#181818] border-t border-white/5">
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Info & Buttons */}
                        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto bg-[#121212]">
                            <motion.h2 className="text-3xl font-bold text-white mb-6 mt-8 md:mt-0">{selectedProject.title}</motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-300 text-base leading-relaxed mb-8 flex-grow"
                            >
                                {selectedProject.description}
                            </motion.p>

                            <div className="flex gap-4 pt-6 border-t border-white/10 mt-auto">
                                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-white text-black font-bold rounded-full text-center hover:bg-gray-200 transition-colors">
                                    Visit Live Site
                                </a>
                                <a href="#" className="flex-1 py-3 bg-white/5 text-white font-bold rounded-full text-center hover:bg-white/10 transition-colors border border-white/10">
                                    View Source
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </>
        )}
      </AnimatePresence>

      <div className="mt-20">
        <button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2 group">
          View GitHub <i className="ri-github-line text-xl group-hover:rotate-12 transition-transform"></i>
        </button>
      </div>

    </section>
  );
};

export default Projects;
