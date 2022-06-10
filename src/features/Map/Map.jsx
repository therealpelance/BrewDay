import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHRzZGV2IiwiYSI6ImNsNDdrZ29yYjBpdHAza3FpYXNscGtqNWUifQ.9qYrfbdfIn0EFctT_EY0ew'

function Map(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-85.14);
    const [lat, setLat] = useState(41.08);
    const [zoom, setZoom] = useState(9);

    useEffect (() => {
        if (map.current) return; // Makes sure map only initializes once
        map.current = new mapboxgl.Map ({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="Map-portal"></div>
        </div>
    );
}

export default Map;