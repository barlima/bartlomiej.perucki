/**
 * Common GSAP animation configurations
 * These constants are used across multiple components to maintain consistency
 */

// Title animations (slides down from above)
export const TITLE_ANIMATION: gsap.TweenVars = {
  opacity: 0,
  y: -30,
  duration: 0.8,
  ease: "power3.out",
};

// Content animations (fades and slides up)
export const CONTENT_FADE_UP: gsap.TweenVars = {
  opacity: 0,
  y: 30,
  duration: 0.7,
  ease: "power2.out",
};

// Content animations (larger slide up)
export const CONTENT_FADE_UP_LARGE: gsap.TweenVars = {
  opacity: 0,
  y: 40,
  duration: 0.7,
  ease: "power2.out",
};

// Skills animation (slides from top-left)
export const SKILLS_ANIMATION: gsap.TweenVars = {
  opacity: 0,
  y: -20,
  x: -10,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.08,
};

// Card animations (scales and fades in)
export const CARD_ANIMATION: gsap.TweenVars = {
  opacity: 0,
  y: 30,
  scale: 0.95,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.1,
};

// Entry animations (slides from left)
export const ENTRY_SLIDE_LEFT: gsap.TweenVars = {
  opacity: 0,
  x: -30,
  duration: 0.8,
  ease: "power2.out",
};

// Timeline line animation
export const TIMELINE_LINE_ANIMATION: gsap.TweenVars = {
  scaleY: 0,
  transformOrigin: "top",
  duration: 1.5,
  ease: "power2.out",
};

// ScrollTrigger configurations
export const SCROLL_TRIGGER_CONFIGS = {
  title: {
    start: "top 80%",
    toggleActions: "play none none none" as const,
  },
  content: {
    start: "top 90%",
    toggleActions: "play none none none" as const,
  },
  skills: {
    start: "top 70%",
    toggleActions: "play none none none" as const,
  },
  cards: {
    start: "top 85%",
    toggleActions: "play none none none" as const,
  },
  timeline: {
    start: "top 75%",
    toggleActions: "play none none none" as const,
  },
};
