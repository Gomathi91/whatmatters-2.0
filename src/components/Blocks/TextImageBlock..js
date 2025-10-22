import React from "react";

export default function TextImageBlock({ data }) {
  const imageUrl = data?.image?.fields?.file?.url;
  const imageTitle = data?.image?.fields?.title || "Image";
  const title = data?.title || "";
  const text = data?.text || data?.description || data?.content;

  return (
    <section className="py-5 my-5 bg-white">
      <div className="container">
        <div className="row align-items-center">

          {/* Text */}
          <div className="col-md-6">
            {title && <h2 className="section-title"  style={{color:"#e23123",fontSize:"34px"}}>{title}</h2>}
            <p className="" style={{ fontSize: "1.5rem",fontWeight:"normal", lineHeight: "2",color:"#b7adac" }}>
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
              <div className="bg-light text-center py-5 text-muted rounded-4">
                No Image Available
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
