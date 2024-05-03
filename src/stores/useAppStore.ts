import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./slices/recipeSlice";
import { devtools } from "zustand/middleware";
import {
  createFavoritesSlice,
  FavoritesSliceType,
} from "./slices/favoritesSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
  }))
);
