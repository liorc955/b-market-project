import Card from "../UI/Card";
import classes from "./ProductInfo.module.css";
import ProductImg from "../product/ProductImg";
import CounterInput from "../UI/CounterInput";
import { useCallback, useRef } from "react";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cart-slice";

const ProductInfo = (props) => {
  const counterInputRef = useRef();
  const dispatch = useDispatch();
  const product = props.product;
  let { description } = product;

  description = description.substring(0, description.indexOf(".") + 1);

  const addProductToCart = useCallback(() => {
    dispatch(
      cartSliceActions.addItemToCart({
        item: {
          productId: product.id,
          title: product.title,
          price: product.price,
          description: description,
          image: product.image,
          quantity: +counterInputRef.current.value,
        },
      })
    );
  }, [
    description,
    dispatch,
    product.id,
    product.image,
    product.price,
    product.title,
  ]);

  return (
    <div className={classes["product-outer"]}>
      <Card className={classes["product-container"]}>
        <ProductImg alt={product.title} src={product.image} />
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p style={{ fontWeight: "bold" }}>Price: {product.price}$</p>
          <CounterInput inputRef={counterInputRef} />
          <Button onClick={addProductToCart}>Add To Cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductInfo;
