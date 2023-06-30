import React from "react";

const AddToCartBtn = (props) => {
  return (
    <button className="btn btn-primary" onClick={props.onAddItem}>
      Add to Cart
    </button>
  );
};

export default React.memo(AddToCartBtn);
