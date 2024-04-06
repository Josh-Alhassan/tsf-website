import React from "react";
import NavItems from "../components/NavItems";

// Images
import BlogImageOne from "../assets/blog-1.png";
import BlogImageTwo from "../assets/blog-img-1.png";

import "./BlogPage.css";
import InputField from "../utilities/InputField";
import BlogCard from "../utilities/BlogCard";
import Footer from "../sections/Footer";
import FlowOfPage from "../components/FlowOfPage";

function BlogPage() {
  const blog = [
    {
      image: BlogImageOne,
      title: "candlestick forex chart on",
      description:
        "We provide a suitable and easy to access dashboard and Metrix which helps you track your records and trading behaviors. This helps you adjust to become more profitable.",
    },
    {
      image: BlogImageTwo,
      title: "candlestick forex chart on",
      description:
        "We provide a suitable and easy to access dashboard and Metrix which helps you track your records and trading behaviors. This helps you adjust to become more profitable.",
    },
    {
      image: BlogImageOne,
      title: "candlestick forex chart on",
      description:
        "We provide a suitable and easy to access dashboard and Metrix which helps you track your records and trading behaviors. This helps you adjust to become more profitable.",
    },
    {
      image: BlogImageTwo,
      title: "candlestick forex chart on",
      description:
        "We provide a suitable and easy to access dashboard and Metrix which helps you track your records and trading behaviors. This helps you adjust to become more profitable.",
    },
  ];

  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M8.16683 14C11.6646 14 14.5002 11.1645 14.5002 7.66667C14.5002 4.16886 11.6646 1.33333 8.16683 1.33333C4.66903 1.33333 1.8335 4.16886 1.8335 7.66667C1.8335 11.1645 4.66903 14 8.16683 14Z"
        fill="white"
      />
      <path
        d="M14.7002 14.6667C14.5802 14.6667 14.4602 14.62 14.3735 14.5333L13.1335 13.2933C12.9535 13.1133 12.9535 12.82 13.1335 12.6333C13.3135 12.4533 13.6069 12.4533 13.7935 12.6333L15.0335 13.8733C15.2135 14.0533 15.2135 14.3467 15.0335 14.5333C14.9402 14.62 14.8202 14.6667 14.7002 14.6667Z"
        fill="white"
      />
    </svg>
  );
  const searchPlaceholder = "Search Post";

  return (
    <>
      <NavItems />
      <div className="blog-page__section section__padding">
        <div className="blog-page__header">
          <div className="blog-page__typography">
            <h1 className="blog-page__heading">
              Blog to smart Trading Strategies
            </h1>
            <p className="blog-page__paragraph">
              Dive into the world of intelligent trading with our guided posts
              and articles
            </p>
          </div>
          <InputField type="text" placeholder={searchPlaceholder} />
        </div>

        <div className="blog__wrap">
          {blog.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>

        <div className="blog__wrap">
          {blog.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
      <FlowOfPage />
      <Footer />
    </>
  );
}
<NavItems />;

export default BlogPage;
