import { technologies, technologyCategories } from "@/data/tech-stack";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechLogo } from "@/components/ui/tech-logo";

export function TechStackSection() {
  return (
    <section className="content-section tech-section" id="stack">
      <SectionHeading number="02" eyebrow="TOOLS OF THE TRADE" title="Tech stack" description="Technologies I’ve worked with across my projects." />
      <div className="tech-grid">
        {technologyCategories.map((category) => (
          <div className="tech-category" key={category}><h3>{category}</h3><div className="tech-items">{technologies.filter((technology) => technology.category === category).map((technology) => <span className="tech-pill" key={technology.name}><TechLogo name={technology.name} />{technology.name}</span>)}</div></div>
        ))}
      </div>
    </section>
  );
}
