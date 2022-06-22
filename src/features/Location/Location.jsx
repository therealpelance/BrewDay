import React from 'react';
import './Location.css';

function Location(props) {
    const { location } = props;

    return (
        <div className='location-card'>
            <h4 className='locationName'>{location.location.name}</h4>
            <p className='locationType'>{location.location.status}</p>
        </div>
    );
}

export default Location;