import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsCart, updateItemsCart } from "../store/cart-slice";

let componentDidMount = false;

const useCartState = () => {
  const items = useSelector((state) => state.itemsInCart);
  const [isThereError, setIsThereError] = useState(false);
  const isCartStateChanged = useSelector((state) => state.isCartStateChanged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsCart(setIsThereError));
  }, [dispatch]);

  useEffect(() => {
    if (componentDidMount && isCartStateChanged) {
      dispatch(updateItemsCart(items, setIsThereError));
    }
    componentDidMount = true;
  }, [dispatch, items, isCartStateChanged]);

  return [items ,isThereError];
};

export default useCartState;
