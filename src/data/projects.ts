export type Project = {
  name: string;
  role: string;
  period: string;
  url?: string;
  description: string;
  responsibilities: string[];
  responsibilitiesSummary: string;
  techStack: string[];
};

export const projectsData: Project[] = [
  {
    name: "Vantage Charts",
    role: "Developer",
    period: "2024 - 2025",
    url: "https://www.67talents.com/vantage",
    description:
      "Vantage Charts is a powerful data visualization tool that allows you to create stunning charts and graphs with ease. It is built with Apache ECharts and React.JS.",
    responsibilities: [
      "Built the Monday.com Plugin for data visualization using React.JS, TypeScript, and Apache ECharts.",
      "Developed and maintained the charts and graph settings",
      "Configured communication with Monday.com API",
      "Assured complience with Monday.com requirements",
    ],
    responsibilitiesSummary:
      "Built a Monday.com data visualization plugin using React.JS, TypeScript, and Apache ECharts — covering chart configuration, Monday.com API integration, and compliance with platform requirements.",
    techStack: [
      "React.JS",
      "TypeScript",
      "Apache ECharts",
      "Monday.com API",
      "GraphQL",
    ],
  },
  {
    name: "Integrigo",
    role: "Co-Founder",
    period: "2020 - 2023",
    description:
      "In this project, I was responsible for building and deploying both the frontend and backend of the application, while also managing the team and coordinating with the design team.",
    responsibilities: [
      "Built and deployed the frontend using React.JS, TypeScript, GraphQL, and styled-components.",
      "Developed and maintained the backend using Node.JS and Prisma ORM, ensuring robust and scalable server-side functionality.",
      "Managed PostgreSQL database using DigitalOcean.",
      "Created an SEO-optimized page to improve search engine positioning and visibility.",
      "Led tool selection and architectural decisions to optimize development efficiency and application performance.",
      "Provided leadership and guidance to the development team, ensuring adherence to best practices and project timelines.",
      "Facilitated communication and collaboration with the design team to ensure seamless integration of design elements into the application.",
    ],
    responsibilitiesSummary:
      "Co-founded and led full-stack development of the platform — built the React.JS/GraphQL frontend and Node.JS/Prisma backend, managed PostgreSQL on DigitalOcean, implemented SEO, and guided the dev and design teams from architecture decisions to delivery.",
    techStack: [
      "React.JS",
      "TypeScript",
      "Node.JS",
      "Prisma ORM",
      "PostgreSQL",
      "DigitalOcean",
      "GraphQL",
      "styled-components",
    ],
  },
];
