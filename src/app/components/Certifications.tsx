"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TITLE_ANIMATION,
  CARD_ANIMATION,
  SCROLL_TRIGGER_CONFIGS,
} from "@/constants/gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

type Certification = {
  name: string;
  issuer: string;
  date: string;
  url: string;
  skills: string[];
};

const certificationsData: Certification[] = [
  {
    name: "AWS Cloud Technical Essentials",
    issuer: "Coursera",
    date: "2025",
    url: "https://www.coursera.org/account/accomplishments/verify/AV9GOCRNEJ1B?utm_product=course",
    skills: [
      "EC2",
      "ECS",
      "S3",
      "RDS",
      "DynamoDB",
      "AWS Lambda",
      "VPC",
      "IAM",
      "CloudWatch",
    ],
  },
  {
    name: "IBM Back-end JavaScript Developer",
    issuer: "Coursera",
    date: "2025",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/E7I02BABMRQX",
    skills: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "NoSQL",
      "MongoDB",
      "Docker",
    ],
  },
  {
    name: "Advanced TypeScript Patterns",
    issuer: "TotalTypeScript.com",
    date: "2023",
    url: "https://res.cloudinary.com/total-typescript/image/upload/v1741684228/certificate/ca47c99d-01c5-4b9e-b1d8-eac9f6c75009/advanced-typescript-patterns.png",
    skills: ["TypeScript"],
  },
  {
    name: "Type Transformations",
    issuer: "TotalTypeScript.com",
    date: "2023",
    url: "https://res.cloudinary.com/total-typescript/image/upload/v1741684068/certificate/ca47c99d-01c5-4b9e-b1d8-eac9f6c75009/type-transformations.png",
    skills: ["TypeScript"],
  },
  {
    name: "TypeScript Generics",
    issuer: "TotalTypeScript.com",
    date: "2023",
    url: "https://res.cloudinary.com/total-typescript/image/upload/v1741683917/certificate/ca47c99d-01c5-4b9e-b1d8-eac9f6c75009/typescript-generics.png",
    skills: ["TypeScript"],
  },
  {
    name: "React Web Developer Course (with Redux)",
    issuer: "Udemy",
    date: "2018",
    url: "https://www.udemy.com/certificate/UC-4PHENPB9/",
    skills: ["JavaScript", "React.js", "Redux", "HTML", "CSS", "Jest"],
  },
];

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
