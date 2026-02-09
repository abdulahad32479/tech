"use client";
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-foreground/5 py-20 overflow-hidden relative">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-blue-500 tracking-tighter">FabTechSol</h2>
            <p className="text-sm font-bold text-foreground/40 leading-relaxed max-w-xs">
              Leading the way in digital innovation and AI integration. We build the technology that builds your business.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 hover:bg-blue-600 hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 hover:bg-blue-600 hover:text-white transition-all"><Github size={18} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm font-bold text-foreground/40 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-sm font-bold text-foreground/40 hover:text-blue-500 transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-sm font-bold text-foreground/40 hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-sm font-bold text-foreground/40 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm font-bold text-foreground/40 hover:text-blue-500 transition-colors">AI Integration</a></li>
              <li><a href="#" className="text-sm font-bold text-foreground/40 hover:text-blue-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-sm font-bold text-foreground/40 hover:text-blue-500 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-sm font-bold text-foreground/40 hover:text-blue-500 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">Subscribe</h4>
            <p className="text-sm font-bold text-foreground/40">Stay updated with our latest news and offers.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-4 py-4 pr-12 outline-none focus:border-blue-500/50 transition-all text-xs font-bold text-foreground"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all">
                <ExternalLink size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-foreground/20">
            © {currentYear} FabTechSol. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-bold text-foreground/20 hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-bold text-foreground/20 hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
