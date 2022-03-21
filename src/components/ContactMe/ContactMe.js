import { useContext } from "react";
import { contactPageContext } from "../../store/contact-page-context";

import gmailLogo from "../../assets/img/gmail.png";
import phoneLogo from "../../assets/img/phone.png";
import whatsappLogo from "../../assets/img/whatsapp.png";

import "./ContactMe.scss";

const ContactMe = function () {
  const contactPageCtx = useContext(contactPageContext);

  const contactPageViewToggleHandler = function () {
    contactPageCtx.toggleContactPageView();
  };

  return (
    <div
      className={`container contact ${
        contactPageCtx.isShow ? "contact--active" : ""
      }`}
      id="contact"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 contact__cancle"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={contactPageViewToggleHandler}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <h1 className="heading--primary sectional-heading contact__heading">
        Contact me.
        <br />
        rohit0630kr@gmail.com
      </h1>
      <div className="contact__item">
        <img className="contact__logo" src={gmailLogo} />
        <h2 className="heading--primary contact__text">
          <span>Gmail:</span>
          <span>rohit0630kr@gmail.com</span>
        </h2>
      </div>
      <div className="contact__item">
        <img className="contact__logo" src={whatsappLogo} />
        <h2 className="heading--primary contact__text">
          <span>Whatsapp: </span>
          <span>+91 9472194606</span>
        </h2>
      </div>
      <div className="contact__item">
        <img className="contact__logo" src={phoneLogo} />
        <h2 className="heading--primary contact__text">
          <span>Call me: </span>
          <span>+91 9472194606</span>
        </h2>
      </div>
    </div>
  );
};

export default ContactMe;
