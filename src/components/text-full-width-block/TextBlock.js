import React from 'react';
import ReactMarkdown from "react-markdown";

export default function TextBlock({ data }) {
  const title = data?.title || "Text Block";
  const text = data?.text || data?.content || data?.description || "";

  console.log("TextBlock data:", data);

  return (
    <div className="w-100 bg-light py-5 text-center">
      {/* Optional block title */}
      {/* <h2>{title}</h2> */}

      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <ReactMarkdown>
          {text || "No text content available."}
        </ReactMarkdown>
      </div>
    </div>
  );
}
