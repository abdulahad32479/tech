"use client";
import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10 relative overflow-hidden">
      
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              FabTechSol
            </Link>
            <p className="text-muted/60 leading-relaxed max-w-xs">
              Transforming ideas into digital excellence through innovative software solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-foreground font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-foreground font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">Software Development</Link></li>
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">Web Applications</Link></li>
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">Mobile Apps</Link></li>
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">AI Integration</Link></li>
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-foreground font-bold mb-6">Connect</h3>
            <ul className="space-y-4 mb-8">
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">Get in Touch</Link></li>
              <li><Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">Support</Link></li>
            </ul>
            <div className="flex gap-4">
              <Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-muted/60 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-12 pb-12 mb-12">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h3 className="text-xl font-bold text-foreground">Stay Updated</h3>
            <p className="text-muted/60">
              Get the latest tech insights, project updates, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <div className="relative flex-1">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/40" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none text-foreground placeholder:text-muted/40 transition-colors"
                />
              </div>
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted/40">
          <p>© 2026 FabTechSol. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
