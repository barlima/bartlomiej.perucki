import Image from "next/image";

export default function AboutMe() {
  return (
    <article aria-label="About me">
      <div className="flex flex-col gap-8 justify-center mb-24 w-full md:flex-row">
        <div className="flex justify-center md:justify-start min-w-[200px] max-h-[200px]">
          <Image
            src="/images/bartek.jpeg"
            alt="Bartek Perucki"
            className="rounded-full border-4 border-solid border-green"
            width={200}
            height={200}
          />
        </div>

        <p className="w-full text-lg text-left md:w-2/3 xl:w-1/2">
          As a Senior Software Engineer with extensive experience in both
          frontend and full-stack development, I am dedicated to delivering
          high-performance products. With a passion for investigating new
          technologies, I continuously enhance my skill set to stay at the
          forefront of industry advancements. Outside of work, I enjoy spending
          quality time with my wife and my kid, and we share a love for
          traveling and exploring new destinations together.
        </p>
      </div>
    </article>
  );
}
