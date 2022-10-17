import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const initialState = {
  value: items,
};

export const cartItems = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const duplicate = state.value.filter(
        (e) =>
          e.id === newItem.id &&
          e.color === newItem.color &&
          e.capacity === newItem.capacỉty
      );
      if (duplicate.length > 0) {
        state.value = state.value.filter(
          (e) =>
            e.id !== newItem.id ||
            e.color !== newItem.color ||
            e.capacity !== newItem.capacity
        );
        state.value = [
          ...state.value,
          {
            id: duplicate[0].id,
            color: newItem.color,
            capacity: newItem.capacity,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...action.payload,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
      console.log(state.value, "state.value");
    },
  },
  updateItems: (state, action) => {
    const newItem = action.payload;
    const item = state.value.filter(
      (e) =>
        e.id === newItem.id &&
        e.color === newItem.color &&
        e.capacity === newItem.capacity
    );
    if (item.length > 0) {
      state.value = state.value.filter(
        (e) =>
          e.id !== newItem.id ||
          e.color !== newItem.color ||
          e.capacity !== newItem.capacity
      );
      state.value = [
        ...state.value,
        {
          id: item[0].id,
          color: newItem.color,
          capacity: newItem.capacity,
          price: newItem.price,
          quantity: newItem.quantity,
        },
      ];
    }
    localStorage.setItem(
      "cartItems",
      JSON.stringify(
        state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
      )
    );
  },
  removeItem: (state, action) => {
    const item = action.payload;
    state.value = state.value.filter(
      (e) =>
        e.slug !== item.slug || e.color !== item.color || e.size !== item.size
    );
    localStorage.setItem(
      "cartItems",
      JSON.stringify(
        state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
      )
    );
  },
});

export const { addItem, removeItem, updateItem } = cartItems.actions;

export default cartItems.reducer;
