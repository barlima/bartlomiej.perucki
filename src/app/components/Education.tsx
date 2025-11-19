import React from "react";

type Education = {
  degree: string;
  university: string;
  location: string;
  period: string;
  thesis: string;
};

const educationData: Education[] = [
  {
    degree: "Master of Electronics and Telecommunications",
    university: "AGH University of Science and Technology",
    location: "Poland, Kraków",
    period: "2016 - 2017",
    thesis:
      "A study on the performance of a distributed system for the optimization of a large-scale logistics network.",
  },
  {
    degree: "Engineer of Electronics and Telecommunications",
    university: "AGH University of Science and Technology",
    location: "Poland, Kraków",
    period: "2012 - 2016",
    thesis:
      "Acquisition and preparation of the database of human eyes with the module for analysis of the characteristic colors.",
  },
];

export default function Education() {
  return (
    <div className="flex flex-col gap-8 px-4 mx-auto mt-16 max-w-7xl">
      <h2 className="text-6xl font-bold">Education</h2>

      <div className="flex flex-col gap-12">
        {educationData.map((edu, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div>
              <h3 className="mb-1 text-2xl font-bold">{edu.degree}</h3>
              <p className="mb-2 text-lg text-gray-700">
                {edu.university}, {edu.location}
              </p>
              <p className="mb-2 text-gray-700">{edu.period}</p>
            </div>

            <div className="text-sm text-gray-700">
              <p className="font-semibold">Thesis:</p>
              <p className="mt-1 leading-relaxed">{edu.thesis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
