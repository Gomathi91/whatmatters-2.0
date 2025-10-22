import React from 'react';
import ReactMarkdown from "react-markdown";

export default function TextBlock({ data }) {
  const text = data?.text || data?.content || data?.description || "";

  return (
    <section className="py-5">
      <div className="container">
        <div className="mx-auto text-center fulltext-content" style={{ maxWidth: "750px" }}>
          <ReactMarkdown>
          {text || "No text content available."}
        </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
