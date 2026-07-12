"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll reply within 24 hours.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-border"
        >
          {/* LEFT BLUE PANEL */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">Let’s talk.</h2>
              <p className="text-white/80 max-w-sm leading-relaxed">
                Have a project in mind? We’d love to hear about it. Send us a
                message and we’ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-4">
                <Mail className="text-white" />
                <span className="text-white font-medium">info@denvora.tech</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-white" />
                <span className="text-white font-medium">+1 (807) 707-7007</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-white" />
                <span className="text-white font-medium">Thunder Bay, Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-card p-10 lg:p-14">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-semibold text-foreground">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-lg border border-border px-4 py-3 bg-background focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none focus-ring font-medium text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-sm font-semibold text-foreground">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-lg border border-border px-4 py-3 bg-background focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none focus-ring font-medium text-foreground"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-sm font-semibold text-foreground">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-lg border border-border px-4 py-3 bg-background focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none focus-ring font-medium text-foreground"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-sm font-semibold text-foreground">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full rounded-lg border border-border px-4 py-3 bg-background focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none focus-ring font-medium text-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 font-semibold text-lg hover:opacity-90 transition disabled:opacity-50 focus-ring"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
