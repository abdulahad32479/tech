"use client";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg">
       <img
  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  alt="Large team sitting around a conference table in an office meeting"
  className="w-full h-auto object-cover rounded-3xl"
  loading="lazy"
/>

        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-foreground">
            We're a team of{" "}
            <span className="text-blue-500">innovators</span> and creators.
          </h2>

          {/* Description */}
          <p className="mb-10 max-w-xl text-foreground/80 font-medium text-sm sm:text-base leading-relaxed">
            At Denvora Tech, we believe that great software is built at the intersection
            of design and engineering. We're a distributed team of specialists dedicated
            to building the future of the web.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 mb-8">
            <div>
              <p className="text-blue-500 font-bold text-2xl sm:text-3xl">50+</p>
              <p className="text-foreground/70 text-xs sm:text-sm">Projects Delivered</p>
            </div>
            <div>
              <p className="text-blue-500 font-bold text-2xl sm:text-3xl">10+</p>
              <p className="text-foreground/70 text-xs sm:text-sm">Years Experience</p>
            </div>
          </div>

          {/* Checklist */}
          <ul className="space-y-3 max-w-md text-foreground text-sm sm:text-base">
            {[
              "Fast & Efficient Delivery",
              "Customer-Centric Approach",
              "Cutting-Edge Technology",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
