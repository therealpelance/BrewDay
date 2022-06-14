import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    locations: {},
    lat: 41.08,
    lng: -85.14,
    zoom: 9
};

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setLatitude(state, action) {
            state.lat = action.payload;
        },
        setLongitude(state, action) {
            state.lng = action.payload;
        },
        setZoom(state, action) {
            state.zoom = action.payload;
        },
    }
});

export const {
    setLatitude,
    setLongitude,
    setZoom,
} = mapSlice.actions;

export default mapSlice.reducer;