import React from "react";
import FAQItem from "./FAQItem";
import faq from "./data";

const FAQList: React.FC = () => {
  return (
    <div className="container">
      {faq.map((item, index) => (
        <FAQItem key={index} item={item} />
      ))}
    </div>
  );
};

export default FAQList;
