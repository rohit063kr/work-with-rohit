import { useContext } from "react";
import { contactPageContext } from "../../store/contact-page-context";
import "./ContactBtn.scss";

const ContactBtn = function () {
  const contactPageCtx = useContext(contactPageContext);

  const toggleContactPageView = function () {
    contactPageCtx.toggleContactPageView();
  };

  return (
    <div className="contact-btn" onClick={toggleContactPageView}>
      <span className="contact-btn__text">Contact me!</span>
      <span className="contact-btn__icon">
        {/* <img alt="conact-svg" className="contact-btn__svg" src={contactImg} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 contact-btn__svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#cc9544"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </span>
    </div>
  );
};

export default ContactBtn;
