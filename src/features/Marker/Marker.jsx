import React from 'react';
import './Marker.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Marker(props) {
    const type = props.type;

    const getStatus = () => {
        if (!type.active) {
            return 'inactive';
        }
        return
    }

    return (
        <FaMapMarkerAlt className={`${type.Reference}Marker ${getStatus()}`} />
    );
};

export default Marker;