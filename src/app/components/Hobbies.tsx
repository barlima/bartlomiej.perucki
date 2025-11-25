"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TITLE_ANIMATION,
  CONTENT_FADE_UP,
  SCROLL_TRIGGER_CONFIGS,
} from "@/constants/gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function Hobbies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLElement>(null);

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

      // Animate content
      gsap.from(contentRef.current, {
        ...CONTENT_FADE_UP,
        scrollTrigger: {
          trigger: contentRef.current,
          ...SCROLL_TRIGGER_CONFIGS.content,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-8 px-4 mx-auto mt-16 max-w-7xl"
    >
      <h2 ref={titleRef} className="text-6xl font-bold">
        Hobbies
      </h2>

      <article ref={contentRef} aria-label="Hobbies">
        <p>
          In my free time, I enjoy playing basketball and expressing my
          creativity through drawing. Although my traveling plans are currently
          on hold, I continue to explore new cultures and stories by researching
          and building my family tree. These activities help me stay active,
          unwind, and stay connected with my roots.
        </p>
      </article>
    </div>
  );
}
