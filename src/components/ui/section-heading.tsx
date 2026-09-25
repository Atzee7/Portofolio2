type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ number, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{number}</span><span className="kicker-line" />{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
