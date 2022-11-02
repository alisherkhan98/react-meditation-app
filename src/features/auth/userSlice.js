import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
    loginAsGuest: (state) => {
      state.user = {name: "Guest"}
    }
  },
});

export const {login, logout, loginAsGuest} = userSlice.actions;
export default userSlice.reducer