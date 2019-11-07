import React from 'react';

const LocationText = ({text, mapLink}) => {
    return (
        <div className='location-text'>
            <p className='location-text--description text--light-gray'>{text}</p>      
            <a className='location-text--link' href={mapLink}>Ver Mapa</a>     
        </div>        
    );
};

export default LocationText;
