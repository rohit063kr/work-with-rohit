import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { contactPageContext } from "../../store/contact-page-context";

import Button from "../UI/Button";
import "./AboutMe.scss";

const AboutMe = function () {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [isContactBtnActivated, setIsContactBtnActivated] = useState(false);

  useEffect(() => {
    setIsContactBtnActivated(inView);
  }, [inView]);

  const contactPageCtx = useContext(contactPageContext);

  const toggleContactPageView = function () {
    contactPageCtx.toggleContactPageView();
  };

  return (
    <section className="container about-me" ref={ref} id="about">
      <h1 className="heading--secondary sectional-heading">About me</h1>
      <div className="about__card">
        <div>
          <h2 className="about__heading heading--tertiary">
            About my experience.
          </h2>
          <p className="about__para">
            Hii i’m rohit kumar from bihar, India. I has great experience in
            frontend web development. I’m coding for mroe than 3 years. I had a
            great foundation in Frontend languges like Html, Css, Javascript and
            React. I also covered most importatn topics of theses languages
            like. Routinng, Redux, Fetch api reuests. I also has experience in
            designing that made me capable to be creative with my work and
            design provided by clients and i build this website on my own. This
            website is designed and developed by me.
          </p>
        </div>
        <div>
          <h2 className="about__heading heading--tertiary">
            The way of my working.
          </h2>
          <p className="about__para">
            I think Frontend web developer should not limit his/her thinking to
            developing the websites with the proivded design pages, But he/she
            should be creative with that work and design and think what
            imporvment he/she can do with it. This is only possible if he/she
            really loves the work.
          </p>
        </div>
      </div>
      <div className="centered-container">
        <Button
          className={`sectional-btn ${
            isContactBtnActivated ? "btn__activated" : ""
          }`}
          onClick={toggleContactPageView}
        >
          Contact me
        </Button>
      </div>
    </section>
  );
};

export default AboutMe;
