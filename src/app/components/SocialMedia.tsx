"use client";

import { useRef, useEffect, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

export default function SocialMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex gap-6 justify-center items-center w-full"
    >
      <a
        href="https://www.instagram.com/bartlomiejperucki/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`social-icon p-3 rounded-full bg-green hover:opacity-70 transition-all duration-300 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
        style={{ animationDelay: "0s" }}
      >
        <div className="text-white">
          <FaInstagram size={32} />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/bart%C5%82omiej-perucki-319a0bb5/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={`social-icon p-3 rounded-full bg-green hover:opacity-70 transition-all duration-300 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
        style={{ animationDelay: "0.15s" }}
      >
        <div className="text-white">
          <FaLinkedin size={32} />
        </div>
      </a>
      <a
        href="mailto:bartekperucki@gmail.com"
        aria-label="Email"
        className={`social-icon p-3 rounded-full bg-green hover:opacity-70 transition-all duration-300 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
        style={{ animationDelay: "0.3s" }}
      >
        <div className="text-white">
          <FaRegEnvelope size={32} />
        </div>
      </a>
    </div>
  );
}
