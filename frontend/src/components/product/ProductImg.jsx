import classes from "./ProductImg.module.css";

const ProductImg = (props) => {
  return (
    <img className={classes["product-image"]} alt={props.alt} src={props.src} />
  );
};

export default ProductImg;
