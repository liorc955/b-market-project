import { createSlice } from "@reduxjs/toolkit";

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

export const fetchItemsCart = () => {
  return (dispatch) => {
    if (localStorage.getItem("cartItems") !== null) {
      dispatch(
        cartSliceActions.setItemsList({
          items: JSON.parse(localStorage.getItem("cartItems")),
        })
      );
    }
  };
};

export const updateItemsCart = (data) => {
  return () => {
    localStorage.setItem("cartItems", JSON.stringify(data));
  };
};

export default cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;
