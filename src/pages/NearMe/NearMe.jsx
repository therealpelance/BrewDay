import React from 'react';
import Map from '../../features/Map/Map';
import './NearMe.css';
import {
    setLatitude,
    setLongitude
} from '../../features/Map/mapSlice';
import { useDispatch } from 'react-redux';
import LocationsBox from '../../features/LocationsBox/LocationsBox';

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
                    <LocationsBox pageName={' Near Me'} />
                </div>
            </div>
        </div>
    )
};

export default NearMe;