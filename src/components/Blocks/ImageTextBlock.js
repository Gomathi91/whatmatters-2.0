import React from "react";

export default function ImageTextBlock({ data }) {
  const imageUrl = data?.image?.fields?.file?.url;
  const imageTitle = data?.image?.fields?.title || "Image";
  const title = data?.title || "";
  const text = data?.text || data?.description || data?.content;

  return (
    <section className="py-5 my-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            {imageUrl ? (
              <div className="image-wrapper">
                <img
                  src={`https:${imageUrl}`}
                  alt={imageTitle}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div className="bg-light text-center py-5 text-muted rounded-4">
                No Image Available
              </div>
            )}
          </div>

          {/* Text */}
          <div className="col-md-6">
            {title && <h2 className="imgtext-title">{title}</h2>}
            <p className="imgtext-block-para">
              {text || "No text content available."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
