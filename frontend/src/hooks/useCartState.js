import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsCart, updateItemsCart } from "../store/cart-slice";

let componentDidMount = false;

const useCartState = () => {
  const items = useSelector((state) => state.itemsInCart);
  const isCartStateChanged = useSelector((state) => state.isCartStateChanged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsCart());
  }, [dispatch]);

  useEffect(() => {
    if (componentDidMount && isCartStateChanged) {
      dispatch(updateItemsCart(items));
    }
    componentDidMount = true;
  }, [dispatch, items, isCartStateChanged]);

  return items;
};

export default useCartState;
