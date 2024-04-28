import { create } from "zustand";
import { createRecipesSlices, RecipesSliceType } from "./slices/recipeSlice";

export const useAppStore = create<RecipesSliceType>((...a) => ({
  ...createRecipesSlices(...a),
}));
