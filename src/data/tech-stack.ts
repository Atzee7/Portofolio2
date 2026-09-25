import type { Technology } from "@/types/portfolio";

export const technologies: Technology[] = [
  { name: "JavaScript", category: "Languages" },
  { name: "PHP", category: "Languages" },
  { name: "Blade", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Laravel", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
];

export const technologyCategories = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
] as const;
