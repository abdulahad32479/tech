"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  Globe,
  Loader2
} from 'lucide-react';

const Strategy = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const features = [
    {
      icon: <Globe size={20} className="text-blue-500" />,
      text: "Proven strategies from 350+ successful projects"
    },
    {
      icon: <TrendingUp size={20} className="text-blue-500" />,
      text: "ROI optimization techniques"
    },
    {
      icon: <Zap size={20} className="text-blue-500" />,
      text: "AI integration best practices"
    }
  ];

  return (
    <section id="strategy" className="py-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20">
              <Zap size={14} className="text-blue-500" />
              <span className="text-[12px] font-black text-blue-500 uppercase tracking-widest">Free Strategy Guide</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Download Your Free <br />
                <span className=" text-[#F5F6FF]">Digital Transformation Playbook</span>
              </h2>
              <p className="text-lg text-white/80 font-medium max-w-xl leading-relaxed">
                Get the exact framework we use to help businesses achieve 10x ROI on their software investments. Learn from 350+ successful projects.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-[15px] font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 md:p-12 rounded-[40px] bg-card border border-border shadow-2xl relative z-10 overflow-hidden">
              {/* Card Accent */}
              <div className="absolute top-0 left-0 w-full opacity-80" />
              
              <div className="flex flex-col items-center text-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                  <Download className="text-blue-500" size={28} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-foreground">Get Instant Access</h3>
                  <p className="text-sm text-white/70 font-bold">Enter your details below</p>
                </div>

                <form onSubmit={handleSubmit} className="w-full space-y-5">
                  <div className="text-left space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-white/70 pl-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Smith" 
                      className="w-full px-6 py-3 rounded-xl bg-background border border-border outline-none focus:border-blue-500/50 transition-all text-foreground font-bold shadow-inner"
                    />
                  </div>

                  <div className="text-left space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-white/70 pl-1">Business Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full px-6 py-3 rounded-xl bg-background border border-border outline-none focus:border-blue-500/50 transition-all text-foreground font-bold shadow-inner"
                    />
                  </div>

                  <div className="flex items-start gap-3 text-left pt-2">
                    <div className="relative flex items-center">
                      <input 
                        required
                        type="checkbox" 
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-border bg-background checked:bg-blue-600 checked:border-blue-600 transition-all"
                      />
                      <CheckCircle2 className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 left-0.5 pointer-events-none" />
                    </div>
                    <label className="text-[11px] font-bold text-white/70 leading-tight cursor-pointer">
                      I agree to receive emails with the strategy guide and occasional updates about software development insights. Unsubscribe anytime.
                    </label>
                  </div>

                  <button 
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-4 rounded-xl font-black text-[20px] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-blue-600/20 ${
                      isSubmitted 
                      ? 'bg-green-600 text-white shadow-green-600/20' 
                      : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? (
                      <Loader2 size={24} className="animate-spin" />
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 size={24} />
                        Check Your Email
                      </>
                    ) : (
                      <>
                        <Download size={24} />
                        Download Free Guide
                      </>
                    )}
                  </button>
                </form>

                <div className="flex items-center  text-[10px]  text-white/70">
                  <span>100% free</span>
                  <div className="w-1 h-1 rounded-full bg-muted/40" />
                  <span>No credit card required</span>
                  <div className="w-1 h-1 rounded-full bg-muted/40" />
                  <span>Instant delivery</span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/5 blur-3xl rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Strategy;
