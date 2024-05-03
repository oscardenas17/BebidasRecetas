import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./slices/recipeSlice";
import { devtools } from "zustand/middleware";
import {
  createFavoritesSlice,
  FavoritesSliceType,
} from "./slices/favoritesSlice";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./slices/notificationsSlice";

export const useAppStore = create<
  RecipesSliceType & FavoritesSliceType & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
