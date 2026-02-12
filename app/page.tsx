"use client";
import React from "react";
import Navbar from "@/src/components/navbar";
import Hero from "./(home)/hero";
import Solutions from "./(home)/solutions";
import Technology from "./(home)/technology";
import Strategy from "./(home)/strategy";
import Chat from "./(home)/chat";
import Projects from "./(home)/projects";
import Process from "./(home)/process";
import Trusted from "./(home)/trusted";
import Award from "./(home)/award";
import Experience from "./(home)/experience";
import Choose from "./(home)/choose";
import Faqs from "./(home)/faqs";
import Transform from "./(home)/transform";
import Contact from "./(home)/contact";
import Footer from "@/src/components/footer";
import ParticlesBackground from "@/src/components/ui/particles-background";
import AboutSection from "./(home)/about";

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />

      {/* Hero / Top */}
      <section id="home">
        <Hero />
      </section>

      <section>
        <Chat />
      </section>
      {/* About */}
      <section id="about">
        <Experience />
        <Process />
        <Choose />
      </section>
      <AboutSection />
      {/* Services */}
      <section id="services">
        <Solutions />
        <Technology />
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <Projects />
        <Trusted />
        <Award />
      </section>

      {/* FAQs */}
      <section>
        <Faqs />
      </section>

      {/* CTA */}
      <section>
        <Transform />
      </section>

      {/* Contact (LAST section) */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
