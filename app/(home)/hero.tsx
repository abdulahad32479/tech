"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const titles = [
    "UI/UX Design",
    "Mobile Apps",
    "AI Solutions",
    "Web Applications",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background transition-colors duration-300">
      {/* Background Glows */}
    
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Trusted Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8"
        >
          <Sparkles size={14} className="text-blue-500" />
          <span className="text-sm font-medium opacity-70">
            Trusted by <span className="text-blue-500 font-semibold">85+ repeat clients</span>
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight flex flex-col items-center gap-4 text-foreground"
        >
          <span>Transform Your Business with</span>
          <div className="h-[1.2em] relative inline-block  w-full text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={titles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute left-0 right-0 inline-block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
              >
                {titles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl opacity-60 mb-12 leading-relaxed font-medium"
        >
          From AI integration to full-stack development, we deliver 
          enterprise-grade solutions that drive real results. Join 350+ 
          successful projects.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-blue-600/20 group">
            Start Your Project
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-foreground/10 bg-foreground/5 backdrop-blur-md font-bold flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-all">
            <Calendar size={18} />
            Book Free Consultation
          </button>
        </motion.div>
      </div>

      {/* Subtle Visual Element (Floating Orb) */}
      <div className="absolute -bottom-20 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
