import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { cartSliceActions } from "../../store/cart-slice";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.totalAmount);
  let CartItemsBody = <ul className="ps-0 text-center"><h5>Loading Items...</h5></ul>;

  const handleAddingQuantity = (productId) => {
    dispatch(
      cartSliceActions.addItemToCart({ item: { productId } })
    );
  };

  const handleRemovingQuantity = (productId) => {
    dispatch(cartSliceActions.removeItemFromCart({ productId }));
  };

  if (props.items.length > 0) {
    CartItemsBody = (
      <>
        <ul className="ps-0">
          {props.items.map((item) => (
            <CartItem
              isCheckOutPage={props.isCheckOutPage}
              key={item.productId}
              {...item}
              image={item.image}
              onAddItem={handleAddingQuantity.bind(null, item.productId)}
              onRemoveItem={handleRemovingQuantity.bind(null, item.productId)}
            />
          ))}
          <p className={classes["total-price"]}>
            Total Price: {totalAmount.toFixed(2)}
          </p>
        </ul>
      </>
    );
  }

  return CartItemsBody;
};

export default CartItems;
