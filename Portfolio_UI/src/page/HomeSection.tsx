import React from "react";
// import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/magicui/meteors";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const HomeSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center overflow-hidden">
      {/* Starry Background */}
      {[...Array(150)].map((_, i) => (
        <span
          key={`star-${i}`}
          className="absolute rounded-full bg-white animate-twinkle shadow-white/20"
          style={{
            width: `${Math.random() * 2 + 1.5}px`,
            height: `${Math.random() * 2 + 1.5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: `${Math.random() * 0.6 + 0.2}`,
            animationDelay: `${Math.random() * 6}s`,
            boxShadow: `0 0 ${Math.random() * 6 + 2}px white`,
          }}
        />
      ))}

      {/* Magic UI Meteors */}
      <Meteors number={10} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="w-100% text-4xl md:text-8xl font-bold text-gap-4">
          <span>Hi, I’m</span>

          <div className="h-[8rem] flex items-center justify-center">
            <TextHoverEffect text="Mabusubhani" />
          </div>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#ffffff] max-w-2xl mx-[0.5rem]">
          A Full Stack Developer with 2+ years of experience in building
          scalable, high-performance web applications using React, Vue, Node.js,
          and PostgreSQL. Passionate about crafting modern UIs, real-time
          features, and robust backend systems.
        </p>

        {/* <div className="mt-8">
          <Button className="bg-transparent border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-[#0d0d0d] transition-all duration-300 px-8 py-3 text-lg font-semibold  shadow-lg shadow-[#00e6e6]/50 hover:shadow-[#00e6e6]/80 animate-pulse">
            View Projects
          </Button>
        </div> */}
      </div>

      {/* Minimal twinkle keyframes only */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 0.2; }
          }
          .animate-twinkle {
            animation: twinkle 3s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default HomeSection;
