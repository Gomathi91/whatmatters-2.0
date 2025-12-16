import React from 'react';
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function TextBlock({ data }) {
  const text = data?.text || data?.content || data?.description || "";

  return (
    <section className="textblock-section py-5">
      <div className="container">
        <div className="mx-auto text-center fulltext-content">
          <ReactMarkdown>
          {text || "No text content available."}
        </ReactMarkdown>
          {data?.buttonUrl && (
            <Link href={data.buttonUrl} className="btn btn-outline-light">
              {data.buttonLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
