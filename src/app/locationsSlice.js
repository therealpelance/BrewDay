import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    locations: {},
    locationTypes: [{Display: 'Bar', Reference: 'bar'}, 
                    {Display: 'Brewery', Reference: 'brewery'}, 
                    {Display: 'Brew Pub', Reference: 'brewPub'}, 
                    {Display: 'Beer Store', Reference: 'beerStore'}
                ]
};

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {

    }
});

export default locationsSlice.reducer;