
import React from 'react';
import './styles.scss'

const LocationText = ({text, mapLink}) => {
    return (
        <div>
            <p className='text--light-gray'>{text}</p>      
            <a href={mapLink}>Ver Mapa</a>     
        </div>        
    );
};

export default LocationText;
