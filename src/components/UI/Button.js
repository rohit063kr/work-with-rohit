import { forwardRef } from "react";
import "./Button.scss";

const Button = forwardRef(function (props, ref) {
  return (
    <a
      href={props.href}
      type={props.type}
      className={`btn ${props.className}`}
      onClick={props.onClick}
      ref={ref}
    >
      {props.children}
    </a>
  );
});

export default Button;
