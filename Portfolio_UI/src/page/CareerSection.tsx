"use client";
import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text"; // Magic UI Aurora Text
import { Timeline } from "@/components/ui/timeline"; // Imported Timeline component

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const CareerSection: React.FC = () => {
  const timelineData: TimelineEntry[] = [
    {
      title: "Software Engineer",
      content: (
        <div>
          <AuroraText
            className="text-white text-[0.75rem] font-semibold"
            colors={["#3b82f6", "#8b5cf6"]} // Blue to purple gradient
          >
            Software Engineer
          </AuroraText>
          <p className="text-[0.625rem] text-white italic">
            Buildbot Technologies, Vijayawada • Feb 2023 – Present • 2 years 4
            months
          </p>
          <ul className="list-disc list-inside text-[0.625rem] text-white mt-[0.5rem]">
            <li>
              Developed full-stack IoT applications with real-time data
              processing using Vue.js, React.js, Angular, Node.js, TypeScript,
              and PostgreSQL.
            </li>
            <li>
              Optimized Node.js APIs for scalability, improving performance and
              reliability.
            </li>
            <li>
              Integrated IoT solutions for pharmaceutical and industrial
              applications.
            </li>
            <li>
              Designed mobile-first, user-friendly UIs, enhancing user
              engagement.
            </li>
            <li>
              Managed PostgreSQL databases efficiently to support application
              needs.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "QA Intern",
      content: (
        <div>
          <AuroraText
            className="text-white text-[0.75rem] font-semibold"
            colors={["#3b82f6", "#8b5cf6"]} // Blue to purple gradient
          >
            QA Intern
          </AuroraText>
          <p className="text-[0.625rem] text-white italic">
            Sandy Systems, Hyderabad • Sep 2023 – Nov 2023 • 3 months
          </p>
          <ul className="list-disc list-inside text-[0.625rem] text-white mt-[0.5rem]">
            <li>
              Performed manual testing, executing test cases to ensure software
              quality.
            </li>
            <li>
              Conducted functional, regression, and UI testing with a focus on
              detail.
            </li>
            <li>
              Delivered clear test cases and detailed bug reports to improve
              product reliability.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "B.Tech in Computer Science Engineering • 2022",
      content: (
        <div>
          <h3 className="text-[0.75rem] font-semibold text-white">
            B.Tech in Computer Science Engineering • 2022
          </h3>
          <p className="text-[0.625rem] text-white italic">
            St. Mary’s Group of Institutions, Guntur • Jun 2018 – Jun 2022
          </p>
        </div>
      ),
    },
    {
      title: "Intermediate (12th) • 2018",
      content: (
        <div>
          <h3 className="text-[0.75rem] font-semibold text-white">
            Intermediate (12th) • 2018
          </h3>
          <p className="text-[0.625rem] text-white italic">
            Narayana junior college, Andhra Pradesh, Guntur • Jun 2016 – Jun
            2018
          </p>
        </div>
      ),
    },
    {
      title: "10th Standard • 2016",
      content: (
        <div>
          <h3 className="text-[0.75rem] font-semibold text-white">
            10th Standard • 2016
          </h3>
          <p className="text-[0.625rem] text-white italic">
            Jubilation high school, Andhra Pradesh, Guntur • Jun 2015 – Jun 2016
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center py-[2%] px-[2%]">
      {/* Content */}
      <div className="relative z-10 max-w-[100%]">
        {/* Main Heading */}
        <h1 className="text-[0.8125rem] font-bold text-white text-center mb-[5%] relative">
          <AuroraText
            className="text-white"
            colors={["#3b82f6", "#8b5cf6"]} // Blue to purple gradient
          >
            Career
          </AuroraText>
          {/* Aceternity UI Spotlight Effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-full w-full" />
        </h1>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default CareerSection;
