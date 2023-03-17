import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
    name: 'sideBar',
    initialState: {
        isOpen: true
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export const { toggleSidebar } = SideBarSlice.actions;
export default SideBarSlice.reducer;