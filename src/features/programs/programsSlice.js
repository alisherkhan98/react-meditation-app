import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: [],
  currentProgram:"Fire"
};

export const programsSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          (fav) => fav !== action.payload
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
    setCurrentProgram: (state, action) => {
      state.currentProgram = action.payload
    }
  },
});

export const { toggleFavorites, setCurrentProgram } = programsSlice.actions;
export default programsSlice.reducer;
