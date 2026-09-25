import { CollaborationSection } from "@/components/sections/collaboration-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { ProfileSection } from "@/components/sections/profile-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { SectionScrollToolbar } from "@/components/ui/section-scroll-toolbar";

export default function Home() {
  return (
    <main className="portfolio-layout">
      <ProfileSection />
      <div className="content-pane" id="content-scroll">
        <div className="content-inner">
          <SectionScrollToolbar />
          <CollaborationSection />
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
