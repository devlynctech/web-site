import Link from "next/link";
import {
  type Article,
  articleDate,
  mediaURL,
  readingTime,
} from "@/app/lib/blog";
export default function ArticleCard({
  article,
  index = 0,
}: {
  article: Article;
  index?: number;
}) {
  const cover = mediaURL(article.cover?.url);
  return (
    <Link href={"/blog/" + article.slug} className="article-card">
      <div className="article-art">
        {cover ? (
          /* eslint-disable-next-line @next/next/no-img-element */ <img
            src={cover}
            alt={article.cover?.alternativeText || ""}
          />
        ) : (
          <>
            <span className="article-art-symbol" aria-hidden="true">
              {["{ }", "↗", "</>"][index % 3]}
            </span>
            <span className="resource-eyebrow">DEVLYNC / INSIGHTS</span>
          </>
        )}
      </div>
      <div className="article-card-body">
        <p className="resource-eyebrow">
          {article.category}{" "}
          <span> / {readingTime(article.content)} MIN READ</span>
        </p>
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        <div className="article-card-bottom">
          <time dateTime={article.publishedAt}>
            {articleDate(article.publishedAt)}
          </time>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
    </Link>
  );
}
