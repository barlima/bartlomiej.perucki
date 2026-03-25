"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ViewMore from "./ViewMore";
import {
  TITLE_ANIMATION,
  ENTRY_SLIDE_LEFT,
  TIMELINE_LINE_ANIMATION,
  SCROLL_TRIGGER_CONFIGS,
} from "@/constants/gsapAnimations";
import { experienceData } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
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

      // Animate each experience entry
      const entries = containerRef.current?.querySelectorAll(".experience-entry");
      if (entries) {
        entries.forEach((entry) => {
          gsap.from(entry, {
            ...ENTRY_SLIDE_LEFT,
            scrollTrigger: {
              trigger: entry,
              ...SCROLL_TRIGGER_CONFIGS.cards,
            },
          });
        });
      }

      // Animate timeline line
      const timelineLine = containerRef.current?.querySelector(".timeline-line");
      if (timelineLine) {
        gsap.from(timelineLine, {
          ...TIMELINE_LINE_ANIMATION,
          scrollTrigger: {
            trigger: containerRef.current,
            ...SCROLL_TRIGGER_CONFIGS.timeline,
          },
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
        Experience
      </h2>

      <div className="relative">
        {/* Continuous vertical line */}
        <div className="timeline-line absolute left-[2rem] md:left-[7.5rem] top-0 bottom-0 w-0.5 bg-gray-300"></div>

        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="experience-entry flex relative gap-3 mb-8 md:gap-6"
          >
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
