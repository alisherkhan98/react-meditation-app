import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAnonymous: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    loginAsGuest: (state) => {
      state.user = { name: "Guest" };
    },
    setIsAnonymous: (state, action) => {
      state.isAnonymous = action.payload;
    },
  },
});

export const { login, logout, loginAsGuest, setIsAnonymous } = userSlice.actions;
export default userSlice.reducer;
