const links = [
  { label: "GitHub", href: "https://github.com/", mark: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", mark: "in" },
];

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social media">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={`${link.label} (opens in a new tab)`}>
          <span className="social-mark" aria-hidden="true">{link.mark}</span>{link.label}<span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
