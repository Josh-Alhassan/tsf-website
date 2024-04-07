import React from "react";

import articleImage from "../assets/article-img-1.png";

import "./BlogArticle.css";
import NavItems from "../components/NavItems";
import FlowOfPage from "../components/FlowOfPage";
import Footer from "../sections/Footer";

function BlogArticle() {
  return (
    <>
      <NavItems />
      <div className="blog-article__section section__padding">
        <div className="blog-article__header">
          <h4 className="blog-article__path">
            Home<span className="blog-article__path--span">/Blog</span>
          </h4>

          <div className="blog-article__heading">
            <h2 className="blog-article__title">
              Blog to smart trading strategies
            </h2>
            <div>
              <p className="blog-article__paragraph">
                Dive into the world of intelligent trading with our guided posts
                and articles
              </p>
              <p className="blog-article__sub-paragraph">
                Dec. 25th 2023 - Trader Support Funds
              </p>
            </div>
          </div>
        </div>

        <div className="article-main-body">
          <img
            src={articleImage}
            alt="Article Jumbotron"
            className="article-img"
          />

          <article className="body-article">
            Lorem ipsum dolor sit amet consectetur. Nunc volutpat facilisis leo
            quisque a aenean. At vel interdum duis eu. Habitant dui dictum ac
            eget massa vitae in tellus. Porta platea lacus ultrices morbi mattis
            eu tristique. Pellentesque in accumsan facilisis id et. A pretium at
            tempor lectus diam laoreet dignissim sed. Mauris a in orci morbi.
            Sagittis phasellus varius proin sagittis aenean varius dictum neque.
            Fames tempor egestas cursus turpis sed egestas dolor. Eget luctus
            urna rutrum tortor ullamcorper viverra felis ornare in. Sagittis
            laoreet nulla accumsan facilisis odio accumsan consequat sed
            pulvinar. Volutpat phasellus enim ac non ullamcorper vitae tellus
            blandit id. Dolor quis diam ac purus vestibulum sit turpis
          </article>

          <article className="body-article">
            lorem. Ut quis eleifend ornare neque sed nulla ultricies. Odio vitae
            massa arcu facilisis. Mattis tempus pellentesque morbi integer
            mauris lectus etiam sed. Mi eu et nulla accumsan eleifend enim nisi
            pellentesque duis. Purus curabitur enim lacus eu et arcu. Diam amet
            risus eget urna ut purus pharetra mattis tellus. Tempor tortor
            bibendum aliquet amet aliquam. Nisl vestibulum nulla velit ultricies
            scelerisque viverra quis. Potenti mauris eu vivamus donec in est
            viverra nulla tortor. Turpis sit dictum nec in ullamcorper tempor
            mauris
          </article>

          <article className="body-article">
            lorem. Ut quis eleifend ornare neque sed nulla ultricies. Odio vitae
            massa arcu facilisis. Mattis tempus pellentesque morbi integer
            mauris lectus etiam sed. Mi eu et nulla accumsan eleifend enim nisi
            pellentesque duis. Purus curabitur enim lacus eu et arcu. Diam amet
            risus eget urna ut purus pharetra mattis tellus. Tempor tortor
            bibendum aliquet amet aliquam. Nisl vestibulum nulla velit ultricies
            scelerisque viverra quis. Potenti mauris eu vivamus donec in est
            viverra nulla tortor. Turpis sit dictum nec in ullamcorper tempor
            mauris
          </article>
        </div>
      </div>
      <FlowOfPage />
      <Footer />
    </>
  );
}

export default BlogArticle;
