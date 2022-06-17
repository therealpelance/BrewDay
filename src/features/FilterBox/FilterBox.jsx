import React from 'react';
import './FilterBox.css';
import Marker from '../Marker/Marker';
import { useSelector } from 'react-redux';

function FilterBox(props) {
    let locationTypes = useSelector((state) => state.locations.locationTypes);

    return (
        <div className='filterBox'>
            {locationTypes.map((type) => (
                <div className='filterTile'>
                    <Marker type={type} />
                    <p className='filterText'>{type.Display}</p>
                </div>
            ))}
        </div>
    );
}

export default FilterBox;