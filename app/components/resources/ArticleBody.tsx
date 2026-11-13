import { type Block, mediaURL } from "@/app/lib/blog";
import type { ReactNode } from "react";
function safeLink(url?: string) {
  if (!url) return undefined;
  return /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(url) ? url : undefined;
}
function Node({ node }: { node: Block }) {
  const children = node.children?.map((n, i) => <Node node={n} key={i} />);
  if (node.type === "text") {
    let text: ReactNode = node.text;
    if (node.code) text = <code>{text}</code>;
    if (node.bold) text = <strong>{text}</strong>;
    if (node.italic) text = <em>{text}</em>;
    if (node.underline) text = <u>{text}</u>;
    if (node.strikethrough) text = <s>{text}</s>;
    return <>{text}</>;
  }
  switch (node.type) {
    case "heading":
      switch (node.level) {
        case 1:
        case 2:
          return <h2>{children}</h2>;
        case 3:
          return <h3>{children}</h3>;
        case 4:
          return <h4>{children}</h4>;
        case 5:
          return <h5>{children}</h5>;
        default:
          return <h6>{children}</h6>;
      }
    case "list":
      return node.format === "ordered" ? (
        <ol>{children}</ol>
      ) : (
        <ul>{children}</ul>
      );
    case "list-item":
      return <li>{children}</li>;
    case "quote":
      return <blockquote>{children}</blockquote>;
    case "code":
      return (
        <pre>
          <code>{children}</code>
        </pre>
      );
    case "link":
      return <a href={safeLink(node.url)}>{children}</a>;
    case "image": {
      const src = mediaURL(node.image?.url);
      return src ? (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={node.image?.alternativeText || ""} />
          {node.image?.caption && <figcaption>{node.image.caption}</figcaption>}
        </figure>
      ) : null;
    }
    default:
      return <p>{children}</p>;
  }
}
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="article-prose">
      {blocks.map((node, i) => (
        <Node node={node} key={i} />
      ))}
    </div>
  );
}
