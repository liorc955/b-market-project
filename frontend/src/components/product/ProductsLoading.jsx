import classes from "./ProductsLoading.module.css";
import ProductLoadingItem from "./ProductLoadingItem";

const ProductsLoading = (props) => {
  let numberOfItems = props.itemsNumber !== undefined ? props.itemsNumber : 5;

  const loadingItems = [...Array(numberOfItems)].map((_, index) => (
    <ProductLoadingItem key={index} />
  ));

  return <div className={classes["loading-wrapper"]}>{loadingItems}</div>;
};

export default ProductsLoading;
