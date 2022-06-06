import React from 'react';
import './Map.css';

function Map(props) {
    return (
        <div>
            {/* <img src='http://beermapping.com/maps/proxymaps.php?locid=972&amp;d=1&amp;d=5' alt='map' /> */}
            <iframe src='http://beermapping.com/maps/blogproxy.php?locid=1000&amp;d=1&amp;type=norm' className='Map' title='map'></iframe>
        </div>
    );
}

export default Map;