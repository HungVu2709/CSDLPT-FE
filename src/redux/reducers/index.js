import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./../slice/productSlice";
import cartItems from "./../slice/cartItems";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cartItems: cartItems,
  },
});
