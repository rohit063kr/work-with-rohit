import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Button from "../UI/Button";

const MyWorkCard = function (props) {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [isCardActivated, setIsCardActivated] = useState(false);

  useEffect(() => {
    setIsCardActivated(inView);
  }, [inView]);

  return (
    <div
      key={props.data.projectLink}
      className={`work__card ${isCardActivated ? "work__card-activated" : ""}`}
      ref={ref}
    >
      <div className="work__img-box">
        <img
          alt={props.data.builtOn}
          src={props.data.img}
          className="work__img"
        />
        <div className="work__btn-box">
          <Button
            href={props.data.projectLink}
            className="work__btn work__btn-left"
          >
            View project
          </Button>
          <Button
            href={props.data.codeLink}
            className="work__btn work__btn-right"
          >
            View code
          </Button>
        </div>
      </div>
      <div className="work__about">
        <p className="work__title">{props.data.title}</p>
        {props.data.about}
      </div>
    </div>
  );
};

export default MyWorkCard;
