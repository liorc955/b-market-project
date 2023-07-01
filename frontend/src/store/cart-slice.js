import { createSlice } from "@reduxjs/toolkit";
import { SERVER_URL } from "../envConfig";

const initialState = {
  itemsInCart: [],
  totalAmount: 0,
  isCartStateChanged: false,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const { item } = action.payload;
      const itemIndex = state.itemsInCart.findIndex(
        (productItem) => productItem.productId === item.productId
      );
      const productQuantity = item.quantity ? item.quantity : 1;
      if (itemIndex === -1) {
        const newItem = { ...item, quantity: productQuantity };
        state.itemsInCart = [...state.itemsInCart, newItem];
        state.totalAmount += item.price * productQuantity;
      } else {
        state.itemsInCart[itemIndex].quantity += productQuantity;
        state.totalAmount +=
          state.itemsInCart[itemIndex].price * productQuantity;
      }
      state.isCartStateChanged = true;
    },
    removeItemFromCart(state, action) {
      const productId = action.payload.productId;
      const itemIndex = state.itemsInCart.findIndex(
        (productItem) => productItem.productId === productId
      );

      const foundItem = state.itemsInCart[itemIndex];
      state.totalAmount -= foundItem.price;
      if (state.totalAmount < 0) state.totalAmount = 0;
      state.itemsInCart[itemIndex].quantity -= 1;
      if (foundItem.quantity === 0) {
        state.itemsInCart = state.itemsInCart.filter(
          (productItem) => productItem.productId !== productId
        );
      }
      state.isCartStateChanged = true;
    },
    setItemsList(state, action) {
      const items = action.payload.items;
      state.itemsInCart = items;
      state.totalAmount = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
      );
    },
    resetCartSlice(state) {
      state.itemsInCart = [];
      state.totalAmount = 0;
      state.isCartStateChanged = true;
    },
  },
});

export const fetchItemsCart = (setIsThereError) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${SERVER_URL}/cartitems`);
      if (!response.ok) throw new Error("status code: " + response.status);
      setIsThereError(false);
      let data = await response.json();
      if (data !== null) {
        const productsInCart = data.map((product)=> ({...product, id: product._id}))
        dispatch(
          cartSliceActions.setItemsList({
            items: productsInCart,
          })
        );
      }
    } catch (expection) {
      console.log(expection.message);
      setIsThereError(true);
    }
  };
};

export const updateItemsCart = (data, setIsThereError) => {
  return async () => {
    try {
      const response = await fetch(`${SERVER_URL}/cartitems`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("status code: " + response.status);
      setIsThereError(false);
    } catch (expection) {
      console.log(expection.message);
      setIsThereError(true);
    }
  };
};

export default cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;
