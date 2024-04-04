import React from "react";
import "./BlogPost.css";

import arrRight from "../utilities/arrRight.svg";

function BlogPost({ imgPath, title, description }) {
  return (
    <div className="blog-post__wrap">
      <img
        className="blog-post__img"
        src={imgPath}
        alt="Blog image placeholder"
      />

      <div className="blog-post__typography">
        <h3 className="blog-post__typography--heading">{title}</h3>
        <p className="blog-post__typography--paragraph">{description}</p>
      </div>

      <div className="blog-post__overlay">
        <a href="#" className="blog-post__overlay--link">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M15.1911 8.00016C15.1911 4.32016 12.2044 1.3335 8.52443 1.3335C4.84443 1.3335 1.85777 4.32016 1.85777 8.00016C1.85777 11.6802 4.84443 14.6668 8.52443 14.6668C12.2044 14.6668 15.1911 11.6802 15.1911 8.00016ZM8.50443 10.3535C8.40443 10.2535 8.35777 10.1268 8.35777 10.0002C8.35777 9.8735 8.40443 9.74683 8.50443 9.64683L9.6511 8.50016L6.1911 8.50016C5.91777 8.50016 5.6911 8.2735 5.6911 8.00016C5.6911 7.72683 5.91777 7.50016 6.1911 7.50016L9.6511 7.50016L8.50443 6.3535C8.3111 6.16016 8.3111 5.84016 8.50443 5.64683C8.69777 5.4535 9.01777 5.4535 9.2111 5.64683L11.2111 7.64683C11.4044 7.84016 11.4044 8.16016 11.2111 8.3535L9.2111 10.3535C9.01777 10.5468 8.69777 10.5468 8.50443 10.3535Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BlogPost;
