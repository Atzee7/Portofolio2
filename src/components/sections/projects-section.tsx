import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section className="content-section projects-section" id="projects">
      <SectionHeading number="03" eyebrow="A FEW THINGS I’VE MADE" title="Latest projects" description="Selected work that brings ideas to life through code." />
      {projects.length ? <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div> : <div className="projects-empty"><span className="empty-spark">✳</span><div><h3>Projects are on their way.</h3><p>Check back soon to see what I’ve been working on.</p></div><span className="empty-note">NEXT UP · 2026</span></div>}
    </section>
  );
}
