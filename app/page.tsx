import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import ClientParticles from "@/src/components/ui/ClientParticles";
import ClientChat from "@/src/components/ui/ClientChat";

const Hero = dynamic(() => import("./(home)/hero"));
const Experience = dynamic(() => import("./(home)/experience"));
const Process = dynamic(() => import("./(home)/process"));
const Choose = dynamic(() => import("./(home)/choose"));
const AboutSection = dynamic(() => import("./(home)/about"));
const Solutions = dynamic(() => import("./(home)/solutions"));
const Technology = dynamic(() => import("./(home)/technology"));
const Projects = dynamic(() => import("./(home)/projects"));
const Trusted = dynamic(() => import("./(home)/trusted"));
const Award = dynamic(() => import("./(home)/award"));
const Strategy = dynamic(() => import("./(home)/strategy"));
const Faqs = dynamic(() => import("./(home)/faqs"));
const Transform = dynamic(() => import("./(home)/transform"));
const Contact = dynamic(() => import("./(home)/contact"));

const Home = () => {
  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      <ClientParticles />
      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* AI Chat Assistant */}
      <section id="chat">
        <ClientChat />
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

      {/* Strategy Guide */}
      <section id="strategy">
        <Strategy />
      </section>

      {/* FAQs */}
      <section id="faqs">
        <Faqs />
      </section>

      {/* CTA */}
      <section id="transform">
        <Transform />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
