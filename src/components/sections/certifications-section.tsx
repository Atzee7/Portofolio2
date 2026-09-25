import { certifications } from "@/data/certifications";

const MAX_CERTIFICATIONS = 3;

export function CertificationsSection() {
  const visibleCertifications = certifications.slice(0, MAX_CERTIFICATIONS);

  return (
    <section className="profile-certifications" aria-labelledby="certifications-title">
      <h2 id="certifications-title">Certifications</h2>
      {visibleCertifications.length > 0 ? (
        <ul className="certification-list">
          {visibleCertifications.map((certification) => {
            const content = (
              <>
                <span className="certification-mark" aria-hidden="true">✓</span>
                <span className="certification-copy">
                  <strong>{certification.name}</strong>
                  <span>{certification.issuer}{certification.year ? ` · ${certification.year}` : ""}</span>
                </span>
                {certification.credentialUrl && <span className="certification-link" aria-hidden="true">↗</span>}
              </>
            );

            return (
              <li className="certification-item" key={`${certification.name}-${certification.issuer}`}>
                {certification.credentialUrl ? (
                  <a href={certification.credentialUrl} target="_blank" rel="noreferrer" aria-label={`${certification.name}, ${certification.issuer} (opens in a new tab)`}>
                    {content}
                  </a>
                ) : <div className="certification-content">{content}</div>}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="certification-empty">No certifications added yet.</p>
      )}
    </section>
  );
}
