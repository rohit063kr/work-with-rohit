import { useState } from "react";

const FAQCard = function (props) {
  const [isCardActivated, setIsCardActivated] = useState(false);

  const toggleActivationOfCardHandler = function () {
    setIsCardActivated((state) => !state);
  };
  return (
    <div
      className={`faq__card-wrapper ${isCardActivated ? "faq__activated" : ""}`}
      onClick={toggleActivationOfCardHandler}
    >
      <div className="faq__card faq__question">
        <span className="faq__icon">{isCardActivated ? "-" : "+"}</span>
        <span className="faq__query">{props.query}</span>
      </div>
      <div className="faq__card faq__answer">{props.ans}</div>
    </div>
  );
};

export default FAQCard;
