"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Users, Globe, Shield, TrendingUp, DollarSign, Heart, Zap, Award, Code, Smartphone, Database, Cloud, CheckCircle, User } from 'lucide-react';
import Navbar from '@/src/components/navbar';
import Footer from '@/src/components/footer';
import ParticlesBackground from '@/src/components/ui/particles-background';

const openPositions = [
  {
    category: "Engineering",
    icon: Code,
    positions: [
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
      "Software Engineer",
      "Software Architect",
      "Technical Lead"
    ]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    positions: [
      "Mobile Application Developer",
      "AR/VR Developer",
      "Game Developer"
    ]
  },
  {
    category: "AI & Data",
    icon: Database,
    positions: [
      "AI/ML Engineer",
      "Data Engineer",
      "Business Analyst"
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    positions: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Site Reliability Engineer",
      "Database Administrator"
    ]
  },
  {
    category: "Quality & Security",
    icon: Shield,
    positions: [
      "QA Engineer",
      "Automation Tester",
      "Security Engineer"
    ]
  },
  {
    category: "Design & Management",
    icon: User,
    positions: [
      "UI/UX Designer",
      "Product Manager",
      "Project Manager",
      "Support Engineer",
      "Blockchain Developer",
      "Embedded Systems Engineer"
    ]
  }
];

const benefits = [
  { icon: DollarSign, text: "Competitive salary packages" },
  { icon: MapPin, text: "Flexible work arrangements (remote & onsite)" },
  { icon: Award, text: "Professional development budget" },
  { icon: Heart, text: "Health insurance coverage" },
  { icon: Zap, text: "Work with cutting-edge technologies" },
  { icon: Users, text: "Collaborative team environment" },
  { icon: TrendingUp, text: "Career growth opportunities" },
  { icon: DollarSign, text: "Performance-based bonuses" }
];

const positionOptions = [
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "Mobile Developer",
  "DevOps Engineer",
  "UI/UX Designer",
  "Product Manager",
  "QA Engineer",
  "Data Engineer",
  "AI/ML Engineer",
  "Other"
];

const experienceOptions = [
  "0-1 years",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years"
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    position: '',
    experience: '',
    skills: '',
    linkedin: '',
    portfolio: '',
    coverLetter: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Application submitted successfully! We will review your application within 3-5 business days.');
  };

  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            {/* We're Hiring Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 border border-border">
              <Briefcase size={16} className="text-blue-500" />
              <span className="text-sm font-bold">We're Hiring</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build the Future<br />
              <span className="text-blue-500">With Us</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Join a team of 75+ passionate engineers and designers building cutting-edge solutions for businesses worldwide. Since 2017, we've delivered 350+ successful projects.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin size={20} className="text-blue-500" />
                <span className="font-semibold">Remote & Onsite</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Users size={20} className="text-blue-500" />
                <span className="font-semibold">75+ Team Members</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Globe size={20} className="text-blue-500" />
                <span className="font-semibold">Global Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We're looking for mid-level and senior professionals across these departments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((dept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <dept.icon size={20} className="text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">{dept.category}</h3>
                </div>
                <ul className="space-y-3">
                  {dept.positions.map((position, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-foreground/70">
                      <span className="text-blue-500 mt-1">›</span>
                      <span className="text-sm">{position}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Join FabTechSol?</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We invest in our people and create an environment where you can do your best work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-blue-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon size={20} className="text-blue-500" />
                </div>
                <span className="font-semibold">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Apply Now</h2>
              <p className="text-foreground/80">
                Fill out the form below to apply. We'll review your application within 3-5 business days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground placeholder:text-foreground/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground placeholder:text-foreground/60"
                  />
                </div>
              </div>

              {/* Phone and WhatsApp */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground placeholder:text-foreground/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground placeholder:text-foreground/60"
                  />
                </div>
              </div>

              {/* Position and Experience */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Position <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground appearance-none cursor-pointer"
                  >
                    <option value="">Select a position</option>
                    {positionOptions.map((pos, idx) => (
                      <option key={idx} value={pos}>{pos}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground appearance-none cursor-pointer"
                  >
                    <option value="">Select experience</option>
                    {experienceOptions.map((exp, idx) => (
                      <option key={idx} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Key Skills */}
              <div>
                <label className="block text-sm font-bold mb-2">
                    Key Skills <span className="text-red-500">*</span> <span className="text-foreground/60 font-normal">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="React, TypeScript, Node.js, AWS"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground placeholder:text-foreground/60"
                />
              </div>

              {/* LinkedIn and Portfolio */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Portfolio / GitHub</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://github.com/..."
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground placeholder:text-white/60"
                  />
                </div>
              </div>

              {/* Upload CV */}
              <div>
                <label className="block text-sm font-bold mb-2">
                    Upload CV <span className="text-foreground/60 font-normal">(PDF or Word, max 10MB)</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-background border border-border hover:border-blue-500 cursor-pointer transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-sm font-semibold">Choose File</span>
                  </label>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-sm font-bold mb-2">Cover Letter / Additional Notes</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Tell us why you'd be a great fit for this role..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 outline-none transition-colors text-foreground placeholder:text-foreground/60 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-foreground font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-blue-600/40 active:scale-[0.98]"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
