export type Education = {
  degree: string;
  university: string;
  location: string;
  period: string;
  thesis: string;
};

export const educationData: Education[] = [
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
