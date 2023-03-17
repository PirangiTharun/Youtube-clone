import { configureStore } from "@reduxjs/toolkit";
import SearchQuerySlice from "./SearchQuerySlice";
import SideBarSlice from "./SideBarSlice";

const store = configureStore({
    reducer: {
        sideBar: SideBarSlice,
        searchQuery: SearchQuerySlice
    }
});

export default store;