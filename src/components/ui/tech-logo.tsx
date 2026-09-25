import {
  siGit,
  siGithub,
  siJavascript,
  siLaravel,
  siMysql,
  siPhp,
  siTailwindcss,
  type SimpleIcon,
} from "simple-icons";

const icons: Record<string, SimpleIcon> = {
  JavaScript: siJavascript,
  PHP: siPhp,
  "Tailwind CSS": siTailwindcss,
  Laravel: siLaravel,
  MySQL: siMysql,
  Git: siGit,
  GitHub: siGithub,
};

export function TechLogo({ name }: { name: string }) {
  const icon = icons[name];

  if (!icon) {
    return <span className="tech-logo blade-logo" aria-hidden="true">B</span>;
  }

  const color = name === "GitHub" ? "#f4f4f5" : `#${icon.hex}`;

  return (
    <svg className="tech-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path fill={color} d={icon.path} />
    </svg>
  );
}
