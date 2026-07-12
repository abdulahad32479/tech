"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Video, UserCheck, ArrowRight } from "lucide-react";

const options = [
  {
    title: "AI Text Chat",
    description: "Instant support for quick queries",
    icon: <MessageSquare className="text-blue-500" size={24} />,
    btnText: "Start Chat",
    footer: "Available 24/7"
  },
  {
    title: "AI Video Call",
    description: "Interactive face-to-face AI assistance",
    icon: <Video className="text-blue-500" size={24} />,
    btnText: "Join Call",
    footer: "Global accessibility"
  },
  {
    title: "Human Expert",
    description: "Complex problem solving with our pros",
    icon: <UserCheck className="text-blue-500" size={24} />,
    btnText: "Book Now",
    footer: "Thunder Bay, Ontario"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground"
          >
            Digital Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/80 font-medium"
          >
            Choose your preferred way to interact with Denvora Tech expertise
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-card border border-border hover:border-blue-500/30 transition-all duration-500 flex flex-col items-center text-center gap-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {opt.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-foreground">{opt.title}</h4>
                <p className="text-sm font-bold text-foreground/70">{opt.description}</p>
              </div>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-foreground font-black text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                {opt.btnText}
                <ArrowRight size={16} />
              </button>
              <div className="w-full h-[1px] bg-border/50" />
              <div className="text-[10px] font-black uppercase tracking-widest text-foreground/60">
                {opt.footer}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
