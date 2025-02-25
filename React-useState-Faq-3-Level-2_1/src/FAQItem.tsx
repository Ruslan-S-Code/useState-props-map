import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  answerLong: string;
}

interface FAQItemProps {
  item: FAQItem;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isShortAnswerOpen, setIsShortAnswerOpen] = useState(false);
  const [isLongAnswerOpen, setIsLongAnswerOpen] = useState(false);

  const toggleShortAnswer = () => {
    setIsShortAnswerOpen(!isShortAnswerOpen);
    if (isShortAnswerOpen) {
      setIsLongAnswerOpen(false);
    }
  };

  const toggleLongAnswer = () => {
    setIsLongAnswerOpen(!isLongAnswerOpen);
  };

  return (
    <div className="faq-item">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{item.question}</h3>
        <button onClick={toggleShortAnswer}>
          {isShortAnswerOpen ? "-" : "+"}
        </button>
      </div>

      {isShortAnswerOpen && (
        <div className="answer">
          <p>
            <strong></strong> {item.answer}
          </p>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={toggleLongAnswer}>
              {isLongAnswerOpen ? "-" : "+"}
            </button>
          </div>

          {isLongAnswerOpen && (
            <p>
              <strong></strong> {item.answerLong}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
