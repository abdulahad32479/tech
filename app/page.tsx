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

const Home: React.FC = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Chat />
      <Solutions />
      <Technology />
      <Strategy />
      <Experience />
      <Projects />
      <Process />
      <Trusted />
      <Award />
      <Choose />
      <Faqs />
      <Transform />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
