"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Get Your Requirements Ready",
    description: "Before starting any project you must be very clear in sense of your project requirements. Get it on paper or plan a Zoom meeting with us.",
    icon: <FileText className="text-blue-500" size={24} />,
    color: "border-blue-500/30",
    glow: "bg-blue-500/10",
    badgeColor: "bg-blue-500"
  },
  {
    number: "02",
    title: "Chat With Us",
    description: "You can chat with us through our customer care app on play store, or simply use our email and WhatsApp to schedule a call.",
    icon: <MessageSquare className="text-purple-500" size={24} />,
    color: "border-purple-500/30",
    glow: "bg-purple-500/10",
    badgeColor: "bg-purple-500"
  },
  {
    number: "03",
    title: "Get Your Project Done",
    description: "Once we analyze your software requirements, our team will provide you with a project deadline. Stay connected through our app for effective communication and regular updates.",
    icon: <Rocket className="text-emerald-500" size={24} />,
    color: "border-emerald-500/30",
    glow: "bg-emerald-500/10",
    badgeColor: "bg-emerald-500"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
          >
            Our 3-Step Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/80 font-medium"
          >
            A simple, transparent approach to bringing your project to life
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative group p-8 rounded-[32px] bg-card border ${step.color} flex flex-col items-center text-center gap-6 hover:shadow-2xl transition-all duration-500`}
            >
              {/* Icon Container with Badge */}
              <div className="relative">
                <div className={`w-20 h-20 rounded-full ${step.glow} flex items-center justify-center border ${step.color} transition-transform duration-500 group-hover:scale-110`}>
                  {step.icon}
                </div>
                {/* Step Number Badge */}
                <div className={`absolute -top-1 -right-1 w-8 h-8 ${step.badgeColor} rounded-full border-4 border-[#0d0e11] flex items-center justify-center text-[10px] font-black text-foreground`}>
                  {step.number}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-black text-foreground">
                  {step.title}
                </h4>
                <p className="text-[15px] font-bold text-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative background glow for hover */}
              <div className={`absolute inset-0 rounded-[32px] ${step.glow} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
