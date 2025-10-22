// ImageTextBlock.js
import React from "react";

export default function ImageTextBlock({ data }) {
  const imageUrl = data?.image?.fields?.file?.url;
  const imageTitle = data?.image?.fields?.title || "Image";
  const title = data?.title || "No Title";
  const text = data?.text || data?.description || data?.content;
  console.log("text",text);
  
  console.log("ImageTextBlock data:", data);
  
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">{title}</h1>

      <div className="d-flex flex-column flex-md-row align-items-center">
        <img
          src={imageUrl ? `https:${imageUrl}` : "No Image"}
          alt={imageTitle}
          className="img-fluid rounded me-md-4 mb-3 mb-md-0"
          style={{ width: "300px", height: "auto", objectFit: "cover" }}
        />

        <p className="flex-grow-1">
          {text || "No text content available."}
        </p>
      </div>
    </div>
  );
}
