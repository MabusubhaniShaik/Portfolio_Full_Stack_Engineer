import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, Mail, Check } from "lucide-react"; // Lucide Icons
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button"; // Magic UI Animated Subscribe Button
import { SparklesText } from "@/components/magicui/sparkles-text"; // Magic UI Sparkles Text

const AboutSection: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  // Reset the subscribed state after 2 minutes (120,000 milliseconds)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (subscribed) {
      timer = setTimeout(() => {
        setSubscribed(false);
      }, 120000); // 2 minutes
    }
    // Cleanup timer on unmount or when subscribed changes
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [subscribed]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center py-[2%] px-[2%]">
      {/* Content */}
      <div className="relative z-10 max-w-[90%] mx-auto flex flex-col md:flex-row items-center gap-[5%]">
        {/* Profile Image with Hover Effect */}
        <div className="w-[40%] md:w-[25%] h-[40vw] md:h-[25vw] max-w-[16rem] max-h-[16rem] rounded-lg overflow-hidden flex-shrink-0">
          <img
            src="/2025-06-16 16.33.51.jpg"
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          {/* Heading */}
          <h1 className="text-xl font-bold text-white mb-[5%]">
            I’m{" "}
            <SparklesText className="text-[#00e6e6] text-3xl">
              Mabusubhani Shaik
            </SparklesText>{" "}
            a Full Stack Developer
          </h1>

          {/* Bio */}
          <p className="text-lg text-[#ffffff] mb-[5%] leading-relaxed">
            I'm a Software Engineer with over 2 years of experience building
            scalable, high-performance web applications. I specialize in modern
            frontend and backend technologies including React.js, Vue.js,
            Angular, Node.js, NestJS, TypeORM, and PostgreSQL. I have a strong
            background in designing SEO-optimized UIs, developing secure REST
            APIs, and delivering real-time IoT and hybrid web solutions. I'm
            also experienced with CI/CD, version control, and agile workflows.
            Passionate about clean code, seamless UX, and solving real-world
            problems through full-stack development.
          </p>

          {/* Button and Social Links Side by Side */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-[2%] mb-[5%]">
            {/* Animated Subscribe Button */}
            <AnimatedSubscribeButton
              subscribeStatus={subscribed}
              onClick={() => setSubscribed(true)}
              className="relative bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-white px-8 py-3 rounded-md shadow-lg hover:shadow-pink-500/60 transition-all duration-300 overflow-hidden"
            >
              {/* Default State */}
              <span className="flex items-center gap-[0.5rem] text-lg font-normal">
                <span className="text-[#0d0d0d]">Download</span>
                <svg
                  className="w-[1.2rem] h-[1.2rem]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 12l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </span>

              {/* Subscribed State */}
              <span className="flex items-center gap-[0.5rem] text-lg font-normal text-[#0d0d0d]">
                <Check className="w-[1.2rem] h-[1.2rem] text-green-600" />
                Downloaded
              </span>
            </AnimatedSubscribeButton>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-[15%] mt-[2%] sm:mt-0">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00e6e6] hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-[1.5rem]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00e6e6] hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-[1.5rem]" />
              </a>
              <a
                href="mailto:yourname@example.com"
                className="text-[#00e6e6] hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-[1.5rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
