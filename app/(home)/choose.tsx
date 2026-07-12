"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Average 12-week turnaround for full-stack applications with agile methodology"
  },
  {
    icon: Target,
    title: "Proven ROI",
    description: "Clients report 10x average return on investment within first year of deployment"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, GDPR compliance, and regular security audits included"
  }
];

const Choose = () => {
  return (
    <section id="choose" className="py-24 relative overflow-hidden">
      {/* Background Particles/Network Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <React.Fragment key={i}>
              <circle
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r="0.4"
                fill="#2563eb"
                className="animate-pulse"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              />
              {i < 10 && (
                <line
                  x1={Math.random() * 100}
                  y1={Math.random() * 100}
                  x2={Math.random() * 100}
                  y2={Math.random() * 100}
                  stroke="#2563eb"
                  strokeWidth="0.05"
                  strokeOpacity="0.2"
                />
              )}
            </React.Fragment>
          ))}
        </svg>
      </div>

      <div className="container px-4 relative z-10">
        {/* Headline & Sub-headline */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-foreground/60">Why Leading Companies</span>
            <br />
            <span className="text-blue-600">Choose Denvora Tech</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mx-auto"
          >
            We don't just write code – we build solutions that drive measurable business results
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center space-y-6 group"
            >
              <div className="w-16 h-16 rounded-full border border-blue-500/30 bg-blue-500/5 flex items-center justify-center relative shadow-[0_0_20px_rgba(37,99,235,0.1)] group-hover:border-blue-500/50 transition-all duration-300">
                <reason.icon size={28} className="text-blue-500" />
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="space-y-3 px-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-[14px] font-medium text-white/50 leading-relaxed md:px-2">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Choose;
