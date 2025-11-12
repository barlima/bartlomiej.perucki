"use client";

import React, { useState } from "react";

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

type ExpandableItemProps = {
  title: string;
  children: React.ReactNode;
};

function ExpandableItem({ title, children }: ExpandableItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-2">
      <div className="flex items-center mb-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 transition-colors"
        >
          {isExpanded ? "View less" : "View more"}
        </button>
        {title && <h4 className="font-semibold text-lg ml-3">{title}</h4>}
      </div>
      {isExpanded && <div className="mt-2">{children}</div>}
    </div>
  );
}

function Experience() {
  const [expandedCompanies, setExpandedCompanies] = useState<Set<number>>(
    new Set()
  );

  const toggleCompany = (index: number) => {
    const newExpanded = new Set(expandedCompanies);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCompanies(newExpanded);
  };

  return (
    <div className="flex flex-col gap-8 mt-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-6xl font-bold">Experience</h2>

      <div className="relative">
        {/* Continuous vertical line */}
        <div className="absolute left-[7.5rem] top-0 bottom-0 w-0.5 bg-gray-300"></div>

        {experienceData.map((experience, index) => (
          <div key={index} className="flex gap-6 mb-8 relative">
            {/* Left side - End Date */}
            <div className="flex-shrink-0 w-24 text-right pt-0">
              <div
                className="font-mono text-sm font-bold text-right"
                style={{ color: "var(--green)" }}
              >
                {experience.endDate === "present"
                  ? "Current"
                  : experience.endDate}
              </div>
            </div>

            {/* Middle - Timeline spacer */}
            <div className="flex-shrink-0 relative flex flex-col items-center">
              <div className="w-3 h-3"></div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 pb-4 relative">
              <div className="mb-3">
                <h3 className="text-2xl font-bold mb-1">
                  {experience.company}
                </h3>
                <p className="text-lg text-gray-700 mb-2">{experience.role}</p>

                {index !== 0 && (
                  <button
                    onClick={() => toggleCompany(index)}
                    className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 transition-colors mb-2"
                  >
                    {expandedCompanies.has(index) ? "View less" : "View more"}
                  </button>
                )}

                {(expandedCompanies.has(index) || index === 0) && (
                  <div className="mt-2">
                    <p className="text-gray-700 mb-2">
                      {experience.description}
                    </p>

                    {experience.techStack && !experience.projects && (
                      <div className="mb-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Tech stack:</span>{" "}
                          {experience.techStack.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Projects */}
              {experience.projects &&
                experience.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="mb-3">
                    <h4 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h4>

                    <div className="mb-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Tech stack:</span>{" "}
                        {project.techStack.join(", ")}
                      </p>
                    </div>

                    <ExpandableItem title="">
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2 text-sm">
                        {project.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="leading-relaxed">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </ExpandableItem>
                  </div>
                ))}

              {/* Start date at bottom */}
              <div className="absolute -left-[9.75rem] bottom-0 w-24 text-right">
                <div
                  className="font-mono text-sm font-bold text-right"
                  style={{ color: "var(--green)" }}
                >
                  {experience.startDate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
