"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Send, 
  Sparkles, 
  User, 
  Bot, 
  Calendar, 
  Briefcase, 
  ArrowRight,
  X,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  Code,
  Linkedin,
  Globe,
  Upload,
  Check
} from "lucide-react";

const quickQuestions = [
  "Show me your AI integration projects",
  "What mobile apps have you developed?",
  "Tell me about your web development services",
  "How can you help with UI/UX design?"
];

const INITIAL_MESSAGE = {
  role: "assistant",
  content: "Hi! I'm your FabTechSol AI assistant. I'm here to help you learn about our projects, services, and expertise. Ask me anything!"
};

const ConsultationCard = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [timezone, setTimezone] = useState("Pakistan (PKT)");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dates = ["Tue, Feb 10", "Wed, Feb 11", "Thu, Feb 12", "Fri, Feb 13", "Mon, Feb 16"];
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-[32px] bg-card backdrop-blur-xl border border-border w-full max-w-sm mt-4 shadow-2xl flex flex-col items-center text-center gap-6"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.1)]">
          <Check className="text-green-500" size={40} strokeWidth={3} />
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl font-black text-foreground">Session Booked!</h4>
          <p className="text-[16px] font-bold text-muted px-4">
            Thank you for booking! Our team will join you on <span className="text-blue-500 font-black">{selectedDate}</span> at <span className="text-blue-500 font-black">{selectedTime}</span>.
          </p>
        </div>
        <div className="w-full h-[1px] bg-foreground/5" />
        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Check your email for details</p>
      </motion.div>
    );
  }

  return (
    <div className="p-4 md:p-6 rounded-[20px] md:rounded-[24px] bg-card border border-border w-full max-w-md mt-4 shadow-2xl relative overflow-hidden text-foreground">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
            <Calendar className="text-blue-500" size={16} />
          </div>
          <h4 className="font-bold text-foreground text-sm md:text-lg">Book Free Consultation</h4>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <p className="text-sm md:text-[16px] font-bold opacity-60 mb-3 md:mb-4 text-foreground">Select a date:</p>
            <div className="grid grid-cols-2 gap-3">
              {dates.map(date => (
                <button 
                  key={date} 
                  onClick={() => {
                    setSelectedDate(date);
                    setStep(2);
                  }}
                  className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border transition-all text-[11px] md:text-[14px] font-bold ${
                    selectedDate === date 
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                      : 'bg-foreground/[0.03] border-border text-muted hover:border-foreground/20'
                  }`}
                >
                  <Calendar size={12} className={`${selectedDate === date ? 'text-white' : 'opacity-50'} hidden sm:block`} />
                  <span className="text-center w-full">{date}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Selected Date Indicator / Back Button */}
            <button 
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-tight text-blue-500 hover:text-blue-400 mb-2"
            >
              <ArrowRight size={14} className="rotate-180" /> Change Date ({selectedDate})
            </button>

            <div>
              <p className="text-sm md:text-[16px] font-bold opacity-60 mb-3 md:mb-4 text-foreground">Select a time:</p>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {times.map(time => (
                  <button 
                    key={time} 
                    onClick={() => setSelectedTime(time)}
                    className={`flex flex-col md:flex-row items-center justify-center gap-1 px-2 md:px-3 py-2 md:py-3 rounded-lg md:rounded-xl border transition-all text-[10px] md:text-[12px] font-bold ${
                      selectedTime === time 
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                        : 'bg-foreground/[0.03] border-border text-muted hover:border-foreground/20'
                    }`}
                  >
                    <Clock size={12} className={`${selectedTime === time ? 'text-white' : 'opacity-50'} hidden md:block`} />
                    <span>{time}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm md:text-[16px] font-bold text-muted mb-3 md:mb-4">Your timezone:</p>
              <div className="relative group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                <select 
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full pl-10 md:pl-12 pr-8 md:pr-10 py-3 md:py-4 rounded-lg md:rounded-xl bg-background border border-foreground/10 outline-none focus:border-blue-500/50 transition-all text-sm md:text-[16px] font-bold text-foreground appearance-none cursor-pointer"
                >
                  <option value="Pakistan (PKT)">Pakistan (PKT)</option>
                  <option value="London (GMT)">London (GMT)</option>
                  <option value="New York (EST)">New York (EST)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 text-foreground" size={18} />
              </div>
            </div>

            <button 
              onClick={() => setIsSubmitted(true)}
              className="w-full py-3 md:py-4 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-base md:text-lg shadow-xl shadow-blue-600/30 hover:opacity-90 transition-all active:scale-95"
            >
              Continue
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 pt-6 border-t border-border space-y-4">
        <div className="flex items-center gap-3 py-2 px-4 rounded-2xl bg-blue-600/5 border border-blue-500/10">
           <Check className="text-green-500 shadow-sm" size={16} />
           <span className="text-[12px] font-bold text-foreground opacity-80">
             {selectedDate ? `${selectedDate.includes(',') ? selectedDate : selectedDate}` : "Select a date"} 
             {selectedTime ? ` at ${selectedTime}` : ""} 
             {selectedTime ? ` (${timezone})` : ""}
           </span>
        </div>
        <p className="text-[11px] font-bold text-muted text-center">30-minute free consultation with our team</p>
      </div>
    </div>
  );
};

const ApplyCard = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    { name: 'Personal Info' },
    { name: 'Experience' },
    { name: 'Documents' }
  ];

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-[32px] bg-card backdrop-blur-xl border border-border w-full max-sm mt-4 shadow-2xl flex flex-col items-center text-center gap-6"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.1)]">
          <Check className="text-green-500" size={40} strokeWidth={3} />
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl font-black text-foreground">Application Sent!</h4>
          <p className="text-[16px] font-bold text-muted px-4">
            Thank you for applying. Our hiring team will review your profile and get back to you shortly.
          </p>
        </div>
        <div className="w-full h-[1px] bg-foreground/5" />
        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Good luck on your journey</p>
      </motion.div>
    );
  }

  return (
    <div className="p-4 md:p-6 rounded-[20px] md:rounded-[24px] bg-card border border-border w-full max-w-sm mt-4 shadow-2xl relative overflow-hidden text-foreground">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
            <Briefcase className="text-blue-500" size={16} />
          </div>
          <h4 className="font-bold text-foreground text-sm md:text-lg">Quick Apply</h4>
        </div>
      </div>
      
      {/* Stepper */}
      <div className="relative flex items-center justify-between mb-8 md:mb-10 px-1 md:px-2">
        {/* Background Line */}
        <div className="absolute top-4 left-0 w-full h-[1px] bg-foreground/10 -z-10" />
        {steps.map((s, idx) => {
          const sNum = idx + 1;
          const isActive = step === sNum;
          const isCompleted = step > sNum;
          
          return (
            <div key={sNum} className="flex flex-col items-center gap-3">
              <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black transition-all ${isActive || isCompleted ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40' : 'bg-card border border-border text-muted'}`}>
                {isCompleted ? <Check size={14} /> : sNum}
              </div>
              <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-foreground underline underline-offset-4 decoration-blue-500/50' : isCompleted ? 'text-foreground/60' : 'text-muted'}`}>
                {s.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Forms based on step */}
      <div className="min-h-[220px]">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 mb-8">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-blue-500 transition-all" size={18} />
              <input type="text" placeholder="Full name *" className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 rounded-lg md:rounded-xl bg-transparent border border-border outline-none focus:border-blue-500/30 transition-all text-sm md:text-[16px] font-bold text-foreground placeholder:text-muted" />
            </div>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground opacity-40 group-focus-within:opacity-100 transition-all" size={18} />
              <input type="email" placeholder="Email address *" className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 rounded-lg md:rounded-xl bg-transparent border border-foreground/10 outline-none focus:border-blue-500/30 transition-all text-sm md:text-[16px] font-bold text-foreground placeholder:text-foreground/20" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground opacity-40 group-focus-within:opacity-100 transition-all" size={18} />
                <input type="text" placeholder="Phone" className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 rounded-lg md:rounded-xl bg-transparent border border-foreground/10 outline-none focus:border-blue-500/30 transition-all text-sm md:text-[16px] font-bold text-foreground placeholder:text-foreground/20" />
              </div>
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground opacity-40 group-focus-within:opacity-100 transition-all" size={18} />
                <input type="text" placeholder="WhatsApp" className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 rounded-lg md:rounded-xl bg-transparent border border-foreground/10 outline-none focus:border-blue-500/30 transition-all text-sm md:text-[16px] font-bold text-foreground placeholder:text-foreground/20" />
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 mb-8">
            <div className="relative group cursor-pointer">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-blue-500 transition-all" size={18} />
              <select className="w-full pl-10 md:pl-12 pr-8 md:pr-10 py-3 md:py-4 rounded-lg md:rounded-xl bg-background border border-foreground/10 outline-none focus:border-blue-500/50 transition-all text-sm md:text-[16px] font-bold text-foreground/60 appearance-none">
                <option value="">Select position *</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 text-foreground" size={18} />
            </div>
            <div className="relative group cursor-pointer">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-blue-500 transition-all" size={18} />
              <select className="w-full pl-10 md:pl-12 pr-8 md:pr-10 py-3 md:py-4 rounded-lg md:rounded-xl bg-background border border-foreground/10 outline-none focus:border-blue-500/50 transition-all text-sm md:text-[16px] font-bold text-foreground/60 appearance-none">
                <option value="">Years of experience *</option>
                <option value="junior">1-2 years</option>
                <option value="mid">3-5 years</option>
                <option value="senior">5+ years</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 text-foreground" size={18} />
            </div>
            <div className="relative group">
              <Code className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-blue-500 transition-all" size={18} />
              <input type="text" placeholder="Key skills * (e.g. React, Node.js)" className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 rounded-lg md:rounded-xl bg-transparent border border-foreground/10 outline-none focus:border-blue-500/30 transition-all text-sm md:text-[16px] font-bold text-foreground placeholder:text-foreground/20" />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 mb-8">
            <div className="relative group">
              <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-blue-500 transition-all" size={18} />
              <input type="text" placeholder="LinkedIn profile URL" className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent border border-border outline-none focus:border-blue-500/30 transition-all text-sm font-bold text-foreground placeholder:text-muted" />
            </div>
            <div className="relative group">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-40 group-focus-within:opacity-100 transition-all" size={18} />
              <input type="text" placeholder="Portfolio / GitHub URL" className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-white/30 transition-all text-sm font-bold text-white placeholder:text-white/20" />
            </div>
            
            <div className="p-6 rounded-xl border-2 border-dashed border-foreground/10 hover:border-blue-500/50 transition-all cursor-pointer bg-foreground/5 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                   <Upload className="text-blue-500" size={20} />
                </div>
                <div>
                   <h5 className="text-sm font-bold text-foreground">Upload CV</h5>
                   <p className="text-[10px] font-bold opacity-40 text-foreground">PDF or Word, max 10MB</p>
                </div>
              </div>
            </div>

            <textarea 
              placeholder="Brief cover letter (optional)" 
              className="w-full p-4 rounded-xl bg-transparent border border-foreground/10 outline-none focus:border-blue-500/30 transition-all text-[16px] font-bold text-foreground placeholder:text-foreground/20 min-h-[80px] resize-none"
            />
          </motion.div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        {step > 1 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="flex-1 py-4 rounded-xl bg-card border border-border text-foreground font-black text-md flex items-center justify-center gap-3 hover:bg-foreground/10 transition-all"
          >
            <ChevronDown className="rotate-90 text-muted" size={16} />
            Back
          </button>
        )}
        <button 
          onClick={() => step < 3 ? setStep(step + 1) : setIsSubmitted(true)}
          className="flex-[2] py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-md flex items-center justify-center gap-4 hover:opacity-90 transition-all shadow-xl shadow-blue-600/20 active:scale-95 group"
        >
          {step === 3 ? (
            <>
              <Send size={18} className="translate-y-[-1px] rotate-[-20deg]" />
              Submit
            </>
          ) : (
            <>
              Continue
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
      
      <p className="text-[10px] font-bold text-foreground opacity-40 text-center tracking-tight">
        Your information is secure and only shared with our hiring team
      </p>
    </div>
  );
};

import Navbar from "@/src/components/navbar";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Typewriter effect state
  const [placeholder, setPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedIndex, setTypedIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const questions = [
    "What's your process for building AI apps?",
    "Show me your recent web projects",
    "How can I book a free consultation?"
  ];

  useEffect(() => {
    if (isChatOpen) return;

    const handleTyping = () => {
      const currentFullText = questions[typedIndex % questions.length];
      
      if (isDeleting) {
        setPlaceholder(currentFullText.substring(0, placeholder.length - 1));
        setTypingSpeed(50);
      } else {
        setPlaceholder(currentFullText.substring(0, placeholder.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && placeholder === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && placeholder === "") {
        setIsDeleting(false);
        setTypedIndex(typedIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, typedIndex, typingSpeed, isChatOpen]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = 'hidden';
      scrollToBottom();
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [messages, isChatOpen]);

  const handleSend = (text: string, type: 'text' | 'consultation' | 'apply' = 'text') => {
    if (type === 'text' && !text.trim()) return;
    
    if (type === 'text') {
      setMessages(prev => [...prev, { role: "user", content: text }]);
    }
    
    setInputValue("");
    setIsChatOpen(true);

    // Mock AI Response
    setTimeout(() => {
      let content = "";
      if (type === 'consultation') {
        content = "Great! Let's get you scheduled for a free consultation with our team.";
      } else if (type === 'apply') {
        content = "We'd love to have you on our team! Fill out the quick application form below.";
      } else {
        content = "We've worked on several AI-focused projects to help clients leverage intelligent features. From custom website builders like Staron AI to data analytics dashboards, we ensure impact-driven results.";
      }
      
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content,
        type: type !== 'text' ? type : undefined
      }]);
    }, 800);
  };

  return (
    <div id="chat" className="w-full min-h-screen py-24 flex flex-col items-center justify-center bg-background transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* --- TEASER VIEW --- */}
      <AnimatePresence>
        {!isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="container max-w-4xl px-4 relative z-10"
          >
            <div className="p-6 md:p-10 rounded-[32px] md:rounded-[40px] bg-card border border-blue-500/20 shadow-2xl">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 md:mb-10">
                <div className="flex items-center gap-4">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center shrink-0"
                  >
                    <Sparkles className="text-blue-500" size={24} />
                  </motion.div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-foreground">Ask Our AI Assistant</h2>
                    <p className="text-xs md:text-sm opacity-50 font-bold">Get instant answers about our services</p>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black text-green-500 tracking-widest uppercase">Online 24/7</span>
                </div>
              </div>

              {/* Main Input Box */}
              <div className="relative mb-8 bg-card rounded-3xl p-6 shadow-xl border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <Search className="text-blue-500" size={24} />
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-transparent border-none outline-none text-[16px] md:text-lg font-bold text-foreground placeholder:opacity-40"
                    onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
                  />
                </div>
                <button 
                  onClick={() => handleSend(inputValue)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-blue-600/40"
                >
                  Ask AI Now
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Quick Questions */}
              <div className="space-y-4 text-foreground">
                <p className="text-sm font-black opacity-50 tracking-widest uppercase">Quick questions:</p>
                <div className="flex flex-wrap gap-3">
                  {quickQuestions.map((q) => (
                    <button 
                      key={q}
                      onClick={() => handleSend(q)}
                      className="px-6 py-3 rounded-2xl bg-card border border-border text-sm font-bold text-foreground/80 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:border-cyan-500 transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Navigation Hints */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-12 font-black text-[10px] md:text-[12px] opacity-40 uppercase tracking-widest">
              <span className="cursor-pointer hover:opacity-100 flex items-center gap-2 whitespace-nowrap">View Case Studies <ArrowRight size={14} /></span>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-foreground" />
              <span className="cursor-pointer hover:opacity-100 flex items-center gap-2 whitespace-nowrap">Read Client Reviews <ArrowRight size={14} /></span>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-foreground" />
              <span className="cursor-pointer hover:opacity-100 flex items-center gap-2 whitespace-nowrap">Explore Services <ArrowRight size={14} /></span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FULL CHAT OVERLAY --- */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            {/* Header - Fixed Height Area (accounting for fixed Navbar) */}
            <div className="shrink-0 h-24 z-[120]">
              <Navbar />
            </div>

            {/* Chat Body - Scrollable Area */}
            <div className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar pt-4 pb-12 overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
              <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: rgba(37, 99, 235, 0.2);
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: rgba(37, 99, 235, 0.4);
                }
              `}</style>
              <div className="container max-w-4xl min-h-full">
                <div className="space-y-8">
                  {messages.map((m: { role: string; content: string; type?: string }, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      {/* Avatar */}
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 border transition-all shadow-lg ${
                        m.role === 'assistant' 
                          ? 'bg-card border-border shadow-blue-500/5' 
                          : 'bg-blue-600 text-white border-blue-500/40 shadow-blue-600/20'
                      }`}>
                        {m.role === 'assistant' ? <Bot className="text-blue-500" size={20} /> : <User className="text-white" size={20} />}
                      </div>

                      {/* Content */}
                      <div className={`flex flex-col w-full max-w-[90%] md:max-w-[85%] ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`p-4 md:p-5 rounded-[20px] md:rounded-[24px] font-medium ${
                          m.role === 'assistant' 
                            ? 'bg-card border border-border text-foreground/90' 
                            : 'bg-blue-600 text-white shadow-lg shadow-blue-600/10'
                        }`}>
                          {m.content}
                        </div>
                        {m.type === 'consultation' && <ConsultationCard />}
                        {m.type === 'apply' && <ApplyCard />}
                      </div>
                    </motion.div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
              </div>
            </div>

            {/* Bottom Footer - Contained Blur Section (More Compact) */}
            <div className="shrink-0 z-[120] p-3 md:p-4 flex justify-center w-full">
              <div className="w-full max-w-5xl bg-card border border-foreground/10 rounded-[24px] md:rounded-[28px] p-4 md:p-6 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
                {/* Background Accent Glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full" />
                
                {/* Action Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <button 
                    onClick={() => handleSend("", 'consultation')}
                    className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-border bg-foreground/5 font-bold text-[11px] md:text-[13px] hover:border-blue-500/50 hover:bg-foreground/10 transition-all text-foreground/70 group"
                  >
                    <Calendar size={14} className="text-blue-500 group-hover:scale-110 transition-transform md:w-[16px] md:h-[16px]" /> 
                    Book Free Consultation
                  </button>
                  <button 
                    onClick={() => handleSend("", 'apply')}
                    className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-border bg-foreground/5 font-bold text-[11px] md:text-[13px] hover:border-blue-500/50 hover:bg-foreground/10 transition-all text-foreground/70 group"
                  >
                    <Briefcase size={14} className="text-blue-500 group-hover:scale-110 transition-transform md:w-[16px] md:h-[16px]" /> 
                    Apply for a Job
                  </button>
                </div>

                {/* Input & Send Button Section */}
                <div className="flex items-center gap-2 md:gap-4 max-w-4xl mx-auto relative z-10">
                  {/* Input Field Box */}
                  <div className="flex-1 flex items-center p-0.5 rounded-2xl bg-foreground/5 border border-foreground/5 focus-within:border-blue-500/50 transition-all shadow-inner">
                    <input 
                      type="text" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything..."
                      className="w-full bg-transparent border-none outline-none py-3 md:py-3.5 px-4 md:px-6 font-bold text-[16px] tracking-wide text-foreground placeholder:text-muted"
                      onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
                    />
                  </div>

                  {/* Separate Send Button */}
                  <button 
                    onClick={() => handleSend(inputValue)}
                    className="h-[50px] md:h-[60px] px-5 md:px-8 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-blue-600/30 flex items-center gap-2 md:gap-3 font-black text-sm md:text-lg group shrink-0"
                  >
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform md:w-[22px] md:h-[22px]" />
                    <span className="hidden sm:inline">Send</span>
                  </button>
                </div>
                
                {/* Small Disclaimer */}
                <p className="mt-3 md:mt-4 text-center text-[9px] md:text-[10px] font-bold opacity-20 tracking-[0.2em] uppercase text-foreground">
                  AI can make mistakes. Consider checking important information.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Icon (Bottom Right) */}
      {!isChatOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-10 right-10 w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transition-all z-50 group border border-white/10"
        >
          <MessageSquare size={32} />
          <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-green-500 border-[6px] border-background flex items-center justify-center shadow-lg">
             <span className="text-[10px] font-black text-white">AI</span>
          </div>
        </motion.button>
      )}

    </div>
  );
};

export default Chat;
