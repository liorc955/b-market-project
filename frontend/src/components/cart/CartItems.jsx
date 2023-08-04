import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { cartSliceActions } from "../../store/cart-slice";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const dispatch = useDispatch();
  let totalAmount = useSelector((state) => state.cart.totalAmount);

  if (props.totalAmount) {
    totalAmount = props.totalAmount;
  }

  let CartItemsBody = (
    <ul className="ps-0 text-center">
      <h5>Loading Items...</h5>
    </ul>
  );

  const handleAddingQuantity = (productId) => {
    dispatch(cartSliceActions.addItemToCart({ item: { productId } }));
  };

  const handleRemovingQuantity = (productId) => {
    dispatch(cartSliceActions.removeItemFromCart({ productId }));
  };

  if (props.items.length > 0) {
    CartItemsBody = (
      <>
        <div
          className={`${classes.items}${
            props.className ? " " + props.className : ""
          }`}
        >
          <TransitionGroup component="ul" className="ps-0">
            {props.items.map((item) => (
              <Collapse key={item.productId}>
                <CartItem
                  disableEditing={props.disableEditing}
                  {...item}
                  image={item.image}
                  onAddItem={handleAddingQuantity.bind(null, item.productId)}
                  onRemoveItem={handleRemovingQuantity.bind(
                    null,
                    item.productId
                  )}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </div>
        <h6 className="fw-bold ps-0 mt-4">
          Total Price: {totalAmount.toFixed(2)}$
        </h6>
      </>
    );
  }

  return CartItemsBody;
};

export default CartItems;
