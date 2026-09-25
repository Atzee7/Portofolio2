import Image from "next/image";
import { SocialLinks } from "@/components/ui/social-links";
import { CertificationsSection } from "@/components/sections/certifications-section";

export function ProfileSection() {
  return (
    <aside className="profile-sidebar" id="home" aria-labelledby="profile-title">
      <div className="sidebar-main">
        <div className="profile-visual">
          <div className="portrait-frame">
            <Image
              className="portrait-image"
              src="/images/profile.jpg"
              alt="Foto Muhammad Yusril Islam"
              fill
              sizes="(max-width: 640px) 118px, (max-width: 1023px) 150px, 190px"
              fetchPriority="high"
            />
          </div>
        </div>
        <h1 id="profile-title">Muhammad<br />Yusril Islam</h1>
        <p className="profile-role">Front-End Web Developer</p>
        <p className="profile-location">Malang, Indonesia</p>
        <p className="profile-description">Fresh graduate in Informatics with an interest in front-end web development. I enjoy building responsive, thoughtful, and user-friendly web experiences.</p>
        <CertificationsSection />
      </div>
      <div className="sidebar-social"><SocialLinks /></div>
    </aside>
  );
}
