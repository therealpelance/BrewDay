import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    setLatitude,
    setLongitude,
    setZoom
} from './mapSlice';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHRzZGV2IiwiYSI6ImNsNDdrZ29yYjBpdHAza3FpYXNscGtqNWUifQ.9qYrfbdfIn0EFctT_EY0ew';

function Map(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const mapProps = useSelector((state) => state.map);
    const {lat, lng, zoom} = mapProps;
    const dispatch = useDispatch();

    useEffect (() => {
        if (map.current) return; // Makes sure map only initializes once
        map.current = new mapboxgl.Map ({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect (() => {
        if (!map.current) return; // Waits for map to initialize
        map.current.on('move', () => {
            dispatch(setLatitude(map.current.getCenter().lat.toFixed(4)));
            dispatch(setLongitude(map.current.getCenter().lng.toFixed(4)));
            dispatch(setZoom(map.current.getZoom().toFixed(2)));
        })
    });

    return (
        <div ref={mapContainer} className="Map-portal"></div>
    );
}

export default Map;