import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingsDrawerOpen: false,
  playerOpen: false,
  signOutModalOpen: false,
  isLoading: true,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openSettingsDrawer: (state) => {
      state.settingsDrawerOpen = true;
    },

    closeSettingsDrawer: (state) => {
      state.settingsDrawerOpen = false;
    },
    openPlayer: (state) => {
      state.playerOpen = true;
    },

    closePlayer: (state) => {
      state.playerOpen = false;
    },
    openLoading: (state) => {
      state.isLoading = true;
    },

    closeLoading: (state) => {
      state.isLoading = false;
    },
    openSignOutModal: (state) => {
      state.signOutModalOpen = true;
    },

    closeSignOutModal: (state) => {
      state.signOutModalOpen = false;
    },
  },
});

export const {
  openSettingsDrawer,
  closeSettingsDrawer,
  openPlayer,
  closePlayer,
  openSignOutModal,
  closeSignOutModal,
  openLoading,
  closeLoading,
} = modalSlice.actions;
export default modalSlice.reducer;
