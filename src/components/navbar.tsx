"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle("light-mode");
  };

  const navLinks = [
    { name: "Portfolio", id: "portfolio" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Careers", id: "careers" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Sync state with body class if needed on mount
  useEffect(() => {
    setIsLightMode(document.body.classList.contains("light-mode"));
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
      hasScrolled 
        ? "backdrop-blur-md bg-background/80 border-b border-foreground/5" 
        : "bg-transparent border-transparent"
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-black text-blue-500 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            FabTechSol
          </h1>
        </div>

        {/* Desktop Navigation Links (for >= lg) */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-2.5">
          {navLinks.map((link) => (
            <div key={link.id} className="relative group cursor-pointer" onClick={() => scrollToSection(link.id)}>
              <h5 className="text-[12px] font-bold transition-all opacity-60 group-hover:opacity-100 group-hover:text-blue-500">
                {link.name}
              </h5>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle - Visible on all screens */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-foreground/10 transition-all active:scale-95 shadow-sm  hover:bg-white/30"
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon size={18} className="text-foreground" /> : <Sun size={18} className="text-foreground" />}
          </button>

          {/* Desktop Buttons (for >= lg) */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-[5px] border border-border font-bold text-[13px] hover:bg-foreground hover:text-background transition-all">
              Book Consultation
            </button>
            <button className="px-5 py-2.5 border border-blue-500 rounded-[5px] bg-blue-600 font-bold text-[13px] text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/40">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle (for < lg) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-foreground/10 transition-all border border-foreground/5 bg-foreground/5"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-foreground/10"
          >
            <div className="container py-8 space-y-6">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => scrollToSection(link.id)}
                    className="text-left py-2 text-lg font-bold border-b border-foreground/5 opacity-80 hover:opacity-100 hover:text-blue-500 transition-all"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <button className="w-full py-4 rounded-xl border border-foreground/10 font-black text-sm uppercase tracking-widest bg-foreground/5">
                  Book Consultation
                </button>
                <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-blue-600/40">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
