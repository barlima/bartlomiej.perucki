import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <Hero />

      <AboutMe />

      <Skills />

      <Experience />

      <Projects />

      <Certifications />

      <Education />

      <Hobbies />

      <Footer />
    </div>
  );
}
