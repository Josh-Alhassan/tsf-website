import React from "react";

import "./FooterSubscribe.css";

function FooterSubscribe() {
  return (
    <div className="footer__subscribe">
      <h3 className="footer__subscribe-title">Stay Updated</h3>
      <p className="footer__subscribe-paragraph">
        Join to get all the latest Updates about Traders Support Funds.
      </p>

      <div className="footer__subscribe-container">
        <div className="subscribe__input-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M12.425 7.13428H10.395C9.82332 7.13428 9.31582 7.44928 9.05916 7.96261L8.56916 8.93094C8.45249 9.16428 8.21916 9.31011 7.96249 9.31011H6.04916C5.86832 9.31011 5.61166 9.26928 5.44249 8.93094L4.95249 7.96844C4.69582 7.46094 4.18249 7.14011 3.61666 7.14011H1.57499C1.34749 7.14011 1.16666 7.32094 1.16666 7.54844V9.45011C1.16666 11.5676 2.43832 12.8334 4.56166 12.8334H9.44999C11.4508 12.8334 12.6817 11.7368 12.8333 9.78844V7.54261C12.8333 7.32094 12.6525 7.13428 12.425 7.13428Z"
              fill="#5B5E71"
            />
            <path
              d="M12.8333 4.55567V6.329C12.705 6.28234 12.565 6.259 12.425 6.259H10.395C9.49082 6.259 8.67999 6.76067 8.27749 7.56567L7.83999 8.429H6.17166L5.73416 7.5715C5.33166 6.76067 4.52082 6.259 3.61666 6.259H1.57499C1.43499 6.259 1.29499 6.28234 1.16666 6.329V4.55567C1.16666 2.43234 2.43249 1.1665 4.55582 1.1665H9.44416C11.5675 1.1665 12.8333 2.43234 12.8333 4.55567Z"
              fill="#5B5E71"
            />
          </svg>
        </div>
        <input
          type="email"
          placeholder="Submit your email address"
          className="subscribe__input"
        />

        <button className="subscribe__btn">Submit</button>
      </div>
    </div>
  );
}

export default FooterSubscribe;
