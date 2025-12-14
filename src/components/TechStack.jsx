import React from "react";
import LogoLoop from '../externals/LogoLoop';
import { 
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiThreedotjs,
    SiNodedotjs, SiMongodb, SiPostgresql, SiFirebase, SiSupabase, SiPython,
    SiGit, SiDocker, SiAmazonwebservices, SiFigma, SiVercel, SiPostman
} from 'react-icons/si';

const TechStack = () => {
    // Row 1: Frontend
  const frontendLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
    { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
  ];

  // Row 2: Backend & DB
  const backendLogos = [
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  ];

  // Row 3: Tools & DevOps
  const toolLogos = [
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  ];

  return (
    <section className="relative z-30 py-24 bg-[#050505] overflow-hidden flex flex-col items-center justify-center gap-10">
      
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-white mb-2">Technologies</h3>
        <p className="text-gray-500 uppercase tracking-widest text-sm">The tools I use to build</p>
      </div>

      <div className="w-full relative z-10 flex flex-col gap-12">
        {/* Row 1: Frontend (Left) */}
        <div className="w-full hover:rotate-0 transition-transform duration-500">
           <div className="flex justify-center mb-4">
             <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase bg-white/5 px-4 py-1 rounded-full border border-white/5 backdrop-blur-sm">Frontend Tech</span>
           </div>
           <LogoLoop
             style={{ color: "#ffffff" }}
             logos={frontendLogos}
             speed={40}
             direction="left"
             logoHeight={48}
             gap={80}
             pauseOnHover
             scaleOnHover
             fadeOut={true}
           />
        </div>

        {/* Row 2: Backend (Right) */}
        <div className="w-full hover:rotate-0 transition-transform duration-500">
           <div className="flex justify-center mb-4">
             <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase bg-white/5 px-4 py-1 rounded-full border border-white/5 backdrop-blur-sm">Backend & Database</span>
           </div>
           <LogoLoop
             style={{ color: "#aaaaaa" }}
             logos={backendLogos}
             speed={35}
             direction="right"
             logoHeight={40}
             gap={80}
             pauseOnHover
             scaleOnHover
             fadeOut={true}
           />
        </div>

        {/* Row 3: Tools (Left) */}
        <div className="w-full  hover:rotate-0 transition-transform duration-500">
           <div className="flex justify-center mb-4">
             <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase bg-white/5 px-4 py-1 rounded-full border border-white/5 backdrop-blur-sm">Tools & Platform</span>
           </div>
           <LogoLoop
             style={{ color: "#888888" }}
             logos={toolLogos}
             speed={45}
             direction="left"
             logoHeight={32}
             gap={80}
             pauseOnHover
             scaleOnHover
             fadeOut={true}
           />
        </div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

    </section>
  );
};

export default TechStack;
