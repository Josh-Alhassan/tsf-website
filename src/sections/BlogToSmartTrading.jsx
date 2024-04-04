import React from "react";

// Images
import BlogImageOne from "../assets/blog-img-1.png";
import BlogImageTwo from "../assets/blog-img-2.png";
import BlogImageThree from "../assets/blog-img-3.png";

import BlogPost from "../components/BlogPost";

import "./BlogToSmartTrading.css";

function BlogToSmartTrading() {
  const blog = [
    {
      image: BlogImageOne,
      title: "Blog Post 1",
      description:
        "We provide a suitable and easy to access dashboard and Metrix which helps you track your records and trading behaviors. This helps you adjust to become more profitable.",
    },
    {
      image: BlogImageTwo,
      title: "Blog Post 2",
      description:
        "We provide a suitable and easy to access dashboard and Metrix which helps you track your records and trading behaviors. This helps you adjust to become more profitable.",
    },
    {
      image: BlogImageThree,
      title: "Blog Post 3",
      description:
        "We provide a suitable and easy to access dashboard and Metrix which helps you track your records and trading behaviors. This helps you adjust to become more profitable.",
    },
    {
      image: BlogImageOne,
      title: "Blog Post 4",
      description:
        "We provide a suitable and easy to access dashboard and Metrix which helps you track your records and trading behaviors. This helps you adjust to become more profitable.",
    },
  ];
  return (
    <div className="section__padding blog-trading__section">
      <div className="blog-trading__typography">
        <h1 className="blog-trading__typography--heading">
          Blog To Start Trading Enterprise
        </h1>
        <p className="blog-trading__typography--paragraph">
          Dive into the world of intelligent trading with our guided posts and
          articles
        </p>
      </div>

      {/* BLOGS SECTIONS */}
      <div className="blog-trading__blogs">
        {blog.map((post, index) => (
          <BlogPost
            key={index}
            imgPath={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogToSmartTrading;
