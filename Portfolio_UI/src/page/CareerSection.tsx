"use client";
import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text"; 
import { Timeline } from "@/components/ui/timeline"; 

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// Helper function to calculate duration between two dates
const getDuration = (startDate: string, endDate?: string) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1; // +1 to include starting month

  if (totalMonths <= 0) return "0 months";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  let monthStr = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
};

const CareerSection: React.FC = () => {
  const timelineData: TimelineEntry[] = [
    {
      title: "Software Engineer",
      content: (
        <div>
          <AuroraText
            className="text-white text-[1.25rem] font-semibold"
            colors={["#3b82f6", "#8b5cf6"]}
          >
            Software Engineer
          </AuroraText>
          <p className="text-[0.75rem] text-white italic">
            Buildbot Technologies, Vijayawada • Feb 2023 – Present •{" "}
            {getDuration("2023-02-01")}
          </p>
          <ul className="list-disc list-inside text-[0.75rem] text-white mt-[0.5rem]">
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
            className="text-white text-[1.25rem] font-semibold"
            colors={["#3b82f6", "#8b5cf6"]}
          >
            QA Intern
          </AuroraText>
          <p className="text-[0.75rem] text-white italic">
            Sandy Systems, Hyderabad • Sep 2023 – Nov 2023 •{" "}
            {getDuration("2023-09-01", "2023-11-30")}
          </p>
          <ul className="list-disc list-inside text-[0.75rem] text-white mt-[0.5rem]">
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
          <h3 className="text-[1.25rem] font-semibold text-white">
            B.Tech in Computer Science Engineering • 2022
          </h3>
          <p className="text-[0.75rem] text-white italic">
            St. Mary’s Group of Institutions, Guntur • Jun 2018 – Jun 2022
          </p>
        </div>
      ),
    },
    {
      title: "Intermediate (12th) • 2018",
      content: (
        <div>
          <h3 className="text-[1.25rem] font-semibold text-white">
            Intermediate (12th) • 2018
          </h3>
          <p className="text-[0.75rem] text-white italic">
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
          <h3 className="text-[1.25rem] font-semibold text-white">
            10th Standard • 2016
          </h3>
          <p className="text-[0.75rem] text-white italic">
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
            colors={["#3b82f6", "#8b5cf6"]}
          >
            Career
          </AuroraText>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-full w-full" />
        </h1>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default CareerSection;
