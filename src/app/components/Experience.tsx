import React from "react";

import ViewMore from "./ViewMore";

type Project = {
  title: string;
  responsibilities: string[];
  techStack: string[];
};

type ExperienceEntry = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  projects?: Project[];
  techStack?: string[];
};

const experienceData: ExperienceEntry[] = [
  {
    company: "Amsterdam Standard",
    role: "Senior Software Engineer & Consultant",
    startDate: "Mar 2020",
    endDate: "present",
    description:
      "As a Senior Software Engineer with extensive experience in both frontend and full-stack development, I am dedicated to delivering high-performance products. With a passion for investigating new technologies, I continuously enhance my skill set to stay at the forefront of industry advancements.",
    projects: [
      {
        title: "Logistics industry",
        responsibilities: [
          "Designed and implemented the frontend architecture, making key decisions on tools and technologies.",
          "Built new features and components using React.JS and TypeScript, ensuring high performance and scalability.",
          "Led a team of frontend developers, providing guidance, mentorship, and code reviews to ensure best practices.",
          "Managed cache and data storage using Redux Toolkit, optimizing data handling and state management.",
          "Developed the API client using Redux Toolkit Query, ensuring efficient data fetching and synchronization.",
        ],
        techStack: [
          "React.JS",
          "TypeScript",
          "MaterialUI",
          "Redux Toolkit",
          "Redux Toolkit Query",
          "zod",
          "redux-remember",
        ],
      },
      {
        title: "Entertainment industry",
        responsibilities: [
          "Optimized app performance using React.JS and TypeScript, enhancing user experience and reducing load times.",
          "Restructured the project and streamlined the codebase for better maintainability and scalability.",
          "Updated and replaced outdated libraries to ensure compatibility and leverage new features.",
          "Performed comprehensive code refactoring to improve code readability, reduce technical debt, and enhance performance.",
        ],
        techStack: ["React.JS", "TypeScript", "Redux", "MaterialUI", "Lodash"],
      },
      {
        title: "Sports industry",
        responsibilities: [
          "Developed new features and maintained existing ones using TypeScript and React.JS.",
          "Created and maintained web pages utilizing Next.JS with SSR (Server-Side Rendering), SSG (Static Site Generation), and ISR (Incremental Static Regeneration) for optimal performance and flexibility.",
          "Updated legacy code to improve maintainability and performance.",
          "Implemented SEO improvements to enhance search engine positioning and visibility.",
          "Maintained and enhanced the API using AWS Serverless technologies to ensure scalable and reliable backend services.",
          "Reviewed and provided feedback on design implementations to ensure consistency and user-friendliness.",
          "Managed and maintained DynamoDB and MySQL databases to ensure data integrity and performance.",
        ],
        techStack: [
          "React.JS",
          "TypeScript",
          "Next.JS",
          "Redux",
          "Atomic Design",
          "AWS Serverless",
          "DynamoDB",
          "MySQL",
        ],
      },
      {
        title: "Real estate industry",
        responsibilities: [
          "Bootstrapped the project using React.JS, TypeScript, and GraphQL, establishing a strong foundation for scalable development.",
          "Developed the API client using GraphQL Apollo Client, ensuring efficient and seamless data interaction.",
          "Designed and implemented the user interface using AntDesign, focusing on creating an intuitive and visually appealing user experience.",
        ],
        techStack: [
          "React.JS",
          "TypeScript",
          "AntDesign",
          "GraphQL",
          "Apollo Client",
          "graphql-codegen",
          "Lodash",
        ],
      },
      {
        title: "Engineering industry",
        responsibilities: [
          "Bootstrapped the project using React.JS, TypeScript, and GraphQL, laying a solid foundation for further development.",
          "Developed the API client using GraphQL Apollo Client, ensuring efficient data fetching and state management.",
          "Integrated the graphical library yFiles with the application, leveraging a monorepo approach using Lerna for better project organization.",
          "Built a responsive and user-friendly UI using MaterialUI, focusing on both aesthetics and functionality.",
          "Implemented new features and continuously improved performance to enhance the overall user experience.",
        ],
        techStack: [
          "React.JS",
          "TypeScript",
          "MaterialUI",
          "GraphQL",
          "Apollo Client",
          "graphql-codegen",
          "Ramda",
          "yFiles",
        ],
      },
    ],
  },
  {
    company: "Solarwinds",
    role: "Full Stack Developer",
    startDate: "Sep 2017",
    endDate: "Feb 2020",
    description:
      "Over the three years at SolarWinds, I have contributed to the development of two major SaaS applications (server and app monitoring), leveraging my expertise in both frontend and backend technologies.",
    projects: [
      {
        title: "SaaS Application using Ruby, Ruby on Rails, and React.JS",
        responsibilities: [
          "Developed and implemented new features across both the backend and frontend.",
          "Introduced React components into a Rails environment to enhance user experience.",
          "Ensured seamless integration of new functionalities while maintaining high performance.",
          "Provided comprehensive support and gathered user feedback.",
        ],
        techStack: ["React.JS", "Ruby", "Ruby on Rails", "Redux", "SemanticUI"],
      },
      {
        title: "SaaS Application using Ruby, React.JS, and Microservices",
        responsibilities: [
          "Focused primarily on frontend development with React.JS.",
          "Occasionally worked on backend microservices written in Ruby and Go.",
          "Contributed to maintaining and enhancing a legacy part of the application written in CoffeeScript.",
        ],
        techStack: [
          "React.JS",
          "Ruby",
          "GraphQL",
          "CoffeeScript",
          "Redux",
          "gRPC",
          "Docker",
          "SemanticUI",
          "styled-components",
          "Go",
        ],
      },
    ],
  },
  {
    company: "ABB Business Services sp. z o.o.",
    role: "Technical Support Engineer",
    startDate: "Jul 2015",
    endDate: "Aug 2017",
    description:
      "During my two years on the vessel propulsion monitoring project, I played a key role in ensuring the smooth operation and support of propulsion drive monitoring systems for offshore users (chief engineers, 1st engineers, etc.).",
    techStack: ["Microsoft Server", "C#", "Python", "Microsoft SQL Server"],
    projects: [
      {
        title: "Vessel Propulsion Monitoring",
        responsibilities: [
          "Provided comprehensive support to offshore users and addressing communication issues.",
          "Developed and maintained scripts using C# and Python to automate tasks and check ups.",
          "Configured and managed networks to support the monitoring application, ensuring reliable data transmission.",
          "Conducted on-site commissioning by visiting vessels in dry dock, where I set up both hardware and software components.",
          "Utilized Microsoft Server to store and manage large volumes of data, ensuring data integrity and accessibility.",
        ],
        techStack: ["Microsoft Server", "C#", "Python", "Microsoft SQL Server"],
      },
    ],
  },
];

function Experience() {
  return (
    <div className="flex flex-col gap-8 px-4 mx-auto mt-16 max-w-7xl">
      <h2 className="text-6xl font-bold">Experience</h2>

      <div className="relative">
        {/* Continuous vertical line */}
        <div className="absolute left-[2rem] md:left-[7.5rem] top-0 bottom-0 w-0.5 bg-gray-300"></div>

        {experienceData.map((experience, index) => (
          <div key={index} className="flex relative gap-3 mb-8 md:gap-6">
            {/* Left side - Dates */}
            <div className="flex flex-shrink-0 justify-end items-start pt-0 w-6 text-right md:w-24">
              {/* Mobile view - rotated */}
              <div
                className="font-mono text-sm -rotate-90 origin-bottom-right whitespace-nowrap md:hidden translate-y-[-1rem]"
                style={{ color: "var(--green)" }}
              >
                {experience.endDate === "present" ? (
                  <span className="font-fraunces">
                    <span className="font-normal">since</span>{" "}
                    <span className="font-bold">{experience.startDate}</span>
                  </span>
                ) : (
                  <span className="font-fraunces">
                    <span className="font-normal">since</span>{" "}
                    <span className="font-bold">{experience.startDate}</span>
                    <span className="mx-2">•</span>
                    <span className="font-normal">till</span>{" "}
                    <span className="font-bold">{experience.endDate}</span>
                  </span>
                )}
              </div>

              {/* Desktop view - normal */}
              <div
                className="hidden font-mono text-sm text-right md:block"
                style={{ color: "var(--green)" }}
              >
                {experience.endDate === "present" ? (
                  <span className="font-fraunces">
                    <div className="font-normal">since</div>
                    <div className="font-bold">{experience.startDate}</div>
                  </span>
                ) : (
                  <span className="font-fraunces">
                    <div className="font-normal">till</div>
                    <div className="font-bold">{experience.endDate}</div>
                    <div className="mt-2 font-normal">since</div>
                    <div className="font-bold">{experience.startDate}</div>
                  </span>
                )}
              </div>
            </div>

            {/* Middle - Timeline spacer */}
            <div className="flex relative flex-col flex-shrink-0 items-center">
              <div className="w-3 h-3"></div>
            </div>

            {/* Right side - Content */}
            <div className="relative flex-1 pb-4">
              <div className="mb-3">
                <h3 className="mb-1 text-2xl font-bold font-fraunces">
                  {experience.company}
                </h3>
                <p className="mb-2 text-lg text-gray-700">{experience.role}</p>

                <div className="mt-2">
                  <p className="mb-2 text-gray-700">{experience.description}</p>

                  {experience.techStack && !experience.projects && (
                    <div className="mb-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Tech stack:</span>{" "}
                        {experience.techStack.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Projects */}
              {experience.projects &&
                experience.projects.map((project, projectIndex) => (
                  <article key={projectIndex} className="mb-3">
                    <h4 className="mb-1 text-xl font-semibold">
                      {project.title}
                    </h4>

                    <div className="mb-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Tech stack:</span>{" "}
                        {project.techStack.join(", ")}
                      </p>
                    </div>

                    <ViewMore>
                      <ul className="pl-2 space-y-2 text-sm list-disc list-inside text-gray-700">
                        {project.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="leading-relaxed">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </ViewMore>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
