import { create } from "zustand";
import { createRecipesSlices, RecipesSliceType } from "./slices/recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlices(...a),
  }))
);
