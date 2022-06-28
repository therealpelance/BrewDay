import React from 'react';
import './LocationsBox.css';
import FilterBox from '../FilterBox/FilterBox';
import LocationList from '../LocationList/LocationList';
import { useSelector } from 'react-redux';

function LocationsBox(props) {
    const { pageName } = props;
    const locations = useSelector((state) => state.locations.locations.bmp_locations)
    const resultsNumber = locations.length;

    console.log(locations);

    return (
        <div className="locations-box">
            <div className="list-info">
                <h2 className='list-title'>Locations {pageName}.</h2>
                <p>{resultsNumber} location(s) found</p>
            </div>
            <FilterBox />
            <LocationList locationsResults={locations} />
        </div>
    )
};

export default LocationsBox;

