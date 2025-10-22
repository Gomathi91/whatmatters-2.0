import React from "react";

export default function ImageTextBlock({ data }) {
  const imageUrl = data?.image?.fields?.file?.url;
  const imageTitle = data?.image?.fields?.title || "Image";
  const title = data?.title || "";
  const text = data?.text || data?.description || data?.content;

  return (
    <section className="imagetextblock-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

        {/* Text */}
          <div className="col-md-6">
            {title && <h2 className="imgtext-title">{title}</h2>}
            <p className="imgtext-block-para">
              {text || "No text content available."}
            </p>
          </div>

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
              <div className="bg-light text-center text-muted rounded-4">
                No Image Available
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
