import type { MetadataRoute } from "next";
import { articleCanonical, getArticles, usesDemoArticles } from "./lib/blog";
export const revalidate = 60;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    { url: "https://devlynctech.com/", changeFrequency: "weekly", priority: 1 },
    ...["faqs", "blog", "terminos-y-condiciones"].map((path) => ({
      url: "https://devlynctech.com/" + path,
    })),
  ];
  if (usesDemoArticles) return routes;
  let page = 1;
  while (true) {
    const result = await getArticles(page);
    routes.push(
      ...result.articles.filter((a) => !a.seo?.noIndex &&
        articleCanonical(a) === "https://devlynctech.com/blog/" + a.slug).map((a) => ({
        url: "https://devlynctech.com/blog/" + a.slug,
        lastModified: a.updatedAt,
      })),
    );
    if (page >= result.pageCount || result.state !== "ready") break;
    page++;
  }
  return routes;
}
