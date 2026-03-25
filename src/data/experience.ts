export type Project = {
  title: string;
  responsibilities: string[];
  responsibilitiesSummary: string;
  techStack: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  projects?: Project[];
  techStack?: string[];
};

export const experienceData: ExperienceEntry[] = [
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
        responsibilitiesSummary:
          "Architected and led the frontend of a logistics platform — built scalable React.JS/TypeScript components, managed state with Redux Toolkit, handled data fetching via RTK Query, and mentored a team of frontend developers.",
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
        responsibilitiesSummary:
          "Improved an entertainment platform's React.JS/TypeScript codebase through performance optimization, project restructuring, library upgrades, and broad refactoring to reduce technical debt.",
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
        responsibilitiesSummary:
          "Built and maintained a sports platform using Next.JS (SSR/SSG/ISR) and React.JS/TypeScript — delivered SEO improvements, extended AWS Serverless APIs, managed DynamoDB and MySQL databases, and modernized legacy code.",
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
        responsibilitiesSummary:
          "Bootstrapped a real estate platform from scratch with React.JS, TypeScript, and GraphQL Apollo Client, and built the UI with AntDesign.",
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
        responsibilitiesSummary:
          "Bootstrapped an engineering platform with React.JS, TypeScript, and GraphQL Apollo Client — integrated the yFiles graph library in a Lerna monorepo, built the MaterialUI interface, and continuously delivered new features.",
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
    company: "SolarWinds",
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
        responsibilitiesSummary:
          "Delivered full-stack features on a SaaS monitoring app — introduced React.JS components into a Ruby on Rails environment and gathered user feedback to drive iterative improvements.",
        techStack: ["React.JS", "Ruby", "Ruby on Rails", "Redux", "SemanticUI"],
      },
      {
        title: "SaaS Application using Ruby, React.JS, and Microservices",
        responsibilities: [
          "Focused primarily on frontend development with React.JS.",
          "Occasionally worked on backend microservices written in Ruby and Go.",
          "Contributed to maintaining and enhancing a legacy part of the application written in CoffeeScript.",
        ],
        responsibilitiesSummary:
          "Focused on frontend development with React.JS on a microservices-based SaaS app, contributed to Ruby and Go backend services, and maintained a legacy CoffeeScript codebase.",
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
        responsibilitiesSummary:
          "Supported offshore users on vessel propulsion monitoring systems — wrote C# and Python automation scripts, managed network configuration, conducted on-site dry dock commissioning, and maintained data storage on Microsoft SQL Server.",
        techStack: ["Microsoft Server", "C#", "Python", "Microsoft SQL Server"],
      },
    ],
  },
];
