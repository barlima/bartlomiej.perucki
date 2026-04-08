export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url: string;
  skills: string[];
};

export const certificationsData: Certification[] = [
  {
    name: "AWS Fundamentals",
    issuer: "Coursera",
    date: "2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/K8CQEX6UKQS5",
    skills: [
      "AWS",
      "CloudFront",
      "Architecture",
      "Data migration",
    ],
  },
  {
    name: "Introduction to agent skills",
    issuer: "Anthropic",
    date: "2026",
    url: "https://verify.skilljar.com/c/cihrmuypkqsx",
    skills: [
      "Claude Code",
      "Skills",
    ],
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2026",
    url: "https://verify.skilljar.com/c/xcpwtk2auncc",
    skills: [
      "Claude Code",
      "MCP",
      "AIPE"
    ],
  },
  {
    name: "Building Data Lakes on AWS",
    issuer: "Coursera",
    date: "2026",
    url: "https://coursera.org/share/7025aa5d3e895fc9a25518705b7e6544",
    skills: [
      "AWS S3",
      "AWS Athena",
      "AWS Glue",
      "AWS Lake Formation",
    ],
  },
  {
    name: "AWS Cloud Technical Essentials",
    issuer: "Coursera",
    date: "2025",
    url: "https://www.coursera.org/account/accomplishments/verify/AV9GOCRNEJ1B?utm_product=course",
    skills: [
      "EC2",
      "ECS",
      "S3",
      "RDS",
      "DynamoDB",
      "AWS Lambda",
      "VPC",
      "IAM",
      "CloudWatch",
    ],
  },
  {
    name: "IBM Back-end JavaScript Developer",
    issuer: "Coursera",
    date: "2025",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/E7I02BABMRQX",
    skills: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "NoSQL",
      "MongoDB",
      "Docker",
    ],
  },
  {
    name: "Advanced TypeScript Patterns",
    issuer: "TotalTypeScript.com",
    date: "2023",
    url: "https://res.cloudinary.com/total-typescript/image/upload/v1741684228/certificate/ca47c99d-01c5-4b9e-b1d8-eac9f6c75009/advanced-typescript-patterns.png",
    skills: ["TypeScript"],
  },
  {
    name: "Type Transformations",
    issuer: "TotalTypeScript.com",
    date: "2023",
    url: "https://res.cloudinary.com/total-typescript/image/upload/v1741684068/certificate/ca47c99d-01c5-4b9e-b1d8-eac9f6c75009/type-transformations.png",
    skills: ["TypeScript"],
  },
  {
    name: "TypeScript Generics",
    issuer: "TotalTypeScript.com",
    date: "2023",
    url: "https://res.cloudinary.com/total-typescript/image/upload/v1741683917/certificate/ca47c99d-01c5-4b9e-b1d8-eac9f6c75009/typescript-generics.png",
    skills: ["TypeScript"],
  },
  {
    name: "React Web Developer Course (with Redux)",
    issuer: "Udemy",
    date: "2018",
    url: "https://www.udemy.com/certificate/UC-4PHENPB9/",
    skills: ["JavaScript", "React.js", "Redux", "HTML", "CSS", "Jest"],
  },
];
