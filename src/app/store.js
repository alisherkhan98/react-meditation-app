import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/auth/userSlice';
import drawerReducer from '../features/drawers/drawerSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    drawers: drawerReducer,

  },
});
