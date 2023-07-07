import classes from "./ProductLoadingItem.module.css";

const ProductLoadingItem = () => {
  return (
    <div className={classes.loading}>
      <div className={classes["loading-image"]}></div>
      <div className={classes["loading-details"]}>
        <div className={classes["loading-title"]}></div>
        <div className={classes["loading-description"]}></div>
        <div className={classes["loading-price"]}></div>
        <div className={classes["loading-button"]}></div>
      </div>
    </div>
  );
};

export default ProductLoadingItem;
