import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";
import drawerReducer from "../features/drawers/drawerSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    drawers: drawerReducer,
    favorites: favoritesReducer,
  },
});
