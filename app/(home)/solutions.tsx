"use client";
import React from 'react';
import { Brain, Globe, Smartphone, Code, Palette, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: "AI Integration",
    description: "Boost efficiency with intelligent automation. We build custom AI solutions that reduce costs by 40% and increase productivity.",
    icon: <Brain className="text-pink-500" size={24} />,
    color: "border-pink-500/30",
    bgColor: "bg-pink-500",
    hoverBg: "hover:bg-pink-500/5",
    features: ["Chatbots & Automation", "Predictive Analytics", "ML Models"],
    textColor: "text-pink-500"
  },
  {
    title: "Web Development",
    description: "Fast, scalable web applications that convert visitors into customers. Built for performance and optimized for SEO.",
    icon: <Globe className="text-blue-500" size={24} />,
    color: "border-blue-500/30",
    bgColor: "bg-blue-500",
    hoverBg: "hover:bg-blue-500/5",
    features: ["React & Next.js", "E-commerce", "Enterprise Apps"],
    textColor: "text-blue-500"
  },
  {
    title: "Mobile Apps",
    description: "Native iOS & Android apps that users love. We've delivered apps with 4.8+ star ratings and millions of downloads.",
    icon: <Smartphone className="text-cyan-500" size={24} />,
    color: "border-cyan-500/30",
    bgColor: "bg-cyan-500",
    hoverBg: "hover:bg-cyan-500/5",
    features: ["iOS & Android", "Cross-Platform", "App Store Optimization"],
    textColor: "text-cyan-500"
  },
  {
    title: "Custom Software",
    description: "Tailor-made solutions that solve your unique business challenges. Save 60% compared to off-the-shelf alternatives.",
    icon: <Code className="text-green-500" size={24} />,
    color: "border-green-500/30",
    bgColor: "bg-green-500",
    hoverBg: "hover:bg-green-500/5",
    features: ["SaaS Platforms", "Internal Tools", "API Development"],
    textColor: "text-green-500"
  },
  {
    title: "UI/UX Design",
    description: "Designs that delight users and drive conversions. Our redesigns have increased conversion rates by up to 200%.",
    icon: <Palette className="text-purple-500" size={24} />,
    color: "border-purple-500/30",
    bgColor: "bg-purple-500",
    hoverBg: "hover:bg-purple-500/5",
    features: ["User Research", "Prototyping", "Design Systems"],
    textColor: "text-purple-500"
  },
  {
    title: "SEO Optimization",
    description: "Rank higher, get more traffic. Our SEO strategies have helped clients achieve 300% organic traffic growth.",
    icon: <Search className="text-orange-500" size={24} />,
    color: "border-orange-500/30",
    bgColor: "bg-orange-500",
    hoverBg: "hover:bg-orange-500/5",
    features: ["Technical SEO", "Content Strategy", "Link Building"],
    textColor: "text-orange-500"
  }
];

const Solutions = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-foreground mb-6"
          >
            Solutions That Drive <span className="text-blue-500">Real Results</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 font-medium"
          >
            From AI-powered automation to award-winning apps, we deliver technology that transforms businesses
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: idx * 0.1, 
                ease: [0.23, 1, 0.32, 1] 
              }}
              className={`group rounded-[10px] bg-[#0d0e12] border ${item.color} relative overflow-hidden transition-all duration-500 ${item.hoverBg} hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col`}
            >
              {/* 5px Colored Top Padding Area */}
              <div className={`h-[5px] w-full ${item.bgColor} opacity-80`} />
              
              <div className="p-8 flex-1">
                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-[18px] bg-foreground/5 border ${item.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {item.icon}
                </div>

              <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-blue-500 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-foreground/60 font-medium mb-8 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-3 mb-10">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-sm font-bold text-foreground/40 group-hover:text-foreground/60 transition-colors">
                    <div className={`w-1.5 h-1.5 rounded-full bg-current ${item.textColor}`} />
                    {feature}
                  </div>
                ))}
              </div>

                <button className={`flex items-center gap-2 font-black text-sm uppercase tracking-widest ${item.textColor} group/btn`}>
                  Get Started 
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
