"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO at TechVentures Inc",
    initials: "SM",
    content: "Denvora Tech transformed our e-commerce platform beyond expectations. The custom recommendations they built increased our conversion rate by 180% in just 6 months. Their team is professional, responsive, and truly understands modern technology.",
  },
  {
    name: "Dr. James Rodriguez",
    role: "Chief Technology Officer at HealthCare Solutions",
    initials: "DJR",
    content: "Working with Denvora Tech was a game-changer for our healthcare facilities. They delivered a HIPAA-compliant system that streamlined our operations and saved us countless hours. The quality of their work is outstanding.",
  },
  {
    name: "Michael Chen",
    role: "Founder at PropertyPro Realty",
    initials: "MC",
    content: "The mobile app Denvora Tech built for us has been revolutionary. The AR visualization feature is a huge hit with our clients, and we've seen a 40% increase in property viewings. Worth every penny!",
  }
];

const stats = [
  { value: "84+", label: "5-Star Reviews" },
  { value: "25+", label: "Repeat Clients" },
  { value: "100%", label: "On-Time Delivery" }
];

const Trusted = () => {
  return (
    <section id="trusted" className="py-24 relative overflow-hidden">
      {/* Background Grid/Stars effect could be added here */}
      
      <div className="container px-4">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
          >
            <Star size={12} className="text-blue-500 fill-blue-500" />
            <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">98% Client Satisfaction Rate</span>
          </motion.div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/80 font-medium"
          >
            Don't just take our word for it - hear directly from clients who've transformed their businesses with our solutions
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-[24px] bg-card border border-border flex flex-col gap-6 hover:border-blue-500/30 transition-all duration-500 group"
            >
              {/* Stars & Quote */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-blue-500 fill-blue-500" />
                ))}
              </div>

              {/* Content with Inline Quote */}
              <div className="relative">
                <Quote size={20} fill="currentColor" className="text-blue-500/20 absolute -left-6 -top-2 rotate-180" />
                <p className="text-[14px] font-bold text-foreground/80 italic leading-relaxed pl-2">
                  {t.content}
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-black text-xs shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-black text-foreground">{t.name}</div>
                  <div className="text-[11px] font-bold text-foreground/70 leading-tight">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              className="p-6 rounded-2xl bg-card/40 border border-border/50 text-center space-y-2 group hover:border-blue-500/20 transition-all"
            >
              <div className="text-4xl font-black text-blue-500 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-black text-foreground/70 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trusted;
