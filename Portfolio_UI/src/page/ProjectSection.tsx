"use client";
import { AuroraText } from "@/components/magicui/aurora-text"; // Magic UI Aurora Text for animated heading
import Carousel from "@/components/ui/carousel"; // Aceternity UI Carousel
import ZentriImg from "../assets/projectImg/Zentri.png";
import FrameFlixImg from "../assets/projectImg/FrameFlix.png";

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
      src: ZentriImg,
    },
    {
      title: "FrameFlix",
      description: "IMDB-inspired movie & series app with advanced features.",
      button: "Visit Site",
      url: "https://frame-flix.vercel.app/",
      src: FrameFlixImg,
    },
  ];

  const upcomingProjects: SlideData[] = [
    {
      title: "VeloxMediQ",
      description:
        "VeloxMediQ – Healthcare Appointment Booking System 📝 Project Overview VeloxMediQ is a modern, efficient, and intelligent Healthcare Appointment Booking System that enables seamless scheduling and management of appointments between patients and doctors. The platform ensures fast access, real-time availability, and an optimized user experience for healthcare providers and patients.",
      button: "Learn More",
      src: "https://via.placeholder.com/1200x600.png?text=EduTrack",
      url: "https://github.com/Mabusubhani786/EduTrack",
    },
    {
      title: "Qylix",
      description:
        "A sleek, tech-inspired name that sounds futuristic and innovative. Short, memorable, and unique. Perfect for a cutting-edge platform. Enhanced Role-Based Task & Communication Platform with AI & Advanced Features This next-generation platform integrates AI-powered automation, real-time collaboration, smart analytics, and intelligent insights to streamline task management, chat, ticketing, and office operations.",
      button: "Learn More",
      src: "https://via.placeholder.com/1200x600.png?text=FitSync",
      url: "https://github.com/Mabusubhani786/FitSync",
    },
    {
      title: "HarkMod",
      description:
        "HarkMod is a modern and feature-rich web-based music player that allows users to import, manage, and play their MP3 files. It includes real-time shared listening, offline playback, and an intuitive UI for seamless music experiences.",
      button: "Learn More",
      src: "https://via.placeholder.com/1200x600.png?text=FitSync",
      url: "https://github.com/Mabusubhani786/FitSync",
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
