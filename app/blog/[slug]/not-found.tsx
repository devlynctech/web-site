import Link from "next/link";
export default function NotFound() {
  return (
    <section className="resource-wrap resource-empty">
      <p className="resource-eyebrow">404 / ARTICLE NOT FOUND</p>
      <h1>This story isn’t here.</h1>
      <p>It may have moved or is no longer published.</p>
      <Link href="/blog" className="resource-button">
        Back to insights ↗
      </Link>
    </section>
  );
}
