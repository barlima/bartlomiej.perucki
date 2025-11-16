import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <Hero />

      <AboutMe />

      <Skills />

      <Experience />

      <Projects />
    </div>
  );
}
