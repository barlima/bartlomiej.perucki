import { FaExternalLinkAlt } from "react-icons/fa";
import ViewMore from "./ViewMore";

type Project = {
  name: string;
  role: string;
  period: string;
  url?: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
};

const projectsData: Project[] = [
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
  {
    name: "ESC charts",
    role: "Personal Project",
    url: "https://esc-charts.vercel.app/",
    period: "2025",
    description:
      "A personal project where I explored and tested various AI-powered development tools and technologies while building a Eurovision Song Contest data visualization platform. This project served as a testing ground for modern AI coding assistants, MCP tools, and cloud services.",
    responsibilities: [
      "Experimented with AI coding tools including Vibe Coding, MCP (Model Context Protocol), Cursor Agent, and Anthropic AI for enhanced development workflow.",
      "Utilized MCP tools including Supabase MCP and Perplexity MCP for seamless integration with backend services and AI-powered research capabilities.",
      "Implemented AI task management workflows using AI task manager and PRD (Product Requirements Document) generation for project planning.",
      "Built data visualization features to display Eurovision voting patterns, country performance trends, and contest statistics.",
      "Integrated Supabase for backend services, database management, and real-time data handling.",
      "Created interactive charts and graphs to visualize Eurovision Song Contest data in an engaging and informative way.",
      "Evaluated various AI-assisted development workflows and their impact on productivity and code quality.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Supabase MCP",
      "Perplexity MCP",
      "echarts",
      "TailwindCSS",
      "shadcn/ui",
      "radix-ui",
      "Vibe Coding",
      "MCP",
      "Cursor Agent",
      "Anthropic AI",
      "AI Task Manager",
      "PRD Generation",
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-8 px-4 mx-auto mt-16 max-w-7xl">
      <h2 className="text-6xl font-bold">Projects</h2>

      <div className="flex flex-col gap-12">
        {projectsData.map((project, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div>
              <div className="flex justify-start items-center gap-3">
                <h3 className="mb-1 text-2xl font-bold">{project.name}</h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green transition-colors"
                  >
                    <FaExternalLinkAlt size={20} className="pb-0.5" />
                  </a>
                )}
              </div>
              <p className="mb-2 text-lg text-gray-700">
                {project.role} • {project.period}
              </p>
              <p className="mb-2 text-gray-700">{project.description}</p>
            </div>

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
          </div>
        ))}
      </div>
    </div>
  );
}
