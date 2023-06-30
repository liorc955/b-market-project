import { useDispatch } from "react-redux";
import CartItems from "../cart/CartItems";
import CheckOutForm from "./CheckOutForm";
import Card from "../UI/Card";
import Error from "../UI/Error";
import useCartState from "../../hooks/useCartState";
import { useState } from "react";
import checkOutLogo from "./../../img/checkoutLogo.webp";
import { cartSliceActions } from "../../store/cart-slice";
import OrderSubmitted from "../order/OrderSubmitted";
import classes from "./CheckOut.module.css";

const CheckOut = () => {
  const [items, isThereErrorOnGet] = useCartState();
  const [isOrderPosted, setIsOrderPosted] = useState(false);
  const [isThereErrorOnPost, setIsThereErrorOnPost] = useState(false);
  const dispatch = useDispatch();

  const postNewOrder = async (customerInfo) => {
    const orderPayLoad = {
      customerInfo,
      products: items,
    };

    try {
      setIsThereErrorOnPost(false);

      const response = await fetch("http://127.0.0.1:8080/orders", {
        method: "POST",
        body: JSON.stringify(orderPayLoad),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(response.status);
      setIsOrderPosted(true);
      localStorage.removeItem("isCheckOutBtnClicked");
      dispatch(cartSliceActions.resetCartSlice());
    } catch (expection) {
      console.log(expection.message);
      setIsThereErrorOnPost(true);
    }
  };

  let cartBody = (
    <>
      <h1>Let's review what we have...&#128521;</h1>
      <Card className={classes["checkout-container"]} image={checkOutLogo}>
        {isThereErrorOnGet ? (
          <Error />
        ) : (
          <CartItems items={items} isCheckOutPage={true} />
        )}
        <CheckOutForm
          isErrorOnPost={isThereErrorOnPost}
          isErrorOnGet={isThereErrorOnGet}
          postNewOrder={postNewOrder}
        />
      </Card>
    </>
  );

  if (isOrderPosted) {
    cartBody = <OrderSubmitted />;
  }

  return <div className={classes["checkout-outer"]}>{cartBody}</div>;
};

export default CheckOut;
