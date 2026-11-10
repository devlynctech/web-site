import "../../components/resources/resources.css";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticle,
  articleDate,
  mediaURL,
  readingTime,
  usesDemoArticles,
} from "@/app/lib/blog";
import ArticleBody from "@/app/components/resources/ArticleBody";
import ResourceCTA from "@/app/components/resources/ResourceCTA";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) return { title: "Article not found" };
  const image = mediaURL(a.cover?.url);
  return {
    robots: usesDemoArticles ? { index: false, follow: true } : undefined,
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: "/blog/" + a.slug },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
      authors: [a.author],
      ...(image ? { images: [image] } : {}),
    },
  };
}
export default async function Article({ params }: Props) {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) notFound();
  const cover = mediaURL(a.cover?.url);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.publishedAt,
    dateModified: a.updatedAt,
    author: { "@type": "Person", name: a.author },
    publisher: { "@type": "Organization", name: "Devlync" },
    mainEntityOfPage: "https://devlynctech.com/blog/" + a.slug,
    ...(cover ? { image: cover } : {}),
  };
  return (
    <>
      <article>
        <header className="resource-hero">
          <div className="resource-wrap article-heading">
            <Link href="/blog" className="resource-eyebrow">
              ← ALL INSIGHTS / {a.category}
            </Link>
            <h1>{a.title}</h1>
            <p>{a.excerpt}</p>
            <div className="article-meta">
              <span>By {a.author}</span>
              <time dateTime={a.publishedAt}>{articleDate(a.publishedAt)}</time>
              <span>{readingTime(a.content)} min read</span>
            </div>
          </div>
        </header>
        <div className="resource-wrap article-content">
          {cover && (
            /* eslint-disable-next-line @next/next/no-img-element */ <img
              className="article-cover"
              src={cover}
              alt={a.cover?.alternativeText || ""}
            />
          )}
          <div className="article-reading">
            <aside>
              <p className="resource-eyebrow">// THE JOURNAL</p>
              <p>Ideas worth building on.</p>
              <Link href="/blog">Explore all articles ↗</Link>
            </aside>
            <ArticleBody blocks={a.content} />
          </div>
          <Link href="/blog" className="resource-button">
            ← Back to insights
          </Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\u003c"),
          }}
        />
      </article>
      <ResourceCTA />
    </>
  );
}
