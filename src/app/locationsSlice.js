import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    locations: {bmp_locations:[
                    {location:
                        {id: 1000,
                        name: 'Piece Brewery and Pizzeria',
                        status: 'Brewpub',
                        reviewlink: 'https://beermapping.com/location/1000',
                        proxylink: 'http://beermapping.com/maps/proxymaps.php?locid=1000&amp;d=5',
                        blogmap: 'http://beermapping.com/maps/blogproxy.php?locid=1000&amp;d=1&amp;type=norm',
                        street: '1927 West North Avenue',
                        city: 'Chicago',
                        state: 'IL',
                        zip: '60622',
                        country: 'United States',
                        phone: '(773) 772-4422',
                        url: 'piecechicago.com',
                        overall: 78.888956666666,
                        imagecount: 9}
                    },
                ]},
    locationTypes: [{Display: 'Bar', Reference: 'bar', active: true}, 
                    {Display: 'Brewery', Reference: 'brewery', active: true}, 
                    {Display: 'Brew Pub', Reference: 'brewPub', active: true}, 
                    {Display: 'Beer Store', Reference: 'beerStore', active: true}
                ]
};

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        setFilterStatus(state, action) {
            state.locationTypes[action.payload].active = !state.locationTypes[action.payload].active;
        },

    }
});

export const {
    setFilterStatus,
} = locationsSlice.actions;

export default locationsSlice.reducer;