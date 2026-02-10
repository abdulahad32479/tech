"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    slug: "staron-ai",
    title: "Staron AI",
    description:
      "AI-powered website builder using natural language prompts with role-based dashboards.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    tags: ["AI", "Next.js", "Python"]
  },
  {
    slug: "scam-recovery",
    title: "Scam Recovery",
    description:
      "AI-driven OSINT platform for tracing scams and generating legal evidence.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
    tags: ["OSINT", "AI", "Django"]
  },
  {
    slug: "fintech-dashboard",
    title: "FinTech Dashboard",
    description:
      "Real-time financial analytics dashboard with secure data pipelines.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=800",
    tags: ["FinTech", "Next.js"]
  },
  {
    slug: "health-ai",
    title: "Health AI",
    description:
      "AI-powered diagnostics and patient monitoring platform.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=800",
    tags: ["Healthcare", "AI"]
  },
  {
    slug: "ecommerce-pro",
    title: "E-Commerce Pro",
    description:
      "Scalable ecommerce system with payments, inventory & analytics.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
    tags: ["Ecommerce", "Stripe"]
  },
  {
    slug: "edtech-platform",
    title: "EdTech Platform",
    description:
      "Online learning platform with LMS and AI-powered assessments.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    tags: ["EdTech", "LMS"]
  },
  {
    slug: "crm-system",
    title: "CRM System",
    description:
      "Custom CRM for sales automation and customer engagement.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=800",
    tags: ["CRM", "SaaS"]
  },
  {
    slug: "logistics-ai",
    title: "Logistics AI",
    description:
      "AI-based logistics tracking and route optimization platform.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    tags: ["Logistics", "AI"]
  },
  {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    description:
      "No-code portfolio builder for creators and developers.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    tags: ["No-Code", "Web"]
  },
  {
    slug: "saas-analytics",
    title: "SaaS Analytics",
    description:
      "Advanced analytics platform for SaaS founders.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    tags: ["SaaS", "Analytics"]
  }
];

/* ================= COMPONENT ================= */

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const visibleProjects = projects.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, projects.length));
  };

  return (
    <section id="portfolio" className="py-24 text-foreground">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
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
            Explore our portfolio of innovative digital solutions
          </motion.p>
        </div>

        {/* PROJECT GRID */}
        <div className="flex flex-wrap justify-between gap-y-8">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="w-full md:w-[48%] rounded-[20px] bg-card border border-border 
              overflow-hidden hover:shadow-xl transition group"
            >
              {/* IMAGE */}
              <div className="aspect-[16/7] overflow-hidden border-b border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover 
                  grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-5">
                <h3 className="text-2xl font-black">
                  {project.title}
                </h3>

                <p className="text-sm font-semibold text-muted">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-bold
                      bg-sky-100 text-sky-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <Link href={`/projects/${project.slug}`}>
                  <button
                    className="mt-4 w-full py-3 rounded-xl 
                    bg-sky-500 text-white font-bold
                    hover:bg-sky-600 transition 
                    flex items-center justify-center gap-2"
                  >
                    View Full Details
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleViewMore}
              className="px-12 py-4 rounded-full 
              bg-gradient-to-r from-sky-500 to-teal-400
              text-white font-bold text-lg
              hover:opacity-90 transition shadow-lg"
            >
              View More Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
