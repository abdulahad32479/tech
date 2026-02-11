"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-foreground p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let’s talk.</h2>
              <p className="text-foreground/80 max-w-sm leading-relaxed">
                Have a project in mind? We’d love to hear about it.
                Send us a message and we’ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-4">
                <Mail className="text-foreground" />
                <span>info@fabtechsol.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-foreground" />
                <span>+92 347 587 9566</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-foreground" />
                <span>Sialkot, Pakistan</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-card p-10 lg:p-14">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-lg border border-border px-4 py-3 bg-background focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-lg border border-border px-4 py-3 bg-background focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-lg border border-border px-4 py-3 bg-background focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full rounded-lg border border-border px-4 py-3 bg-background focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-foreground py-4 font-semibold text-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
