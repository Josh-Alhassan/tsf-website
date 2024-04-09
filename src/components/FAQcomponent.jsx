import React, { useState } from "react";

import arrowUp from "../utilities/arrow-up.svg";

import "./FAQcomponent.css";

const faqData = [
  {
    question: "What pairs can I trade?",
    answer:
      "You are allowed to trade all Forex pairs, Crypto currencies, Stocks, Indices, Gold, and Silver provided is listed among the available pair on our server.",
  },
  {
    question: "Is group trading allowed ?",
    answer:
      "You are allowed to trade all Forex pairs, Crypto currencies, Stocks, Indices, Gold, and Silver provided is listed among the available pair on our server.",
  },
  {
    question: "What trading styles are allowed?",
    answer:
      "You are allowed to trade all Forex pairs, Crypto currencies, Stocks, Indices, Gold, and Silver provided is listed among the available pair on our server.",
  },
  {
    question: "Do I have to pay a monthly fee?",
    answer:
      "You are allowed to trade all Forex pairs, Crypto currencies, Stocks, Indices, Gold, and Silver provided is listed among the available pair on our server.",
  },
  // Add more questions and answers as needed
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="faq__section">
      {faqData.map((item, index) => (
        <div key={index} className="faq__component">
          <div
            onClick={() => toggleAnswer(index)}
            className="faq__component--question"
          >
            <h3>{item.question}</h3>

            <img className="faq__component--img" src={arrowUp} alt="Arrow up" />
          </div>
          {expandedIndex === index && (
            <p className="faq__component--answer">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
