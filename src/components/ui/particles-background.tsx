"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Loaded callback
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60, // Optimized from 120 FPS
          interactivity: {
            events: {
              onClick: {
                enable: false, // Turn off click to avoid spamming DOM/canvas elements
                mode: "push",
              },
              onHover: {
                enable: false, // Disabled heavy repulse calculation on hover for performance
                mode: "repulse",
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#3b82f6",
            },
            links: {
              color: "#3b82f6",
              distance: 90,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1600,
              },
              value: 20, // Reduced density for optimized render cost
            },
            opacity: {
              value: 0.35,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
      {/* Dark overlay to dim particles */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.02)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />
    </>
  );
};

export default ParticlesBackground;
