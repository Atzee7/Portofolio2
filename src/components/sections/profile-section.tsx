import { SocialLinks } from "@/components/ui/social-links";
import { CertificationsSection } from "@/components/sections/certifications-section";

export function ProfileSection() {
  return (
    <aside className="profile-sidebar" id="home" aria-labelledby="profile-title">
      <div className="sidebar-main">
        <div className="profile-visual" role="img" aria-label="Ilustrasi inisial Muhammad Yusril Islam">
        <div className="portrait-frame">
          <div className="portrait-grid" />
          <div className="portrait-sun" />
          <div className="portrait-initials">MY<span>.</span></div>
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
