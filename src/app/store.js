import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../features/Map/mapSlice';
import locationsReducer from '../app/locationsSlice';

export const store = configureStore({
  reducer: {
    map: mapReducer,
    locations: locationsReducer
  },
});
