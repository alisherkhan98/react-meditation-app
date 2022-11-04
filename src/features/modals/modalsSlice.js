import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingsDrawerOpen: false,
  playerOpen: false,
  logoutModalOpen:false
};

export const drawerSlice = createSlice({
  name: "drawers",
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
    openLogoutModal: (state) => {
      state.playerOpen = true;
    },

    closeLogoutModal: (state) => {
      state.playerOpen = false;
    },
    
  },
});

export const {
  openSettingsDrawer,
  closeSettingsDrawer,
  openPlayer,
  closePlayer,
} = drawerSlice.actions;
export default drawerSlice.reducer;
