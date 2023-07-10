import { useDispatch } from "react-redux";
import CartItems from "../cart/CartItems";
import CheckOutForm from "./CheckOutForm";
import Card from "../UI/Card";
import Error from "../UI/Error";
import useCartState from "../../hooks/useCartState";
import { useState } from "react";
import { cartSliceActions } from "../../store/cart-slice";
import OrderSubmitted from "../order/OrderSubmitted";
import classes from "./CheckOut.module.css";
import { SERVER_URL } from "../../envConfig";
import Modal from "../UI/Modal";
import PageLoading from "../UI/PageLoading";

const CheckOut = () => {
  const items = useCartState();
  const [isOrderPosted, setIsOrderPosted] = useState(false);
  const [isThereErrorOnPost, setIsThereErrorOnPost] = useState(false);
  const [isOrderUploading, setisOrderUploading] = useState(false);
  const dispatch = useDispatch();

  const postNewOrder = async (customerInfo) => {
    const orderPayLoad = {
      customerInfo,
      products: items,
    };

    try {
      setIsThereErrorOnPost(false);
      setisOrderUploading(true);
      const response = await fetch(`${SERVER_URL}/orders`, {
        method: "POST",
        body: JSON.stringify(orderPayLoad),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setisOrderUploading(false);
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
      <div className={classes["checkout-container"]}>
        <Card className={classes["checkout-items"]}>
          <CartItems items={items} isCheckOutPage={true} />
        </Card>
        <Card>
          <CheckOutForm
            isErrorOnPost={isThereErrorOnPost}
            postNewOrder={postNewOrder}
          />
        </Card>
      </div>
      {isOrderUploading && (
        <Modal>
          <PageLoading />
        </Modal>
      )}
    </>
  );

  if (isOrderPosted) {
    cartBody = <OrderSubmitted />;
  }

  return <>{cartBody}</>;
};

export default CheckOut;
