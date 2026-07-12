"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import useThemeStore from "@/src/state/theme-store";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about", scroll: true },
    { name: "Services", id: "services", scroll: true },
    { name: "Portfolio", id: "portfolio", scroll: true },
    { name: "Careers", id: "careers", scroll: false, href: "/careers" },
    { name: "Contact", id: "contact", scroll: true },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  // Sync scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/5 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="focus-ring rounded-lg">
          <Image
            src={logo}
            alt="Denvora Tech Logo"
            className="w-28 h-auto cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-2.5">
          {navLinks.map((link) =>
            link.scroll ? (
              <button
                key={link.id}
                className="relative group cursor-pointer text-left focus-ring rounded-md"
                onClick={() => scrollToSection(link.id)}
              >
                <span className="text-[12px] font-bold transition-all opacity-60 group-hover:opacity-100 group-hover:text-blue-500">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ) : (
              <Link
                key={link.id}
                href={link.href || "#"}
                className="relative group cursor-pointer focus-ring rounded-md"
              >
                <span className="text-[12px] font-bold transition-all opacity-60 group-hover:opacity-100 group-hover:text-blue-500">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-white/10 transition-all active:scale-95 shadow-sm focus-ring"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={18} className="text-foreground" />
            ) : (
              <Moon size={18} className="text-foreground" />
            )}
          </button>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-[5px] border border-border font-bold text-[13px] hover:bg-foreground hover:text-background transition-all focus-ring">
              Book Consultation
            </button>
            <button className="px-5 py-2.5 border border-blue-500 rounded-[5px] bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-[13px] text-white hover:opacity-90 transition-all shadow-lg shadow-blue-600/40 focus-ring">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-xl hover:bg-foreground/10 transition-all border border-foreground/5 bg-foreground/5 focus-ring"
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
            className="lg:hidden overflow-hidden bg-card border-b border-foreground/10"
          >
            <div className="container py-6 md:py-8 space-y-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) =>
                  link.scroll ? (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-left px-4 py-3 text-base md:text-lg font-bold bg-foreground/5 hover:bg-blue-500/10 rounded-lg border border-transparent hover:border-blue-500/20 opacity-80 hover:opacity-100 hover:text-blue-500 transition-all focus-ring"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={link.id}
                      href={link.href || "#"}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-left px-4 py-3 text-base md:text-lg font-bold bg-foreground/5 hover:bg-blue-500/10 rounded-lg border border-transparent hover:border-blue-500/20 opacity-80 hover:opacity-100 hover:text-blue-500 transition-all focus-ring block"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <button className="w-full py-3 md:py-4 rounded-lg md:rounded-xl border border-foreground/10 font-bold text-sm uppercase tracking-widest bg-foreground/5 hover:bg-foreground/10 transition-all focus-ring">
                  Book Consultation
                </button>
                <button className="w-full py-3 md:py-4 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-blue-600/40 hover:opacity-90 transition-all focus-ring">
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
