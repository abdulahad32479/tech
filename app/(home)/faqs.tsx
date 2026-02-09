"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How long does it take to develop a custom software solution?",
    answer: "Project timelines vary based on complexity, but a typical MVP takes 8-12 weeks. We provide a detailed roadmap during our initial consultation to give you clear expectations."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern stacks including React, Next.js, Node.js, Python/Django, and cloud services like AWS and Azure. We choose the best technology for your specific scalability and performance needs."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your application remains secure, up-to-date, and performs optimally as your user base grows."
  },
  {
    question: "How do you ensure project quality and security?",
    answer: "We employ rigorous testing protocols, code reviews, and adhere to industry-standard security practices (OWASP) throughout the development lifecycle to ensure high-quality, secure deliverables."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both fixed-price contracts for well-defined projects and time-and-materials engagements for evolving requirements. We're transparent about costs and work to fit your budget."
  },
  {
    question: "Can you help with AI integration for existing systems?",
    answer: "Absolutely. We have extensive experience integrating AI/ML capabilities into legacy systems to enhance automation, decision-making, and user personalization."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We partner with businesses of all sizes, from early-stage startups needing an MVP to established enterprises looking for digital transformation."
  },
  {
    question: "What makes FabTechSol different from other development companies?",
    answer: "We combine technical excellence with business acumen. We don't just write code; we build solutions designed to achieve specific business outcomes and ROI."
  }
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted/60"
          >
            Everything you need to know about working with FabTechSol
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-blue-900/10 border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.1)]' 
                  : 'bg-card border-border hover:border-foreground/10'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-semibold text-lg transition-colors ${
                  activeIndex === index ? 'text-blue-400' : 'text-foreground'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-blue-500 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs
