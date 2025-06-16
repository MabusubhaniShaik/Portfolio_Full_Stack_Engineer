"use client";
import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text"; // Magic UI Aurora Text for animated heading
import Carousel from "@/components/ui/carousel"; // Aceternity UI Carousel

// SlideData interface for carousel slides
interface SlideData {
  title: string;
  button: string;
  src: string;
  description: string;
  url?: string;
}

const ProjectSection = () => {
  const liveProjects: SlideData[] = [
    {
      title: "Zentri",
      description: "Minimalist financial platform for budgeting and tracking.",
      button: "Learn More",
      src: "https://via.placeholder.com/1200x600.png?text=Zentri",
    },
    {
      title: "FrameFlix",
      description: "IMDB-inspired movie & series app with advanced features.",
      button: "Visit Site",
      url: "https://frame-flix.vercel.app/",
      src: "https://via.placeholder.com/1200x600.png?text=FrameFlix",
    },
    {
      title: "VeloxMediQ",
      description:
        "Hybrid doctor appointment system for online/offline consultations.",
      button: "Learn More",
      src: "https://via.placeholder.com/1200x600.png?text=VeloxMediQ",
    },
  ];

  const upcomingProjects: SlideData[] = [
    {
      title: "EduTrack",
      description:
        "A platform for tracking student progress and performance analytics.",
      button: "Learn More",
      src: "https://via.placeholder.com/1200x600.png?text=EduTrack",
    },
    {
      title: "FitSync",
      description: "A fitness app for syncing workout data with smart devices.",
      button: "Learn More",
      src: "https://via.placeholder.com/1200x600.png?text=FitSync",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center py-[2%] px-[2%]">
      <div className="relative z-10 max-w-[90%] mx-auto">
        {/* Live Projects Section */}
        <div className="mb-16">
          <h1 className="text-[0.8125rem] font-bold text-white text-center mb-[5%] relative">
            <AuroraText
              className="text-white"
              colors={["#3b82f6", "#8b5cf6"]} // Blue to purple gradient
            >
              Live Projects
            </AuroraText>
            {/* Aceternity UI Spotlight Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-full w-full" />
          </h1>

          <div className="relative w-full h-full py-10">
            <Carousel slides={liveProjects} />
          </div>
        </div>

        {/* Upcoming Projects Section */}
        <div>
          <h1 className="text-[0.8125rem] font-bold text-white text-center mb-[5%] relative">
            <AuroraText
              className="text-white"
              colors={["#3b82f6", "#8b5cf6"]} // Blue to purple gradient
            >
              Upcoming Projects
            </AuroraText>
            {/* Aceternity UI Spotlight Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-full w-full" />
          </h1>

          <div className="relative w-full h-full py-10">
            <Carousel slides={upcomingProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
