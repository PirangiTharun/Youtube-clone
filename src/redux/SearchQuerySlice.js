import { createSlice } from "@reduxjs/toolkit";

const SearchQuerySlice = createSlice({
    name: 'searchQuery',
    initialState: {
        key: ''
    },
    reducers: {
        updateSearchQuery: (state,action)=>{
            state.key=action.payload;
        }
    }
});

export const {updateSearchQuery} = SearchQuerySlice.actions;
export default SearchQuerySlice.reducer;