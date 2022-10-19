import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    desktopDrawerOpen: false,
    mobileDrawerOpen: false,
}

export const userSlice = createSlice({
    name: "drawers",
    initialState,
    reducers: {
        openMobileDrawer: (state) => {
            state.mobileDrawerOpen = true
        },
        closeMobileDrawer: (state) => {
            state.mobileDrawerOpen = false
        },
    },
  });


  export const {openMobileDrawer, closeMobileDrawer} = userSlice.actions
  export default userSlice.reducer