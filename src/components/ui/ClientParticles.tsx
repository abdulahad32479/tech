"use client";
import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(
  () => import("./particles-background"),
  { ssr: false }
);

export default ParticlesBackground;
