"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const SECTION_IDS = ["experience", "stack", "projects"] as const;
const TOOLBAR_HEIGHT = 58;

export function SectionScrollToolbar() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 640px)");
    let frame = 0;

    function updateActiveSection() {
      if (!mobile.matches) {
        setActiveTitle((current) => (current === null ? current : null));
        return;
      }

      const experienceTitle = document.querySelector<HTMLElement>(
        "#experience .section-heading h2",
      );

      if (!experienceTitle || experienceTitle.getBoundingClientRect().bottom > TOOLBAR_HEIGHT) {
        setActiveTitle((current) => (current === null ? current : null));
        return;
      }

      let nextTitle: string | null = null;

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        const heading = section?.querySelector<HTMLElement>(".section-heading h2");

        if (section && heading && section.getBoundingClientRect().top <= TOOLBAR_HEIGHT) {
          nextTitle = heading.textContent?.trim() ?? nextTitle;
        }
      }

      setActiveTitle((current) => (current === nextTitle ? current : nextTitle));
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    mobile.addEventListener("change", scheduleUpdate);
    scheduleUpdate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      mobile.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  return (
    <div className={`content-toolbar${activeTitle ? " has-active-title" : ""}`}>
      <span className="mobile-section-title" aria-hidden="true">
        {activeTitle}
      </span>
      <ThemeToggle />
    </div>
  );
}
