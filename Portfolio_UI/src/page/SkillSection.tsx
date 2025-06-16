"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // shadcn/ui Card
import { AuroraText } from "@/components/magicui/aurora-text"; // Magic UI Aurora Text for animated heading
import { Marquee } from "@/components/magicui/marquee"; // Magic UI Marquee

const SkillSection = () => {
  const skills = {
    frontend: [
      {
        name: "VueJs",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/VueJS-Dark.svg",
      },
      {
        name: "Vuex",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/VueJS-Dark.svg",
      },
      {
        name: "Pinia",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/VueJS-Dark.svg",
      }, // Using VueJS icon
      {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Angular-Dark.svg",
      },
      {
        name: "ngrx",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Angular-Dark.svg",
      }, // Using Angular icon
      {
        name: "ReactJS",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/React-Dark.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Redux.svg",
      },
      {
        name: "NextJs",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/NextJS-Dark.svg",
      },
      {
        name: "NuxtJs",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/NuxtJS-Dark.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/HTML.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/CSS.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/TailwindCSS-Dark.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/JavaScript.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/TypeScript.svg",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/NodeJS-Dark.svg",
      },
      {
        name: "Expressjs",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/ExpressJS-Dark.svg",
      },
      {
        name: "Nestjs",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/NestJS-Dark.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Python-Dark.svg",
      },
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Django.svg",
      },
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Flask-Dark.svg",
      },
      {
        name: "Microservices",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Kubernetes.svg",
      }, // Using Kubernetes icon
      {
        name: "Graphql",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/GraphQL-Dark.svg",
      },
      {
        name: "TypeOrm",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/GraphQL-Dark.svg",
      }, // Using GraphQL icon
    ],
    database: [
      {
        name: "Postgresql",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/PostgreSQL-Dark.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/MySQL-Dark.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/MongoDB.svg",
      },
      {
        name: "FireBase",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Firebase-Dark.svg",
      },
    ],
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Git.svg",
      },
      {
        name: "Jira",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Jira-Dark.svg",
      },
      {
        name: "Bitbucket",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/BitBucket-Dark.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Vercel-Dark.svg",
      },
      {
        name: "CI/CD",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Jenkins-Dark.svg",
      }, // Using Jenkins icon
      {
        name: "JWT/OAuth",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Lock.svg",
      }, // Using Lock icon for security
      {
        name: "Agile Workflows",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/Scrum.svg",
      }, // Using Scrum icon
      {
        name: "Node Mailer",
        icon: "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@master/icons/NodeJS-Dark.svg",
      }, // Using NodeJS icon
    ],
  };

  // Combine all skills into a single array for the marquee
  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.tools,
  ];

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center py-[2%] px-[2%]">
      <div className="relative z-10 max-w-[90%] mx-auto">
        {/* Skills Heading with Aceternity UI Spotlight Effect */}
        <h1 className="text-[0.8125rem] font-bold text-white text-center mb-[5%] relative">
          <AuroraText
            className="text-white"
            colors={["#3b82f6", "#8b5cf6"]} // Blue to purple gradient
          >
            Skills
          </AuroraText>
          {/* Aceternity UI Spotlight Effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-full w-full" />
        </h1>

        {/* Skills Categories - Card Layout with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend */}
          <Card className="bg-black border border-neutral-700 transition-transform transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-[0.75rem] font-semibold text-white">
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center text-[0.625rem] text-white bg-neutral-800 px-3 py-1 rounded-full transition-colors hover:bg-blue-500/50"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-5 w-5 mr-2"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card className="bg-black border border-neutral-700 transition-transform transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-[0.75rem] font-semibold text-white">
                Backend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center text-[0.625rem] text-white bg-neutral-800 px-3 py-1 rounded-full transition-colors hover:bg-blue-500/50"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-5 w-5 mr-2"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Database */}
          <Card className="bg-black border border-neutral-700 transition-transform transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-[0.75rem] font-semibold text-white">
                Database
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center text-[0.625rem] text-white bg-neutral-800 px-3 py-1 rounded-full transition-colors hover:bg-blue-500/50"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-5 w-5 mr-2"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="bg-black border border-neutral-700 transition-transform transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-[0.75rem] font-semibold text-white">
                Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center text-[0.625rem] text-white bg-neutral-800 px-3 py-1 rounded-full transition-colors hover:bg-blue-500/50"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-5 w-5 mr-2"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Marquee for Skills Icons */}
        <div className="mt-10">
          <Marquee pauseOnHover className="flex gap-4">
            {allSkills.map((skill, index) => (
              <img
                key={index}
                src={skill.icon}
                alt={skill.name}
                className="h-10 w-10"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
