import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";
import modalsReducer from "../features/modals/modalsSlice";
import programsReducer from "../features/programs/programsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modals: modalsReducer,
    programs: programsReducer,
  },
});
