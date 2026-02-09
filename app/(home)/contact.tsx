"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Typically respond within 24 hours
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
          >
            Let's Build Something <br />
            <span className="text-blue-500">Amazing Together</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted/60 max-w-2xl mx-auto"
          >
            Ready to turn your vision into reality? Get a free project consultation and detailed proposal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column: Contact Info & Expectation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4 hover:border-blue-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={20} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Call Us</h3>
                  <p className="text-foreground mb-1">+92 347 587 9566</p>
                  <p className="text-muted/60 text-sm">Mon-Fri, 9AM-6PM PKT</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4 hover:border-blue-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={20} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Email Us</h3>
                  <p className="text-foreground mb-1">info@fabtechsol.com</p>
                  <p className="text-muted/60 text-sm">24hr response time</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4 hover:border-blue-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Visit Us</h3>
                  <p className="text-foreground mb-1">Akbar Plaza</p>
                  <p className="text-muted/60 text-sm">Near Rescue 1122 Sialkot</p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="p-8 rounded-3xl bg-blue-950/20 border border-blue-500/10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                What to Expect
              </h3>
              <ul className="space-y-4">
                {[
                  "Free 30-minute consultation",
                  "Custom project proposal",
                  "Timeline & cost estimate",
                  "No obligation to proceed"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted/80">
                    <CheckCircle size={18} className="text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 p-8 rounded-[32px] bg-card border border-border hover:border-blue-500/20 transition-colors relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground ml-1">Your Name *</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-foreground placeholder:text-muted/40 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground ml-1">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-foreground placeholder:text-muted/40 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Project Details *</label>
                <textarea 
                  rows={6}
                  placeholder="Tell us about your project goals, timeline, and budget..." 
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-foreground placeholder:text-muted/40 transition-all resize-none"
                />
                <p className="text-xs text-muted/40 ml-1">The more details you provide, the better we can help you.</p>
              </div>

              <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 group">
                Get Free Consultation
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-muted/40">
                By submitting, you agree to receive communication from FabTechSol
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
