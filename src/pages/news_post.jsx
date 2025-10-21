import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import NavBar from "../components/navbar.jsx";
import remarkGfm from "remark-gfm";

export default function NewsPost() {
  const { slug } = useParams();
  const [meta, setMeta] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const isProd =
          (typeof import.meta !== "undefined" &&
            import.meta.env &&
            import.meta.env.PROD) ||
          process.env.NODE_ENV === "production";
        const url = isProd
          ? `https://raw.githubusercontent.com/The-Ezra-Company/newsletter/main/${encodeURIComponent(
              slug,
            )}/main.md`
          : `/src/news/${slug}/main.md`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        const [data, body] = parseFrontMatter(text);
        setMeta(data);
        setContent(body);
      } catch (e) {
        console.error(e);
        setMeta({});
        setContent(`# Not found\n\nCouldn't load this post.`);
      }
    })();
  }, [slug]);

  useEffect(() => {
    if (!meta) return;
    if (meta.title) document.title = `${meta.title} - The Ezra Company`;

    const set = (name, content) => {
      if (!content) return;
      let el = document.querySelector(
        `meta[name="${name}"], meta[property="${name}"]`,
      );
      if (!el) {
        el = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("article:")) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    set("description", meta.description);
    set("og:title", meta.title);
    set("og:description", meta.description);
    if (meta.image) set("og:image", meta.image);
    set("article:published_time", meta.date);
  }, [meta]);

  function LinkOrPdf({ href = "", children }) {
    const isPdf =
      typeof href === "string" && href.toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      return (
        <a
          href={href}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    const titleText =
      (Array.isArray(children) ? children.join(" ") : children) ||
      "PDF document";

    return (
      <div className="my-6">
        <div className="h-[80vh] w-full overflow-hidden rounded-xl border border-white/10">
          <iframe
            src={href}
            title={String(titleText)}
            className="h-full w-full"
            loading="lazy"
          />
        </div>
        <div className="mt-2 text-[8px] text-gray-400">
          If the PDF doesn't load,{" "}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            open it in a new tab
          </a>
          .
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavBar />
      </div>
      <div className="mx-auto mt-[14vh] max-w-2xl">
        <p className="libre-franklin-bold mb-2 text-[32px] font-bold lg:text-[48px]">
          {meta.title}
        </p>
        {meta.date && <p className="mb-8 text-gray-400">{meta.date}</p>}
        <hr />
        <br />
        <br />
        <br />
        <article className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: LinkOrPdf,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

function parseFrontMatter(raw) {
  if (!raw.startsWith("---")) return [{}, raw];
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return [{}, raw];
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trim();
  const data = Object.fromEntries(
    fm.split("\n").map((line) => {
      const [k, ...rest] = line.split(":");
      return [k.trim(), rest.join(":").trim().replace(/^"|"$/g, "")];
    }),
  );
  return [data, body];
}
