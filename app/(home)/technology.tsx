"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  BrainCircuit, 
  Palette,
  Layers,
  Globe,
  Database,
  Cpu,
  Figma,
  Wind
} from 'lucide-react';

// Icons for custom tech (can use lucide as fallbacks or custom SVG strings)
const techData = {
  "Web & App": [
    { name: "React", icon: <Globe className="text-blue-400" />, color: "text-blue-400" },
    { name: "Next.js", icon: <Layers className="text-green-500" />, color: "text-green-500" },
    { name: "TypeScript", icon: <Code2 className="text-blue-600" />, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: <Wind className="text-cyan-400" />, color: "text-cyan-400" },
    { name: "Node.js", icon: <Cpu className="text-green-600" />, color: "text-green-600" },
    { name: "PostgreSQL", icon: <Database className="text-blue-500" />, color: "text-blue-500" },
    { name: "MongoDB", icon: <Database className="text-green-400" />, color: "text-green-400" },
    { name: "AWS", icon: <Globe className="text-orange-500" />, color: "text-orange-500" }
  ],
  "Mobile": [
    { name: "React Native", icon: <Smartphone className="text-blue-400" />, color: "text-blue-400" },
    { name: "Flutter", icon: <Smartphone className="text-cyan-500" />, color: "text-cyan-500" },
    { name: "Swift", icon: <Smartphone className="text-orange-500" />, color: "text-orange-500" },
    { name: "Kotlin", icon: <Smartphone className="text-purple-500" />, color: "text-purple-500" }
  ],
  "AI/ML": [
    { name: "OpenAI", icon: <BrainCircuit className="text-purple-400" />, color: "text-purple-400" },
    { name: "Python", icon: <Code2 className="text-blue-500" />, color: "text-blue-500" },
    { name: "TensorFlow", icon: <Cpu className="text-orange-600" />, color: "text-orange-600" },
    { name: "PyTorch", icon: <Cpu className="text-red-500" />, color: "text-red-500" }
  ],
  "UI/UX": [
    { name: "Figma", icon: <Figma className="text-orange-500" />, color: "text-orange-500" },
    { name: "Adobe XD", icon: <Palette className="text-purple-600" />, color: "text-purple-600" },
    { name: "Tailwind", icon: <Wind className="text-cyan-400" />, color: "text-cyan-400" },
    { name: "Sketch", icon: <Layers className="text-yellow-500" />, color: "text-yellow-500" }
  ]
};

const Technology = () => {
  const [activeTab, setActiveTab] = useState("Web & App");
  const tabs = Object.keys(techData);

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      <div className="container px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
          >
            Our Technology <span className="text-blue-500">Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 font-medium"
          >
            We leverage advanced technologies to create scalable, high-performance solutions.
          </motion.p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-16 px-4">
          <div className="flex bg-card p-2 rounded-[20px] border border-border w-full max-w-2xl justify-between overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 md:py-4 px-1 md:px-2 rounded-[14px] font-black text-[10px] md:text-sm transition-all duration-300 relative whitespace-nowrap ${
                  activeTab === tab 
                  ? "text-background" 
                  : "text-foreground/40 hover:text-foreground/60"
                }`}>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-foreground rounded-[14px] shadow-2xl border border-foreground/5"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {techData[activeTab as keyof typeof techData].map((tech, idx) => (
              <motion.div
                key={`${activeTab}-${tech.name}`}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                transition={{ 
                  duration: 0.3, 
                  delay: idx * 0.08, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
                className="group p-8 rounded-[24px] bg-card border border-border hover:border-blue-500/30 transition-all duration-500 flex flex-col items-center justify-center gap-4 text-center hover:shadow-2xl hover:shadow-blue-600/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                  {React.cloneElement(tech.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-lg font-black text-foreground/80 group-hover:text-foreground transition-colors">
                  {tech.name}
                </h4>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Technology;
