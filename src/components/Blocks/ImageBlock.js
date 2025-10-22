import React from 'react';

function ImageBlock({ data }) {
  const imageUrl = data?.image?.fields?.file?.url;
  const imageTitle = data?.image?.fields?.title || data?.title || "Image";

  return (
    <section className="imageblock-section bg-white">
      <div className="container" style={{width:"100%",maxWidth:"100%"}}>
        <div className="image-wrapper">
          {imageUrl ? (
            <img
              src={`https:${imageUrl}`}
              alt={imageTitle}
              className="img-fluid w-100"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="bg-light text-center  text-muted">
              No Image Available
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ImageBlock;
