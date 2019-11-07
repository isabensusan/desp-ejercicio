import React from 'react';

const LocationText = ({text, mapLink}) => {
    return (
        <div className='location-text'>
            <p className='location-text--description color--light-gray text--xs'>{text}</p>      
            <a className='location-text--link text--xs' href={mapLink}>Ver Mapa</a>     
        </div>        
    );
};

export default LocationText;
