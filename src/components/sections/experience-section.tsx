import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section className="content-section experience-section" id="experience">
      <SectionHeading number="01" eyebrow="THE PATH SO FAR" title="Working experience" description="A little about where I’ve been learning and building." />
      <div className="experience-list">
        {experiences.map((item) => (
          <article className="experience-item" key={`${item.company}-${item.role}`}>
            <div className="experience-marker" aria-hidden="true">↗</div>
            <div className="experience-main"><h3>{item.role}</h3>{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.company} ↗</a> : <p>{item.company}</p>}</div>
            <span className="experience-period">{item.period ?? "Internship"}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
