import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import modalsReducer from "./features/modalsSlice";
import programsReducer from "./features/programsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modals: modalsReducer,
    programs: programsReducer,
  },
});
