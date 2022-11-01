import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: [],
  currentProgram:"Fire"
};

export const programsSlice = createSlice({
  name: "programs",
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
    },
    setInitialFavorites:(state, action) => {
      state.favorites = action.payload
    }
  },
});

export const { toggleFavorites, setCurrentProgram, setInitialFavorites } = programsSlice.actions;
export default programsSlice.reducer;
