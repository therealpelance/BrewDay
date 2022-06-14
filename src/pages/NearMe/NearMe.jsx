import React from 'react';
import FilterBox from '../../features/FilterBox/FilterBox';
import LocationList from '../../features/LocationList/LocationList';
import Map from '../../features/Map/Map';
import './NearMe.css';
import {
    setLatitude,
    setLongitude
} from '../../features/Map/mapSlice';
import { useDispatch } from 'react-redux';

function NearMe () {
    const dispatch = useDispatch();

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setCenter)
        } else {
            return
        }
    };

    const setCenter = (position) => {
        dispatch(setLatitude(position.coords.latitude));
        dispatch(setLongitude(position.coords.longitude));
    };

    getUserLocation();

    return (
        <div className='Page-container'>
            <h1>Brews Near Me</h1>
            <div className="Content-container">
                <div className='Map-container'>
                    <Map />
                </div>
                <div className="Locations-container">
                    <div className="Filters-container">
                        <FilterBox />
                    </div>
                    <div className="LocationsList-container">
                        <LocationList />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NearMe;