import { Skill } from "./Skill";

const SKILLS = [
  "JavaScript",
  "React.JS",
  "TypeScript",
  "Next.JS",
  "Redux Toolkit",
  "React Toolkit Query",
  "Node.JS",
  "GraphQL",
  "HTML",
  "CSS",
  "Prompting",
  "AI Agents",
  "MaterialUI",
  "TailwindCSS",
  "styled-components",
  "AntDesign",
  "React Query",
  "AWS",
  "Vite",
  "Docker",
];

export default function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-6xl font-bold">Skills</h2>

      <ul className="grid grid-cols-2 gap-4 mx-2 mt-8 xl:gap-8 md:mx-16">
        <div>
          {SKILLS.slice(0, 10).map((skill, index) => (
            <Skill key={skill} index={index}>
              {skill}
            </Skill>
          ))}
        </div>

        <div>
          {SKILLS.slice(10).map((skill, index) => (
            <Skill key={skill} index={index + 10}>
              {skill}
            </Skill>
          ))}
        </div>
      </ul>
    </div>
  );
}
