import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dhamaledevendra1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative z-30 min-h-screen py-12 md:py-24 px-4 overflow-hidden bg-[#050505]">
      
      {/* Background Marquee */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="whitespace-nowrap flex gap-10"
        >
            <span className="text-[5rem] md:text-[15rem] font-black uppercase text-white leading-none">Get in Touch</span>
            <span className="text-[5rem] md:text-[15rem] font-black uppercase text-white leading-none">Open for Work</span>
            <span className="text-[5rem] md:text-[15rem] font-black uppercase text-white leading-none">Get in Touch</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* LEFT SIDE: Info */}
            <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Let's start a <br/>
                        <span className="text-purple-500">project together</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl max-w-md mb-8 leading-relaxed"
                    >
                        I'm currently available for freelance work and full-time positions. Have an idea? Let's build something amazing.
                    </motion.p>
                
                    <div className="flex flex-col gap-6 mb-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
                                <i className="ri-map-pin-line text-xl"></i>
                            </div>
                            <div>
                                <h4 className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Location</h4>
                                <p className="text-white text-lg">Pune, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
                                <i className="ri-mail-send-line text-xl"></i>
                            </div>
                            <div>
                                <h4 className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Email</h4>
                                <p className="text-white text-lg">dhamaledevendra1@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex gap-4"
                >
                    <Magnetic>
                        <button 
                            onClick={handleCopy}
                            className={`px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 ${copied ? "bg-green-500 text-white" : "bg-white text-black hover:bg-gray-200"}`}
                        >
                            <i className={`${copied ? "ri-check-line" : "ri-file-copy-line"}`}></i> 
                            {copied ? "Copied!" : "Copy Email Address"}
                        </button>
                    </Magnetic>
                </motion.div>
            </div>

            {/* RIGHT SIDE: Form */}
            <div className="lg:w-1/2">
                <motion.form 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const data = Object.fromEntries(formData.entries());
                        const submitBtn = e.target.querySelector('button[type="submit"]');
                        const originalBtnText = submitBtn.innerHTML;
                        
                        try {
                            submitBtn.disabled = true;
                            submitBtn.innerHTML = 'Sending... <i class="ri-loader-4-line animate-spin"></i>';
                            
                            const response = await fetch('http://localhost:5000/api/contact', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(data)
                            });
                            
                            if (response.ok) {
                                submitBtn.innerHTML = 'Sent Successfully! <i class="ri-check-line"></i>';
                                submitBtn.classList.add('bg-green-500', 'text-white');
                                e.target.reset();
                                setTimeout(() => {
                                    submitBtn.innerHTML = originalBtnText;
                                    submitBtn.classList.remove('bg-green-500', 'text-white');
                                    submitBtn.disabled = false;
                                }, 3000);
                            } else {
                                throw new Error('Failed to send');
                            }
                        } catch (error) {
                            console.error(error);
                            submitBtn.innerHTML = 'Failed. Try Again <i class="ri-error-warning-line"></i>';
                            submitBtn.classList.add('bg-red-500', 'text-white');
                            setTimeout(() => {
                                submitBtn.innerHTML = originalBtnText;
                                submitBtn.classList.remove('bg-red-500', 'text-white');
                                submitBtn.disabled = false;
                            }, 3000);
                        }
                    }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                    
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wider">Name</label>
                                <input name="name" required type="text" placeholder="Devendra Dhamale" className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-purple-500 transition-colors rounded-t-lg" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wider">Email</label>
                                <input name="email" required type="email" placeholder="devendra@example.com" className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-purple-500 transition-colors rounded-t-lg" />
                            </div>
                        </div>

                         <div>
                            <label className="block text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wider">Message</label>
                            <textarea name="message" required rows="4" placeholder="Tell me about your project..." className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-purple-500 transition-colors rounded-t-lg resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full py-5 bg-white rounded-xl text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
                            Send Message <i className="ri-send-plane-fill"></i>
                        </button>
                    </div>
                </motion.form>
            </div>
        </div>

        {/* Social Grid */}
        <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Connect with me on Socials</h4>
            
            <div className="flex flex-wrap justify-center gap-4">
                 {[
                    { name: "GitHub", icon: "ri-github-fill", link: "https://github.com/dev-end-ra", color: "hover:text-white" },
                    { name: "LinkedIn", icon: "ri-linkedin-fill", link: "https://www.linkedin.com/in/devendra-dhamale-3a729a234/", color: "hover:text-blue-400" },
                    // { name: "Twitter", icon: "ri-twitter-x-fill", link: "#", color: "hover:text-white" },
                    { name: "Instagram", icon: "ri-instagram-fill", link: "https://www.instagram.com/vect8r_05/", color: "hover:text-pink-500" }
                 ].map((social, idx) => (
                    <Magnetic key={idx}>
                         <a 
                            href={social.link}
                            className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl md:text-2xl text-gray-400 transition-all hover:bg-white/10 hover:scale-110 ${social.color}`}
                         >
                            <i className={social.icon}></i>
                         </a>
                    </Magnetic>
                 ))}
            </div>

            <div className="mt-8 text-center text-gray-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Devendra. All rights reserved.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
