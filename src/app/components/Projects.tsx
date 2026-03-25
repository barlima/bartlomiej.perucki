"use client";

import { useRef, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ViewMore from "./ViewMore";
import {
  TITLE_ANIMATION,
  CONTENT_FADE_UP_LARGE,
  SCROLL_TRIGGER_CONFIGS,
} from "@/constants/gsapAnimations";
import { projectsData } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        ...TITLE_ANIMATION,
        scrollTrigger: {
          trigger: containerRef.current,
          ...SCROLL_TRIGGER_CONFIGS.title,
        },
      });

      // Animate each project card
      const projects = containerRef.current?.querySelectorAll(".project-card");
      if (projects) {
        projects.forEach((project) => {
          gsap.from(project, {
            ...CONTENT_FADE_UP_LARGE,
            scrollTrigger: {
              trigger: project,
              ...SCROLL_TRIGGER_CONFIGS.content,
            },
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-8 px-4 mx-auto mt-16 max-w-7xl"
    >
      <h2 ref={titleRef} className="text-6xl font-bold">
        Projects
      </h2>

      <div className="flex flex-col gap-12">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card flex flex-col gap-3">
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
