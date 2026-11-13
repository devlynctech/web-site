import "server-only";
import { cache } from "react";
import { demoArticles } from "./blog-demo";

// Local mode is the default while the blog design is being reviewed.
export const usesDemoArticles = process.env.BLOG_SOURCE !== "strapi";
export type Block = {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  url?: string;
  level?: number;
  format?: string;
  children?: Block[];
  image?: { url: string; alternativeText?: string; caption?: string };
};
export type Article = {
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  blogCategory?: Category | null;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalURL?: string;
    noIndex?: boolean;
    shareImage?: { url: string; alternativeText?: string };
  } | null;
  author: string;
  content: Block[];
  publishedAt: string;
  updatedAt: string;
  cover?: { url: string; alternativeText?: string };
};
export type Category = { documentId: string; name: string; slug: string };
export function articleCategory(article: Article) {
  return article.blogCategory?.name || article.category || "Uncategorized";
}
export function articleCanonical(article: Article) {
  const fallback = "https://devlynctech.com/blog/" + article.slug;
  try {
    const url = new URL(article.seo?.canonicalURL?.trim() || fallback);
    return ["https:", "http:"].includes(url.protocol) ? url.href : fallback;
  } catch {
    return fallback;
  }
}
export const getCategories = cache(async (): Promise<Category[]> => {
  if (usesDemoArticles) {
    return [...new Set(demoArticles.map((a) => a.category))].map((name) => ({
      documentId: name, name, slug: name,
    }));
  }
  if (!process.env.STRAPI_URL) return [];
  const categories: Category[] = [];
  try {
    for (let page = 1; ; page++) {
      const url = new URL("/api/categories", process.env.STRAPI_URL);
      url.search = new URLSearchParams({
        "sort[0]": "name:asc", "pagination[page]": String(page),
        "pagination[pageSize]": "100",
      }).toString();
      const response = await fetch(url, {
        headers: process.env.STRAPI_API_TOKEN
          ? { Authorization: "Bearer " + process.env.STRAPI_API_TOKEN } : {},
        next: { revalidate: 60 }, signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) throw new Error("Category service unavailable");
      const body = await response.json();
      if (!Array.isArray(body.data)) throw new Error("Invalid categories");
      categories.push(...body.data);
      if (page >= (body.meta?.pagination?.pageCount || 1)) break;
    }
    return categories;
  } catch {
    console.error("Unable to load categories from Strapi.");
    return [];
  }
});
export type ArticleResult = {
  articles: Article[];
  total: number;
  pageCount: number;
  state: "ready" | "unconfigured" | "unavailable";
};
export function mediaURL(path?: string) {
  if (!path) return undefined;
  try {
    const url = new URL(path, process.env.STRAPI_URL);
    return ["http:", "https:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}
export const getArticles = cache(
  async (
    page = 1,
    query = "",
    category = "",
    slug = "",
  ): Promise<ArticleResult> => {
    if (usesDemoArticles) {
      const search = query.trim().toLowerCase();
      const matches = demoArticles.filter(
        (article) =>
          (!category || article.category === category) &&
          (!slug || article.slug === slug) &&
          (!search ||
            (article.title + " " + article.excerpt)
              .toLowerCase()
              .includes(search)),
      );
      const pageSize = 9;
      return {
        articles: matches.slice((page - 1) * pageSize, page * pageSize),
        total: matches.length,
        pageCount: Math.ceil(matches.length / pageSize),
        state: "ready",
      };
    }
    if (!process.env.STRAPI_URL)
      return { articles: [], total: 0, pageCount: 0, state: "unconfigured" };
    const params = new URLSearchParams({
      status: "published",
      "sort[0]": "publishedAt:desc",
      "populate[cover]": "true",
      "populate[blogCategory]": "true",
      "populate[seo][populate][shareImage]": "true",
      "pagination[page]": String(page),
      "pagination[pageSize]": "9",
    });
    if (query) {
      params.set("filters[$or][0][title][$containsi]", query);
      params.set("filters[$or][1][excerpt][$containsi]", query);
    }
    if (category) params.set("filters[blogCategory][slug][$eq]", category);
    if (slug) params.set("filters[slug][$eq]", slug);
    try {
      const url = new URL("/api/articles", process.env.STRAPI_URL);
      url.search = params.toString();
      const response = await fetch(url, {
        headers: process.env.STRAPI_API_TOKEN
          ? { Authorization: "Bearer " + process.env.STRAPI_API_TOKEN }
          : {},
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) throw new Error("CMS response " + response.status);
      const body = await response.json();
      if (!Array.isArray(body.data)) throw new Error("Invalid CMS response");
      return {
        articles: body.data,
        total: body.meta.pagination.total,
        pageCount: body.meta.pagination.pageCount,
        state: "ready",
      };
    } catch {
      console.error("Unable to load published articles from Strapi.");
      return { articles: [], total: 0, pageCount: 0, state: "unavailable" };
    }
  },
);
export const getArticle = cache(async (slug: string) => {
  const result = await getArticles(1, "", "", slug);
  if (result.state === "unavailable")
    throw new Error("Article service temporarily unavailable");
  return result.articles[0];
});
export function articleDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}
export function readingTime(blocks: Block[]) {
  const text = (nodes: Block[]): string =>
    nodes.map((b) => (b.text || "") + " " + text(b.children || [])).join(" ");
  return Math.max(1, Math.ceil(text(blocks).trim().split(/\s+/).length / 200));
}
