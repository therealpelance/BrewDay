import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    locations: {}
};

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {

    }
});

export default locationsSlice.reducer;