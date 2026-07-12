import type { Metadata } from "next";
import React from "react";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import ClientParticles from "@/src/components/ui/ClientParticles";
import CareersContent from "@/src/features/careers/CareersContent";

export const metadata: Metadata = {
  title: "Careers — Join the Team at Denvora Tech",
  description:
    "Explore open opportunities in Engineering, Mobile apps, Design, and Cloud. Build the future with our global team.",
  openGraph: {
    title: "Careers — Join the Team at Denvora Tech",
    description:
      "Explore open positions and join a team of 75+ passionate engineers and designers building cutting-edge digital products.",
    url: "https://denvora.tech/careers",
  },
};

export default function CareersPage() {
  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      <ClientParticles />
      <Navbar />
      <CareersContent />
      <Footer />
    </main>
  );
}
