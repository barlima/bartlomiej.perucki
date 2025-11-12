import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex w-full justify-center gap-8 mb-24">
      <div>
        <Image
          src="/images/bartek.jpeg"
          alt="Bartek Perucki"
          className="border-4 border-solid border-green rounded-full"
          width={200}
          height={200}
        />
      </div>

      <p className="text-left text-lg font-manjari w-8/10 mt-4">
        As a Senior Software Engineer with extensive experience in both frontend
        and full-stack development, I am dedicated to delivering
        high-performance products. With a passion for investigating new
        technologies, I continuously enhance my skill set to stay at the
        forefront of industry advancements. Outside of work, I enjoy spending
        quality time with my wife and my kid, and we share a love for traveling
        and exploring new destinations together.
      </p>
    </div>
  );
}
