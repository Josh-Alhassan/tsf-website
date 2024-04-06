import React from "react";
import "./RecoveryEmailPrompt.css";
import PrimaryButton from "../utilities/PrimaryButton";
import { Link } from "react-router-dom";

function RecoveryEmailPrompt({ onClose }) {
  const emailRecoveryScg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="101"
      height="101"
      viewBox="0 0 101 101"
      fill="none"
    >
      <circle cx="50.5" cy="50.5" r="50" fill="#2CE074" fill-opacity="0.05" />
      <path
        d="M34.0905 50.6539C33.8313 53.2459 34.8681 55.5786 36.4232 57.393L44.7175 65.6873C46.2727 67.2425 48.3463 68.2793 50.6791 68.2793C53.0118 68.2793 55.0854 67.5017 56.6406 65.6873L73.2292 49.0987C74.7844 47.5435 75.8212 45.47 75.8212 43.1372C75.8212 40.8044 75.0436 38.7308 73.2292 37.1757L64.9349 28.8814C63.1205 27.067 60.7877 26.2894 58.1958 26.5486C56.1222 26.8078 54.3078 27.5854 53.0118 28.8814L36.6824 45.47C35.1273 46.7659 34.3497 48.8395 34.0905 50.6539ZM55.3446 34.0653L54.0486 44.4332C53.7894 45.7292 53.0118 46.5067 51.7159 46.7659L41.348 48.0619L55.3446 34.0653ZM52.4934 51.6907C56.1222 51.1723 58.9734 48.5803 59.2326 44.9516L60.7877 32.2509C61.0469 32.2509 61.0469 32.5101 61.3061 32.5101L69.6004 40.8044C70.8964 42.1004 70.8964 44.174 69.6004 45.47L53.0118 62.0586C51.7159 63.3545 49.6423 63.3545 48.3463 62.0586L40.3112 53.7643C40.052 53.5051 40.052 53.2459 39.7928 53.2459L52.4934 51.6907Z"
        fill="#2CE074"
      />
      <path
        d="M27.092 71.9081C27.8696 71.9081 28.388 71.6489 28.9063 71.1305L36.6822 63.3546C37.719 62.3178 37.719 60.7626 36.6822 59.7258C35.6455 58.689 34.0903 58.689 33.0535 59.7258L25.2776 67.5017C24.2408 68.5385 24.2408 70.0937 25.2776 71.1305C25.796 71.6489 26.3144 71.9081 27.092 71.9081Z"
        fill="#2CE074"
      />
      <path
        d="M39.2748 73.7223L41.8667 71.1303C42.9035 70.0936 42.9035 68.5384 41.8667 67.5016C40.8299 66.4648 39.2748 66.4648 38.238 67.5016L35.646 70.0936C34.6092 71.1303 34.6092 72.6855 35.646 73.7223C36.1644 74.2407 36.6828 74.4999 37.4604 74.4999C38.238 74.4999 38.7564 74.2407 39.2748 73.7223Z"
        fill="#2CE074"
      />
    </svg>
  );
  return (
    <div className="recovery-email-prompt">
      <div className="recovery-email-wrap">
        {emailRecoveryScg}

        <div className="recovery-email-typography">
          <h3 className="recovery-email-heading">Recovery Email Sent</h3>
          <p className="recovery-email-paragraph">
            We’ve successfully sent a recovery email to your mail
          </p>
        </div>
      </div>
      <Link className="react-link" to="/signin">
        <PrimaryButton
          text="Back to Login"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M14.6665 8.50004C14.6665 4.82004 11.6798 1.83337 7.99984 1.83337C4.31984 1.83337 1.33317 4.82004 1.33317 8.50004C1.33317 12.18 4.31984 15.1667 7.99984 15.1667C11.6798 15.1667 14.6665 12.18 14.6665 8.50004ZM7.97984 10.8534C7.87984 10.7534 7.83317 10.6267 7.83317 10.5C7.83317 10.3734 7.87984 10.2467 7.97984 10.1467L9.1265 9.00004L5.6665 9.00004C5.39317 9.00004 5.1665 8.77337 5.1665 8.50004C5.1665 8.22671 5.39317 8.00004 5.6665 8.00004L9.1265 8.00004L7.97984 6.85337C7.7865 6.66004 7.7865 6.34004 7.97984 6.14671C8.17317 5.95337 8.49317 5.95337 8.6865 6.14671L10.6865 8.14671C10.8798 8.34004 10.8798 8.66004 10.6865 8.85337L8.6865 10.8534C8.49317 11.0467 8.17317 11.0467 7.97984 10.8534Z"
                fill="white"
              />
            </svg>
          }
        />
      </Link>

      {/* <button onClick={onClose} className="recovery-close-btn">
        Close
      </button> */}
    </div>
  );
}

export default RecoveryEmailPrompt;
