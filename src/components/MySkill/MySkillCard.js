import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MySkillCard = function (props) {
  const [isCardActivated, setIsCardActivated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.9 });

  useEffect(() => {
    setIsCardActivated(inView);
  }, [inView]);

  return (
    <div
      className={`skill__card ${
        isCardActivated ? "skill__card-activated" : ""
      }`}
      ref={ref}
    >
      <h2 className="heading--tertiary skill__heading">{props.data.title}</h2>
      {props.data.skills.map((skill) => (
        <p key={skill} className="skill__text">
          {skill}
        </p>
      ))}
    </div>
  );
};

export default MySkillCard;
