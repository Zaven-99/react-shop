import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Products } from "../dal/types";

const loadFavorites = (): favoriteProducts[] => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveFavorites = (items: favoriteProducts[]) => {
  localStorage.setItem("favorites", JSON.stringify(items));
};

interface favoriteProducts extends Products {
  isFavorite: boolean;
  quantity: number;
}

interface favoriteState {
  items: favoriteProducts[];
}

const initialState: favoriteState = {
  items: loadFavorites(),
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<Products>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push({
          ...action.payload,
          isFavorite: true,
          quantity: 1,
        });
      }

      saveFavorites(state.items);
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveFavorites(state.items);
    },
  },
});

export const { toggleFavorites, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
