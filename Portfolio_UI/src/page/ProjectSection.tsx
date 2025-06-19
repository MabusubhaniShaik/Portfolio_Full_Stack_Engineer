"use client";
import * as React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ZentriImg from "../assets/projectImg/Zentri.png";
import FrameFlixImg from "../assets/projectImg/FrameFlix.png";

interface SlideData {
  title: string;
  src: string;
  description: string;
  button?: string;
  url?: string;
}

const ProjectSection = () => {
  const liveProjects: SlideData[] = [
    {
      title: "Zentri",
      description: "Minimalist financial platform for budgeting and tracking.",
      src: ZentriImg,
    },
    {
      title: "FrameFlix",
      description: "IMDB-inspired movie & series app with advanced features.",
      button: "Visit Site",
      src: FrameFlixImg,
      url: "https://frame-flix.vercel.app/",
    },
  ];

  const upcomingProjects: Omit<SlideData, "button" | "url">[] = [
    {
      title: "VeloxMediQ",
      description:
        "VeloxMediQ – Healthcare Appointment Booking System that enables seamless scheduling and management of appointments.",
      src: "https://via.placeholder.com/200x120.png?text=VeloxMediQ",
    },
    {
      title: "Qylix",
      description:
        "A sleek, tech-inspired platform integrating AI-powered automation and real-time collaboration.",
      src: "https://via.placeholder.com/200x120.png?text=Qylix",
    },
    {
      title: "HarkMod",
      description:
        "Modern web-based music player with real-time shared listening and offline playback.",
      src: "https://via.placeholder.com/200x120.png?text=HarkMod",
    },
  ];

  const handleSlideClick = (url?: string) => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center py-[2%] px-[2%]">
      <div className="relative z-10 max-w-[90%] mx-auto">
        {/* Live Projects Section */}
        <div className="mb-16">
          <h1 className="text-[0.8125rem] font-bold text-white text-center mb-[5%] relative">
            <AuroraText className="text-white" colors={["#3b82f6", "#8b5cf6"]}>
              Live Projects
            </AuroraText>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-full w-full" />
          </h1>

          <div className="relative w-full h-full py-10">
            <Carousel className="w-full max-w-[70rem]">
              <CarouselContent>
                {liveProjects.map((slide, index) => (
                  <CarouselItem key={index}>
                    <Card className="w-[65rem] h-150 py-0 overflow-hidden rounded-lg">
                      <CardContent className="flex items-center justify-center p-0 relative h-full">
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${slide.src})` }}
                        >
                          <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-opacity duration-300 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100">
                            <h3 className="text-[0.75rem] font-semibold mb-2">
                              {slide.title}
                            </h3>
                            <p className="text-[0.625rem] text-center mb-4 px-2">
                              {slide.description}
                            </p>
                            {slide.url && (
                              <Button variant="link">
                                <a
                                  href={slide?.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-[1rem] font-bold text-white text-center"
                                >
                                  {slide?.button}
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Upcoming Projects Section */}
        <div>
          <h1 className="text-[0.8125rem] font-bold text-white text-center mb-[5%] relative">
            <AuroraText className="text-white" colors={["#3b82f6", "#8b5cf6"]}>
              Upcoming Projects
            </AuroraText>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-full w-full" />
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {upcomingProjects.map((slide, index) => (
              <Card
                key={index}
                className="w-[21rem] h-[12rem] bg-[#111] text-white flex flex-col justify-start rounded-lg shadow-md"
              >
                <CardContent className="p-4 overflow-auto">
                  <h3 className="text-sm font-semibold mb-2 truncate">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-gray-300">{slide.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
