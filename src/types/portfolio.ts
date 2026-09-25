export type Experience = {
  company: string;
  role: string;
  period?: string;
  url?: string;
};

export type Technology = {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Database" | "Tools";
};

export type Project = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
};
