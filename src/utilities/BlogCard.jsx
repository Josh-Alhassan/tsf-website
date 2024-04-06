import React from "react";

import "./BlogCard.css";
import SecondaryButton from "../components/SecondaryButton";

function BlogCard({ image, title, description }) {
  return (
    <div className="blog-card">
      <img src={image} alt="Blog blob" className="blog-card__img" />

      <div className="blog-card__info">
        <h1 className="blog-card__info--heading">{title}</h1>
        <p className="blog-card__info--paragraph">{description}</p>
      </div>
      <SecondaryButton
        text="Read More"
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M15.6421 8.00001C15.6421 4.32001 12.6554 1.33334 8.97542 1.33334C5.29542 1.33334 2.30876 4.32001 2.30876 8.00001C2.30876 11.68 5.29542 14.6667 8.97542 14.6667C12.6554 14.6667 15.6421 11.68 15.6421 8.00001ZM8.95542 10.3533C8.85542 10.2533 8.80876 10.1267 8.80876 10C8.80876 9.87334 8.85542 9.74668 8.95542 9.64668L10.1021 8.50001L6.64209 8.50001C6.36876 8.50001 6.14209 8.27334 6.14209 8.00001C6.14209 7.72668 6.36876 7.50001 6.64209 7.50001L10.1021 7.50001L8.95542 6.35334C8.76209 6.16001 8.76209 5.84001 8.95542 5.64668C9.14876 5.45334 9.46876 5.45334 9.66209 5.64668L11.6621 7.64668C11.8554 7.84001 11.8554 8.16001 11.6621 8.35334L9.66209 10.3533C9.46876 10.5467 9.14876 10.5467 8.95542 10.3533Z"
              fill="white"
            />
          </svg>
        }
      />
    </div>
  );
}

export default BlogCard;
