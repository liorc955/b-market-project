import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.addCartBtn}
      onClick={props.onAddItem}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
