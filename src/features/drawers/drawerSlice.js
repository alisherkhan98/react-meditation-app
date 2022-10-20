import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    desktopDrawerOpen: false,
    mobileDrawerOpen: false,
}

export const drawerSlice = createSlice({
    name: "drawers",
    initialState,
    reducers: {
        openMobileDrawer: (state) => {
            state.mobileDrawerOpen = true
        },
     
    },
  });


  export const {openMobileDrawer, closeMobileDrawer} = drawerSlice.actions
  export default drawerSlice.reducer