import "../components/resources/resources.css";
import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "../components/resources/PageIntro";
import ResourceCTA from "../components/resources/ResourceCTA";
import ArticleCard from "../components/resources/ArticleCard";
import { getArticles, usesDemoArticles } from "@/app/lib/blog";
export const metadata: Metadata = {
  title: "Blog & insights",
  robots: usesDemoArticles ? { index: false, follow: true } : undefined,
  description:
    "Perspectives on software engineering, nearshore collaboration, and building better digital products.",
  alternates: { canonical: "/blog" },
};
const categories = ["Engineering", "Product", "Nearshore", "Company"];
export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const q = (params.q || "").slice(0, 200);
  const category = categories.includes(params.category || "")
    ? params.category!
    : "";
  const page = Math.max(
    1,
    Math.min(10000, Number.parseInt(params.page || "1", 10) || 1),
  );
  const result = await getArticles(page, q, category);
  const href = (p: number, c = category) =>
    "/blog?" +
    new URLSearchParams({
      ...(q ? { q } : {}),
      ...(c ? { category: c } : {}),
      page: String(p),
    }).toString();
  return (
    <>
      <PageIntro
        label="Blog"
        title="Fresh thinking."
        accent="Real impact."
        description="Notes from the people who build. Ideas on engineering, products, and working better together."
      />
      <section className="resource-wrap resource-section">
        <div className="resource-tools">
          <nav aria-label="Article categories" className="blog-filters">
            {["", ...categories].map((c) => (
              <Link
                key={c}
                href={href(1, c)}
                aria-current={c === category ? "page" : undefined}
              >
                {c || "All articles"}
              </Link>
            ))}
          </nav>
          <form action="/blog" className="resource-search">
            <label htmlFor="blog-search">Search articles</label>
            <input
              id="blog-search"
              name="q"
              type="search"
              defaultValue={q}
              placeholder="Find an insight…"
            />
            {category && (
              <input type="hidden" name="category" value={category} />
            )}
            <button type="submit">Search ↗</button>
          </form>
        </div>
        <p className="resource-eyebrow mb-8" aria-live="polite">
          // THE LATEST / {result.total} ARTICLES
        </p>
        {result.articles.length ? (
          <div className="article-grid">
            {result.articles.map((a, i) => (
              <ArticleCard article={a} index={i} key={a.documentId} />
            ))}
          </div>
        ) : (
          <div className="resource-empty">
            <span className="text-orange text-5xl" aria-hidden="true">
              {result.state === "unavailable" ? "↻" : "{ }"}
            </span>
            <h2>
              {result.state === "unavailable"
                ? "We’ll be right back."
                : q || category
                  ? "No articles found."
                  : "The next idea is on its way."}
            </h2>
            <p>
              {result.state === "unavailable"
                ? "Our journal is temporarily unavailable. Please try again shortly."
                : q || category
                  ? "Try another search or explore all articles."
                  : "Our team is preparing perspectives on engineering, products, and nearshore collaboration. Check back soon."}
            </p>
            {(q || category) && <Link href="/blog">View all articles ↗</Link>}
          </div>
        )}
        {result.pageCount > 1 && (
          <nav aria-label="Blog pagination" className="blog-pagination">
            {page > 1 && <Link href={href(page - 1)}>← Previous</Link>}
            <span>
              Page {page} of {result.pageCount}
            </span>
            {page < result.pageCount && (
              <Link href={href(page + 1)}>Next →</Link>
            )}
          </nav>
        )}
      </section>
      <ResourceCTA />
    </>
  );
}
