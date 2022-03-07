import { scroller } from "react-scroll";
import { useContext } from "react";
import { contactPageContext } from "../../store/contact-page-context";

import "./Navigation.scss";

const Navigation = function (props) {
  const contactPageCtx = useContext(contactPageContext);

  const contactPageViewToggleHandler = function (e) {
    e.preventDefault();
    contactPageCtx.toggleContactPageView();
  };

  const scrollToSection = function (e) {
    e.preventDefault();
    const sectionAddress = e.target.getAttribute("href").split("");
    sectionAddress.shift();
    const className = sectionAddress.join("");
    scroller.scrollTo(className, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className={`container navigation`}>
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <a
            href="#header"
            className="navigation__link"
            onClick={scrollToSection}
          >
            Home
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            href="#about"
            className="navigation__link"
            onClick={scrollToSection}
          >
            About me?
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            href="#skill"
            className="navigation__link"
            onClick={scrollToSection}
          >
            My skill?
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            href="#work"
            className="navigation__link"
            onClick={scrollToSection}
          >
            My work?
          </a>
        </li>
        {/* <li className="navigation__list-item">
          <a href="#faq" className="navigation__link" onClick={scrollToSection}>
            Frequently asked questions
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Navigation;
