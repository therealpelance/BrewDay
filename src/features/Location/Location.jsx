import React from 'react';
import './Location.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Location(props) {
    const { location } = props;

    const getType = () => {
        const type = location.location.status;
        if (type === 'Brewpub') {
            return 'brewpub'
        } else if (type === 'Brewery') {
            return 'brewery'
        } else if (type === 'Beer Bar') {
            return 'bar'
        } else if (type === 'Beer Store') {
            return 'beerStore'
        } else {
            return
        }
    }

    return (
        <div className='location-card'>
            <h3 className='locationName'>{location.location.name}</h3>
            <div className="location-details-box">
                <div className="location-type-box">
                    <FaMapMarkerAlt className={`icon ${getType()}`} />
                    <p className='locationType'>{location.location.status}</p>
                </div>
                <div className="location-address-box">
                    <p className='contact address'>{location.location.street}</p>
                    <p className='contact address'>{location.location.city}, {location.location.state} {location.location.zip}</p>
                    <p className='contact phone'>{location.location.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default Location;