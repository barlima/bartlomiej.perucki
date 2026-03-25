"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TITLE_ANIMATION,
  CONTENT_FADE_UP_LARGE,
  SCROLL_TRIGGER_CONFIGS,
} from "@/constants/gsapAnimations";
import { educationData } from "@/data/education";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
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

      // Animate each education entry
      const entries = containerRef.current?.querySelectorAll(".education-entry");
      if (entries) {
        entries.forEach((entry) => {
          gsap.from(entry, {
            ...CONTENT_FADE_UP_LARGE,
            scrollTrigger: {
              trigger: entry,
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
        Education
      </h2>

      <div className="flex flex-col gap-12">
        {educationData.map((edu, index) => (
          <div key={index} className="education-entry flex flex-col gap-3">
            <div>
              <h3 className="mb-1 text-2xl font-bold">{edu.degree}</h3>
              <p className="mb-2 text-lg text-gray-700">
                {edu.university}, {edu.location}
              </p>
              <p className="mb-2 text-gray-700">{edu.period}</p>
            </div>

            <div className="text-sm text-gray-700">
              <p className="font-semibold">Thesis:</p>
              <p className="mt-1 leading-relaxed">{edu.thesis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
