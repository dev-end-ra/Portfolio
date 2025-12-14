import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    year: "Current",
    degree: "B.Tech in CSE(Data Science)",
    school: "Vishwakarma Institute of Information Technology, Kondhwa",
    score: "CGPA: 8.92",
    description: "Specializing in Full Stack Development, Data Structures, and System Architecture."
  },
  {
    year: "2023",
    degree: "Higher Secondary (11th & 12th)",
    school: "Mahatma Gandhi Junior College of Science, Manchar",
    score: "74.83%",
    description: "Major in Physics, Chemistry, and Mathematics."
  },
  {
    year: "2021",
    degree: "Secondary Education (10th)",
    school: "Shri Wakeshwar Vidyalaya, Peth",
    score: "91.40%",
    description: "Foundation in General Sciences and Mathematics."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 px-4 relative z-20 bg-[#050505] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* Header */}
      <div className="mb-20 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
            <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2 block"
            >
                My Journey
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
                Education <span className="text-white/30">&</span> Achievements
            </motion.h2>
        </div>
        <motion.p 
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-md text-sm leading-relaxed"
        >
            A timeline of my academic milestones and competitive programming achievements that demonstrate my commitment to excellence.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Column: Timeline */}
        <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-purple-500"></span> Academic History
            </h3>

            <div className="relative space-y-12 pl-4">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent"></div>

                {education.map((edu, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-12 group"
                    >
                        {/* Timeline Node */}
                        <div className="absolute left-[11px] top-2 w-[17px] h-[17px] rounded-full border border-white/20 bg-[#050505] group-hover:border-purple-500 group-hover:bg-purple-500/20 transition-all z-10 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-purple-400 transition-colors"></div>
                        </div>

                        {/* Card */}
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                                    <p className="text-white/50 text-sm">{edu.school}</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <span className="block text-2xl font-bold text-white/90">{edu.score}</span>
                                    <span className="text-purple-400 text-xs font-mono uppercase tracking-wider">{edu.year}</span>
                                </div>
                             </div>
                             <p className="text-white/40 text-sm leading-relaxed border-t border-white/5 pt-4 mt-2">
                                {edu.description}
                             </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Right Column: Stats (Bento) */}
        <div className="lg:col-span-5">
            <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-yellow-500"></span> Highlights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sticky top-24">
                
                {/* LeetCode Card - Spans 2 Cols */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] border border-white/10 relative overflow-hidden shadow-2xl group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg viewBox="0 0 24 24" className="w-24 h-24 fill-yellow-500"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.173 5.823a1.375 1.375 0 0 0-.005 1.942l3.376 3.376-3.007 3.007a1.375 1.375 0 0 0 .005 1.942l5.349 5.385a1.375 1.375 0 0 0 1.942.005l5.385-5.349a1.375 1.375 0 0 0 .005-1.942l-3.376-3.376 3.007-3.007a1.375 1.375 0 0 0-.005-1.942L14.445.438A1.374 1.374 0 0 0 13.483 0zm-2.404 9.172l3.007-3.007 3.007 3.007-3.007 3.007-3.007-3.007z"/></svg>
                    </div>

                    <div className="relative z-10 flex items-center justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-2xl mb-4">
                                <i className="ri-code-box-line"></i>
                            </div>
                            <h4 className="text-white/60 font-medium text-sm failure tracking-wider mb-2">LeetCode</h4>
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-white">1,737</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="block text-3xl font-bold text-yellow-500 mb-1">600+</span>
                            <span className="text-white/40 text-xs uppercase tracking-wide">Problems</span>
                        </div>
                    </div>
                </motion.div>

                {/* CodeChef Card - Spans 1 Col */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="col-span-1 p-6 rounded-3xl bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] border border-white/10 relative overflow-hidden shadow-2xl group flex flex-col justify-between"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg viewBox="0 0 24 24" className="w-16 h-16 fill-orange-500"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                    </div>

                    <div className="relative z-10">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center text-xl mb-4">
                            <i className="ri-code-s-slash-line"></i>
                        </div>
                        <h4 className="text-white/60 font-medium text-xs uppercase tracking-wider mb-1">CodeChef</h4>
                        <span className="text-2xl font-bold text-white">1,352</span>
                    </div>
                </motion.div>

                {/* MHTCET Card - Spans 1 Col */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="col-span-1 p-6 rounded-3xl bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] border border-white/10 relative overflow-hidden shadow-2xl group flex flex-col justify-between"
                >
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors"></div>

                    <div className="relative z-10">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl mb-4">
                            <i className="ri-award-line"></i>
                        </div>
                        <h4 className="text-white/60 font-medium text-xs uppercase tracking-wider mb-1">MHTCET</h4>
                        <span className="text-2xl font-bold text-white">97.38</span>
                    </div>
                </motion.div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Education;


