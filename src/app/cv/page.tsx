import { FaExternalLinkAlt } from "react-icons/fa";
import DownloadPdfButton from "./DownloadPdfButton";
import { SKILLS } from "@/data/skills";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { certificationsData } from "@/data/certifications";
import { educationData } from "@/data/education";

export const metadata = {
  title: "CV – Bartłomiej Perucki",
  description: "Printable resume of Bartłomiej Perucki, Senior Software Engineer.",
};

export default function CVPage() {
  return (
    <main className="cv-page max-w-4xl mx-auto px-6 py-10 print:py-4 print:px-4 text-gray-900 font-inter">
      <DownloadPdfButton />

      {/* Header */}
      <header className="mb-6 print:mb-4">
        <h1 className="text-4xl font-bold font-fraunces leading-tight m-0">Bartłomiej Perucki</h1>
        <p className="text-lg text-gray-600 mt-0">Senior Software Engineer</p>

        <div className="flex items-center gap-2">
          <a href="mailto:bartekperucki@gmail.com" className="text-xs text-gray-500 hover:underline">bartekperucki@gmail.com</a>
          <span className="text-xs text-gray-500">•</span>
          <a href="tel:+48788501607" className="text-xs text-gray-500 hover:underline">+48 788 501 607</a>
          <span className="text-xs text-gray-500">•</span>
          <a
            href="https://www.perucki.be"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:underline"
          >
            www.perucki.be
          </a>
        </div>
      </header>

      {/* Bio */}
      <section className="mb-6 print:mb-4">
        <p className="text-xs leading-relaxed text-gray-700">
          Senior Software Engineer with 9+ years of experience in frontend and full-stack development.
          Specializes in React.JS, TypeScript, and Next.JS, with deep expertise in state management
          (Redux Toolkit, React Query), GraphQL, and Node.JS. Experienced in building scalable SaaS
          applications, data visualization tools, and cloud-based solutions on AWS. Proficient in
          modern development tooling including Docker, Vite, and AI-assisted workflows (Claude Code,
          MCP, Cursor).
        </p>
      </section>

      <hr className="border-gray-300 mb-6 print:mb-4" />

      {/* Skills */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-base font-bold font-fraunces mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 text-xs bg-gray-100 border border-gray-200 rounded text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <hr className="border-gray-300 mb-6 print:mb-4" />

      {/* Work Experience */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-base font-bold font-fraunces mb-4">Work Experience</h2>
        <div className="flex flex-col gap-6">
          {experienceData.map((entry, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
                <h3 className="text-base font-bold font-fraunces">{entry.company}</h3>
                <span className="text-xs text-gray-500">
                  {entry.startDate} – {entry.endDate}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{entry.role}</p>
              <p className="text-xs text-gray-600 leading-snug mb-2">{entry.description}</p>

              {entry.projects && entry.projects.map((project, j) => (
                <div key={j} className="mb-3 ml-2">
                  <h4 className="text-sm font-semibold mb-0.5">{project.title}</h4>
                  <p className="text-xs text-gray-500 mb-1">
                    <span className="font-semibold">Tech:</span> {project.techStack.join(", ")}
                  </p>
                  <p className="text-xs text-gray-700 leading-snug">{project.responsibilitiesSummary}</p>
                </div>
              ))}

              {entry.techStack && !entry.projects && (
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Tech:</span> {entry.techStack.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-300 mb-6 print:mb-4" />

      {/* Projects */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-base font-bold font-fraunces mb-4">Projects</h2>
        <div className="flex flex-col gap-5">
          {projectsData.map((project, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-base font-bold font-fraunces">{project.name}</h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green transition-colors"
                  >
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
              <p className="text-xs text-gray-500 mb-1">
                {project.role} • {project.period}
              </p>
              <p className="text-xs text-gray-600 leading-snug mb-1">{project.description}</p>
              <p className="text-xs text-gray-500 mb-1">
                <span className="font-semibold">Tech:</span> {project.techStack.join(", ")}
              </p>
              <p className="text-xs text-gray-700 leading-snug">{project.responsibilitiesSummary}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-300 mb-6 print:mb-4" />

      {/* Certifications */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-base font-bold font-fraunces mb-3">Certifications</h2>
        <div className="flex flex-col gap-2">
          {certificationsData.map((cert, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "var(--green)" }}
                >
                  {cert.name}
                </a>
                <span className="text-xs text-gray-500">{cert.issuer} · {cert.date}</span>
              </div>
              <p className="text-xs text-gray-400">{cert.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-300 mb-6 print:mb-4" />

      {/* Education */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-base font-bold font-fraunces mb-3">Education</h2>
        <div className="flex flex-col gap-4">
          {educationData.map((edu, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <h3 className="text-sm font-bold">{edu.degree}</h3>
                <span className="text-xs text-gray-500">{edu.period}</span>
              </div>
              <p className="text-xs text-gray-600 mb-0.5">
                {edu.university}, {edu.location}
              </p>
              <p className="text-xs text-gray-500 leading-snug">
                <span className="font-semibold">Thesis:</span> {edu.thesis}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-300 mb-6 print:mb-4" />

      {/* Hobbies */}
      <section className="mb-4">
        <h2 className="text-base font-bold font-fraunces mb-2">Hobbies</h2>
        <p className="text-xs text-gray-700 leading-snug">
          In my free time, I enjoy playing basketball and expressing my creativity through drawing.
          Although my traveling plans are currently on hold, I continue to explore new cultures and
          stories by researching and building my family tree.
        </p>
      </section>

      <hr className="border-gray-300 mb-4 mt-6" />

      {/* GDPR consent */}
      <p className="text-xs text-gray-400 leading-snug">
        Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
      </p>

    </main>
  );
}
