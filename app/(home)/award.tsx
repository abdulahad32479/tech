"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Users, Award as AwardIcon, Clock, TrendingUp } from 'lucide-react';

const awards = [
  {
    icon: <Trophy className="text-blue-500" size={24} />,
    value: " 150+",
    label: "Projects Completed",
    description: "Successfully delivered across multiple industries"
  },
  {
    icon: <Star className="text-blue-500" size={24} />,
    value: "98%",
    label: "Client Satisfaction",
    description: "Consistently rated excellent by our clients"
  },
  {
    icon: <Users className="text-blue-500" size={24} />,
    value: "45+",
    label: "Repeat Clients",
    description: "Long-term partnerships built on trust"
  },
  {
    icon: <AwardIcon className="text-blue-500" size={24} />,
    value: "3+",
    label: "Years Excellence",
    description: "Proven track record since 2017"
  },
  {
    icon: <Clock className="text-blue-500" size={24} />,
    value: "100%",
    label: "On-Time Delivery",
    description: "We never miss a deadline"
  },
  {
    icon: <TrendingUp className="text-blue-500" size={24} />,
    value: "25",
    label: "Expert Team",
    description: "Skilled developers ready to help"
  }
];

const Award = () => {
  return (
    <section id="awards" className="py-24 relative overflow-hidden">
      <div className="container px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
          >
            Awards & Recognition
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 font-medium"
          >
            Recognized for excellence in software development and client service
          </motion.p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group p-8 rounded-[24px] bg-card border border-border flex flex-col items-center text-center gap-4 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="p-4 rounded-2xl bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors">
                {award.icon}
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-blue-500">
                  {award.value}
                </div>
                <div className="text-lg font-bold text-foreground">
                  {award.label}
                </div>
                <p className="text-xs font-bold text-white/60 leading-relaxed max-w-[200px]">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Award;
