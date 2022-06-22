import React from 'react';
import './FilterBox.css';
import Marker from '../Marker/Marker';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterStatus } from '../../app/locationsSlice';

function FilterBox(props) {
    let locationTypes = useSelector((state) => state.locations.locationTypes);
    const dispatch = useDispatch();

    const onToggleFilter = (index) => {
        dispatch(setFilterStatus(index));
    }

    return (
        <div className="filterBoxContainer">
            <h4>Filter your results</h4>
            <div className='filterBox'>
                {locationTypes.map((type, index) => (
                    <div className='filterTile' key={index}>
                        <button className='filterButton'
                            type='button'
                            onClick={() => {onToggleFilter(index)}}>
                            <Marker type={type} />
                            <p className='filterText'>{type.Display}</p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilterBox;