import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Products } from "../dal/types";

const loadCarts = (): CartProducts[] => {
  try {
    const data = localStorage.getItem("carts");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveCarts = (items: CartProducts[]) => {
  localStorage.setItem("carts", JSON.stringify(items));
};

interface CartProducts extends Products {
  quantity: number;
}

interface CartState {
  items: CartProducts[];
}

const initialState: CartState = {
  items: loadCarts(),
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      saveCarts(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCarts(state.items);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      saveCarts(state.items);
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          // quantity === 1 → удалить товар полностью
          state.items.splice(index, 1);
        }
      }
      saveCarts(state.items);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
