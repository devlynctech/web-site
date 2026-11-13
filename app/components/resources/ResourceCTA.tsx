import Link from "next/link";
export default function ResourceCTA() {
  return (
    <section className="resource-cta">
      <div className="resource-wrap">
        <div>
          <p className="resource-eyebrow">// Start a project</p>
          <h2>
            Ready to build
            <br />
            <span>something great?.</span>
          </h2>
        </div>
        <Link href="/#contact" className="resource-button">
          Start a project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
