"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, ArrowRight } from 'lucide-react';

const Transform = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background/Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-foreground">Ready to Transform</span>
            <br />
            <span className="text-blue-500">Your Business?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted/60"
          >
            Join 350+ successful projects. Start with AI chat or contact our team directly.
          </motion.p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Card 1: AI Chat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-card border border-border hover:border-blue-500/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="mb-6">
                <MessageSquare size={40} className="text-blue-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">Start Instant AI Chat</h3>
              <p className="text-muted/60 mb-8 leading-relaxed">
                Get answers to your questions immediately, explore our portfolio, and discuss your project needs with our AI assistant.
              </p>
              
              <button className="w-full mt-auto py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-colors shadow-lg shadow-blue-600/20">
                Chat Now <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Human Expert */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-card border border-border hover:border-foreground/10 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="mb-6">
                <Calendar size={40} className="text-blue-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">Talk to Human Expert</h3>
              <p className="text-muted/60 mb-8 leading-relaxed">
                Prefer human interaction? Fill out the form below and we'll respond within 24 hours with a detailed proposal.
              </p>
              
              <button className="w-full mt-auto py-4 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground font-bold flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-all">
                Contact Us <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Transform;
