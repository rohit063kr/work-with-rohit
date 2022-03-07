import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { contactPageContext } from "../../store/contact-page-context";

import Button from "../UI/Button";
import "./Header.scss";

const Header = function (props) {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const contactPageCtx = useContext(contactPageContext);

  const toggleContactPageView = function () {
    contactPageCtx.toggleContactPageView();
  };

  useEffect(() => {
    props.toggleStickyMode(!inView);
  }, [inView]);

  return (
    <div className="container header" id="header" ref={ref}>
      <div className="header__text-box">
        <h1 className="heading--primary header__heading">
          Hii there! I’m rohit, a immatured and passionated coder
        </h1>
        <div className="header__compliment-box">
          <p className="header__compliment">
            <span className="header__query">Q.</span> Are you finding someone
            who can work for you or with you?
          </p>
          <p className="header__compliment">
            <span className="header__query">Ans.</span> Then you are at right
            place!
          </p>
        </div>
        <Button className={`header__btn`} onClick={toggleContactPageView}>
          Contact me
        </Button>
      </div>
    </div>
  );
};

export default Header;
