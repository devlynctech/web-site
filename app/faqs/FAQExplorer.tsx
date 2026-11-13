"use client";
import { useState } from "react";
import { faqs } from "./data";
export default function FAQExplorer() {
  const [category, setCategory] = useState("All questions");
  const [query, setQuery] = useState("");
  const filtered = faqs.filter(
    (f) =>
      (category === "All questions" || f.category === category) &&
      (f.question + " " + f.answer).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <section className="resource-wrap resource-section">
      <div className="resource-tools">
        <label className="resource-search">
          Search questions
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What would you like to know?"
          />
        </label>
        <p className="resource-eyebrow" aria-live="polite">
          {filtered.length} QUESTIONS
        </p>
      </div>
      <div className="faq-layout">
        <nav aria-label="Question categories" className="resource-filters">
          {["All questions", ...new Set(faqs.map((f) => f.category))].map(
            (c) => (
              <button
                key={c}
                aria-pressed={c === category}
                onClick={() => setCategory(c)}
              >
                {c}
                <span aria-hidden="true">↗</span>
              </button>
            ),
          )}
        </nav>
        <div>
          {filtered.map((f, i) => (
            <details
              name="faq-questions"
              className="faq-item"
              key={f.question}
            >
              <summary>
                <span className="resource-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {f.question}
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
          {!filtered.length && (
            <div className="resource-empty">
              <h2>No matching questions.</h2>
              <p>Try another search or get in touch with our team.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("All questions");
                }}
              >
                Clear filters ↗
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
