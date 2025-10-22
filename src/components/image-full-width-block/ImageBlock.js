// ImageBlock.js
import React from 'react'

function ImageBlock({ data }) {
  const imageUrl = data?.image?.fields?.file?.url;
  const imageTitle = data?.image?.fields?.title || data?.title || "Image";
  
  console.log("ImageBlock data:", data);
  
  return (
    
    <div style={{marginTop:"100px"}}>
      <div className="d-flex justify-content-center">
        <img
          src={imageUrl ? `https:${imageUrl}` : "No Image in Contnetful"}
          alt={imageTitle}
          className="img-fluid"
          style={{ objectFit: "cover"}}
        />
      </div>
    </div>
  );
}

export default ImageBlock;