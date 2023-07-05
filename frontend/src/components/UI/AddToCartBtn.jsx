import React from "react";
import classes from './AddToCartBtn.module.css';

const AddToCartBtn = (props) => {
  return (
    <button className={classes.addCartBtn} onClick={props.onAddItem}>
      Add to Cart
    </button>
  );
};

export default React.memo(AddToCartBtn);
