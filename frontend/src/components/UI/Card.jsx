import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes["cart-container"]} ${props.className} ${
        props.image && classes.image
      }`}
      {...(props.image ? { style: {backgroundImage : `url("${props.image}")`} } : {})}
    >
      {props.children}
    </div>
  );
};

export default Card;
