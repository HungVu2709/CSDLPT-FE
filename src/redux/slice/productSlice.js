import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducer: {
    set: (state, action) => {
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = null;
    },
  },
});

export const { set, remove } = productSlice.actions;

export default productSlice.reducer;
