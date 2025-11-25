"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skill } from "./Skill";
import {
  TITLE_ANIMATION,
  SKILLS_ANIMATION,
  SCROLL_TRIGGER_CONFIGS,
} from "@/constants/gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title - slides down from above
      gsap.from(titleRef.current, {
        ...TITLE_ANIMATION,
        scrollTrigger: {
          trigger: containerRef.current,
          ...SCROLL_TRIGGER_CONFIGS.title,
        },
      });

      // Animate skills from top to bottom with stagger
      const skills = containerRef.current?.querySelectorAll(".skill-item");
      if (skills) {
        gsap.from(skills, {
          ...SKILLS_ANIMATION,
          scrollTrigger: {
            trigger: containerRef.current,
            ...SCROLL_TRIGGER_CONFIGS.skills,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-4 px-4 mx-auto mt-16 max-w-7xl"
    >
      <h2 ref={titleRef} className="text-6xl font-bold">
        Skills
      </h2>

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
