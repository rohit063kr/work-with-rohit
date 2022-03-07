import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { contactPageContext } from "../../store/contact-page-context";

import Button from "../UI/Button";
import "./MySkill.scss";
import MySkillCard from "./MySkillCard";

const MySkill = function () {
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
    <section className="container my-skill" ref={ref} id="skill">
      <h1 className="sectional-heading heading--secondary">My Skills</h1>
      <div className="skill__cards">
        <MySkillCard
          data={{
            title: "In frontend",
            skills: ["Html", "Css", "Javascript", "React", "Scss"],
          }}
        />
        <MySkillCard
          data={{
            title: "Css and designs",
            skills: [
              "Bootstrap",
              "Tailwind css",
              "Scss",
              "Grid layout",
              "Flex-box",
            ],
          }}
        />
        <MySkillCard
          data={{
            title: "Technique and tools",
            skills: [
              "Adobe Xd to html(Website)",
              "Figma to html(website)",
              "Firebase as a backend",
            ],
          }}
        />
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

export default MySkill;
