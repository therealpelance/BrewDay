import React from 'react';
import './LocationList.css';
import Location from '../Location/Location';

function LocationList(props) {
    const { locationsResults } = props;
    return (
        <>
            {locationsResults.map((location) => (
                <Location 
                    key={location.location.id}
                    location={location}
                />
            ))}
        </>
    );
}

export default LocationList;
