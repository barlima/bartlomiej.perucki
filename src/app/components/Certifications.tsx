"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TITLE_ANIMATION,
  CARD_ANIMATION,
  SCROLL_TRIGGER_CONFIGS,
} from "@/constants/gsapAnimations";
import { certificationsData } from "@/data/certifications";

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
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

      // Animate certification cards with stagger
      const cards = containerRef.current?.querySelectorAll(".cert-card");
      if (cards) {
        gsap.from(cards, {
          ...CARD_ANIMATION,
          scrollTrigger: {
            trigger: containerRef.current?.querySelector(".cert-grid"),
            ...SCROLL_TRIGGER_CONFIGS.cards,
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
        Certifications
      </h2>

      <div className="cert-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="cert-card flex flex-col items-center p-6 h-full bg-white rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="mb-3 text-sm text-center text-gray-600">
              {cert.date}
            </p>
            <p
              className="mb-1 text-sm font-semibold text-center"
              style={{ color: "var(--green)" }}
            >
              {cert.issuer}
            </p>
            <h3 className="mb-2 text-xl font-bold text-center font-fraunces">
              {cert.name}
            </h3>
            <div className="pt-3 w-full">
              <div className="flex flex-wrap gap-2 justify-center">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 mt-auto w-full text-center">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold hover:underline"
                style={{ color: "var(--green)" }}
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
