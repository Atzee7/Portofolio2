import Image from "next/image";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className={`project-image project-art-${index % 3}`}>
        {project.image ? <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 560px) 100vw, 50vw" className="project-screenshot" /> : <>
          <div className="project-browser"><span /><span /><span /><i /></div>
          <div className="project-image-label">{String(index + 1).padStart(2, "0")} / SELECTED WORK</div>
          <div className="project-image-title">{project.name}<b>.</b></div>
        </>}
      </div>
      <div className="project-info"><div><span className="project-index">{String(index + 1).padStart(2, "0")}</span><h3>{project.name}</h3></div><p>{project.description}</p>
        <div className="project-bottom"><div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-links">{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗</a>}</div></div>
      </div>
    </article>
  );
}
