import React from 'react';
import FilterBox from '../../features/FilterBox/FilterBox';
import LocationList from '../../features/LocationList/LocationList';
import Map from '../../features/Map/Map';
import './NearMe.css';

function NearMe () {
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