"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Code, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/src/components/navbar';
import Footer from '@/src/components/footer';
import ParticlesBackground from '@/src/components/ui/particles-background';

// Project data - in a real app, this would come from a database or API
const projectsData = [
  {
    slug: "staron-ai",
    title: "Staron AI",
    subtitle: "AI-Powered Website Builder with Intelligent Automation",
    description: "An AI-powered website builder with natural language prompts, integrated developer support, and role-based dashboards for users, developers, and admins.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "AI/ML", "React", "Next.js"],
    overview: "Staron AI revolutionizes website creation by combining artificial intelligence with intuitive design tools. Users can describe their vision in natural language, and our AI transforms those ideas into fully functional, beautiful websites. The platform features role-based dashboards for seamless collaboration between users, developers, and administrators.",
    challenge: "Traditional website builders require technical expertise and significant time investment. Non-technical users struggle with complex interfaces, while developers waste time on repetitive tasks. There was a clear need for a solution that bridges this gap using AI technology.",
    solution: "We developed Staron AI with a sophisticated natural language processing engine that understands user intent and generates appropriate website structures. The platform includes three distinct dashboards: a user-friendly interface for clients to describe their vision, a developer portal for customization and deployment, and an admin panel for system management. The AI engine learns from each interaction, continuously improving its ability to create websites that match user expectations.",
    results: "Staron AI has reduced website development time by 80% for non-technical users. The platform has successfully created over 500 websites, with a 95% user satisfaction rate. Developers report spending 60% less time on repetitive tasks, allowing them to focus on complex customizations and innovative features.",
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

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <main className="relative min-h-screen text-foreground overflow-x-hidden">
        <ParticlesBackground />
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#portfolio" className="text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container">
          {/* Back to Projects */}
          <Link href="/#portfolio">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-muted hover:text-blue-500 transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              <span className="font-bold text-sm">Back to Projects</span>
            </motion.button>
          </Link>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-1.5 rounded-lg bg-blue-600/10 text-blue-500 font-black text-xs border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-blue-400 font-semibold">
                {project.subtitle}
              </p>
              <p className="text-lg text-muted leading-relaxed">
                {project.description}
              </p>
              
              {/* View Live Project Button */}
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-600/40 hover:shadow-blue-600/60 hover:scale-105 active:scale-100"
              >
                <ExternalLink size={20} />
                View Live Project
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-muted leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Challenge</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Solution</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Results</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">
                {project.results}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
              <p className="text-muted">
                Explore the visual journey of this project through key screenshots and design highlights
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative aspect-video rounded-xl overflow-hidden border border-border hover:border-blue-500/40 transition-all duration-300 group"
                >
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-sm font-bold text-white">View {idx + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Impressed by What You See?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Let's build something amazing together. Our team is ready to bring your vision to life with the same excellence and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-600/40 flex items-center gap-2">
                <Calendar size={20} />
                Schedule Free Consultation
              </button>
              <Link href="/#portfolio">
                <button className="px-8 py-4 rounded-xl border border-border bg-foreground/5 hover:bg-foreground/10 font-bold transition-all">
                  View Case Studies
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 pt-4 text-sm text-muted/60">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                Free Consultation
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                No Obligation
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                24-48hr Response
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
