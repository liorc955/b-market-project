import { useLoaderData } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./ProductInfo.module.css";
import ProductImg from "../product/ProductImg";
import Input from "../UI/Input";
import { useCallback, useRef } from "react";
import AddToCartBtn from "../UI/AddToCartBtn";
import { useDispatch } from "react-redux";
import veganImg from '../../img/vegan.png';
import { cartSliceActions } from "../../store/cart-slice";

const ProductInfo = () => {
  const proudct = useLoaderData();
  const counterInputRef = useRef();
  const dispatch = useDispatch();

  let { description } = proudct;

  description = description.substring(0, description.indexOf(".") + 1);

  const addProductToCart = useCallback(() => {
    dispatch(
      cartSliceActions.addItemToCart({
        item: {
          productId: proudct.id,
          title: proudct.title,
          price: proudct.price,
          description: description,
          image: proudct.image,
          quantity: +counterInputRef.current.value,
        },
      })
    );
  }, [description, dispatch, proudct.id, proudct.image, proudct.price, proudct.title]);

  return (
    <div className={classes["product-outer"]}>
      <Card className={classes["product-container"]}>
        <ProductImg alt={proudct.title} src={proudct.image} />
        <div>
          <h1>{proudct.title}</h1>
          <p>{proudct.description}</p>
          <p style={{ fontWeight: "bold" }}>Price: {proudct.price}$</p>
          <Input inputRef={counterInputRef} />
          <AddToCartBtn onAddItem={addProductToCart} />
        </div>
        <img
          style={{ height: "80px", width: "80px" }}
          alt='vegan product'
          src={veganImg}
        ></img>
      </Card>
    </div>
  );
};

export default ProductInfo;
