"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="resource-wrap resource-empty">
      <h1>Our journal will be back shortly.</h1>
      <p>We couldn’t load this article. Please try again.</p>
      <button className="resource-button" onClick={reset}>
        Try again ↻
      </button>
    </section>
  );
}
