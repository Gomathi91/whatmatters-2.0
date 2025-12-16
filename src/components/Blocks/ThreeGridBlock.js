import React from "react";

export default function ThreeGridBlock({ data }) {
  const cards = data?.selectStories || [];


  return (
    <section className="threegridblock-section py-5">
      <div className="container">
        <div className="row align-items-stretch g-4">

          {cards.map((card, index) => {
            // Access the Story entry's fields
            const imageUrl = card?.fields?.image?.fields?.file?.url;
            const imageTitle = card?.fields?.image?.fields?.title || card?.fields?.title || "Story image";
            const title = card?.fields?.title || "";
            const content = card?.fields?.content || "";

            return (
              <div key={card?.sys?.id || index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 hover-lift">
                  {imageUrl ? (
                    <img
                      src={`https:${imageUrl}`}
                      className="card-img-top"
                      alt={imageTitle}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className="bg-light text-center text-muted">
                      No Image Available
                    </div>
                  )}
                  <div className="card-body d-flex flex-column">
                    {title && (
                      <h2 className="card-title">{title}</h2>
                    )}
                    {content && (
                      <p className="card-text">
                        {content}
                      </p>
                    )}
                    <div className="card-date">
                      {new Date(card.sys.updatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}