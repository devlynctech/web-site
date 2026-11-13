import Link from "next/link";
export default function PageIntro({
  label,
  title,
  accent,
  description,
}: {
  label: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <section className="resource-hero">
      <div className="resource-wrap">
        <Link href="/" className="resource-eyebrow">
          DEVLYNC / {label}
        </Link>
        <div className="resource-hero-grid">
          <h1>
            {title}
            <br />
            <span>{accent}</span>
          </h1>
          <p>{description}</p>
        </div>
        <div className="resource-rule">
          <span>// BUILT ON EXPERIENCE</span>
          <span>IDEAS. ANSWERS. FORWARD.</span>
        </div>
      </div>
    </section>
  );
}
