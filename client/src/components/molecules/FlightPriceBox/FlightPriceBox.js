import React from 'react';

const FlightPriceBox = ({flightPrice}) => {
    return (
        <div>
            <p className='color--dark-gray text--xs text--semibold'>Precio final</p>
            <p className='color--light-gray text--xs'>¡Todo incluido!</p>
            <h3 className='text--regular'>$ {flightPrice}</h3>
        </div>
    );
};

export default FlightPriceBox;