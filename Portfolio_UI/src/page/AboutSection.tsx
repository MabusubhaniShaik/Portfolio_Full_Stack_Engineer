import React from "react";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/magicui/sparkles-text";

const ResumeLinkButton = () => (
  <Button
    asChild
    className="bg-[#00e6e6] text-[#0d0d0d] hover:bg-[#00e6e6] hover:text-[#0d0d0d] px-8 py-3 rounded-[0.3125rem] shadow-lg transition-none"
  >
    <a
      href="https://drive.google.com/drive/folders/1a3YSP_0a2dt3J5fk8dUeacLEhI9DhOqu"
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-normal"
    >
      View Resume
    </a>
  </Button>
);

const AboutSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center py-[2%] px-[2%]">
      <div className="relative z-10 max-w-[90%] mx-auto flex flex-col md:flex-row items-center gap-[5%]">
        <div className="w-[40%] md:w-[25%] h-[40vw] md:h-[25vw] max-w-[16rem] max-h-[16rem] rounded-lg overflow-hidden flex-shrink-0">
          <img
            src="/2025-06-16 16.33.51.jpg"
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-white mb-[5%]">
            I’m{" "}
            <SparklesText className="text-[#00e6e6] text-3xl">
              Mabusubhani Shaik
            </SparklesText>{" "}
            a Full Stack Developer
          </h1>

          <p className="text-lg text-[#ffffff] mb-[5%] leading-relaxed">
            I'm a Software Engineer with over 2+ years of experience building
            scalable, high-performance web applications. I specialize in modern
            frontend and backend technologies including React.js, Vue.js,
            Angular, Node.js, NestJS, TypeORM, and PostgreSQL. I have a strong
            background in designing SEO-optimized UIs, developing secure REST
            APIs, and delivering real-time IoT and hybrid web solutions. I'm
            also experienced with CI/CD, version control, and agile workflows.
            Passionate about clean code, seamless UX, and solving real-world
            problems through full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-[2%] mb-[5%]">
            <ResumeLinkButton />

            <div className="flex justify-center md:justify-start mt-[2%] sm:mt-0">
              <a
                href="https://linkedin.com/in/mabusubhani-shaik-839b561b1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00e6e6] hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-[1.5rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
