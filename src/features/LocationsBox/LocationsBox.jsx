import React from 'react';
import './LocationsBox.css';
import FilterBox from '../FilterBox/FilterBox';
import LocationList from '../LocationList/LocationList';

function LocationsBox(props) {
    const { pageName } = props;
    return (
        <div className="locations-box">
            <div className="list-info">
                <h3 className='list-title'>Locations {pageName}.</h3>
            </div>
            <FilterBox />
            <LocationList />
        </div>
    )
};

export default LocationsBox;

