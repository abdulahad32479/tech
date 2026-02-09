"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Staron AI",
    description: "An AI-powered website builder with natural language prompts, integrated developer support, and role-based dashboards for users, developers, and admins.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "AI/ML"]
  },
  {
    title: "Scam Recovery",
    description: "An AI-driven OSINT platform that helps users investigate online scams, trace digital footprints, and generate actionable evidence for recovery and legal action.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tags: ["Python/Django"]
  }
];

const Projects = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden text-foreground">
      <div className="container ">
        
        {/* Centered Section Header */}
        <div className="text-center  mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted font-medium"
          >
            Explore our portfolio of innovative solutions across AI, web, mobile, and <br className="hidden md:block" /> enterprise software
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-between gap-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-[20px] bg-card border border-border overflow-hidden flex flex-col hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/5 w-full md:w-[48%]"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/7] overflow-hidden border-b border-border">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between bg-card/40">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-[15px] font-bold text-muted leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-4 py-1.5 rounded-lg bg-blue-600/10 text-blue-500 font-black text-xs border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Foot Button */}
                <button className="w-full py-3.5 rounded-xl border border-white/5 bg-foreground/5 hover:bg-foreground/10 transition-all active:scale-[0.98] text-sm font-bold flex items-center justify-center gap-3 mt-4 group/btn">
                  View Full Details
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
