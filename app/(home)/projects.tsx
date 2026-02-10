"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    slug: "staron-ai",
    title: "Staron AI",
    subtitle: "AI-Powered Website Builder with Intelligent Automation",
    description: "An AI-powered website builder with natural language prompts, integrated developer support, and role-based dashboards for users, developers, and admins.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "AI/ML", "React", "Next.js"],
    overview: "Staron AI revolutionizes website creation by combining artificial intelligence with intuitive design tools. Users can describe their vision in natural language, and our AI transforms those ideas into fully functional, beautiful websites. The platform features role-based dashboards for seamless collaboration between users, developers, and administrators.",
    challenge: "Traditional website builders require technical expertise and significant time investment. Non-technical users struggle with complex interfaces, while developers waste time on repetitive tasks. There was a clear need for a solution that bridges this gap using AI technology.",
    solution: "A modular OSINT-powered system was developed to automate wallet tracing, identity tracking, voice analysis, and legal document generation through integrated AI and multi-API workflows.",
    results: "Users gain clear insights, stronger evidence, and faster pathways to reporting, recovering, and preventing online scams.",
    technologies: ["Python", "TensorFlow", "React", "Next.js", "PostgreSQL", "OpenAI API"],
    liveUrl: "https://staron.ai/",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    slug: "scam-recovery",
    title: "Scam Recovery",
    subtitle: "AI-Powered Scam Tracing Made Simple and Effective",
    description: "An AI-driven OSINT platform that helps users investigate online scams, trace digital footprints, and generate actionable evidence for recovery and legal action.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tags: ["Python/Django", "AI", "OSINT"],
    overview: "An AI-driven OSINT platform that helps users investigate online scams, trace digital footprints, and generate actionable evidence for recovery and legal action. Trace Direct is an AI-powered web application designed to help users investigate and report online scams involving payments, cryptocurrency, or impersonation. The system leverages a multi-API OSINT (Open-Source Intelligence) engine to gather, analyze, and present evidence in user-friendly formats, empowering individuals and professionals to trace scams efficiently, recover evidence, and take informed legal or preventive actions.",
    challenge: "Online scams are increasingly sophisticated, leaving victims with limited tools to trace perpetrators or recover losses. Traditional investigation methods are expensive, time-consuming, and require technical expertise that most victims don't possess.",
    solution: "We developed Trace Direct, a comprehensive OSINT platform that automates the investigation process. The system includes: Initial Case Submission for collecting scam details and evidence, Wallet Tracing using blockchain APIs (Achain, Shodan), Voice Scam Detection with AI-powered analysis, Identity Tracking through IP and device fingerprinting, and Demand Letter Generation using AI to create legal documents.",
    results: "The platform has helped hundreds of scam victims gather actionable evidence, with a 75% success rate in identifying scammer locations and digital footprints. Users report 90% faster investigation times compared to traditional methods, and the automated legal document generation has streamlined the recovery process significantly.",
    technologies: ["Python", "Django", "OpenAI", "Achain API", "Shodan", "Moralist API", "PostgreSQL"],
    liveUrl: "https://tracedirect.com/",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
    ]
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
            Our Projects
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
                <Link href={`/projects/${project.slug}`} className="w-full">
                  <button className="w-full py-3.5 rounded-xl border border-white/5 bg-foreground/5 hover:bg-foreground/10 transition-all active:scale-[0.98] text-sm font-bold flex items-center justify-center gap-3 mt-4 group/btn">
                    View Full Details
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
