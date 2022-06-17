import React from 'react';
import './Marker.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Marker(props) {
    const type = props.type;

    return (
        <FaMapMarkerAlt className={`${type.Reference}Marker`} />
    );
};

export default Marker;