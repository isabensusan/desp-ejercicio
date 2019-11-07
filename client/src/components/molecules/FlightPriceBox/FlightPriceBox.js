import React from 'react';

const FlightPriceBox = ({flightPrice}) => {
    return (
        <div className='flight-price-box'>
            <p className='flight-price-box__final-price-dt color--dark-gray text--xs text--semibold'>Precio final</p>
            <p className='color--light-gray text--xs'>¡Todo incluido!</p>
            <h3 className='text--regular'>$ {flightPrice}</h3>
            <p className='flight-price-box__final-price-m color--dark-gray text--xs text--semibold'>Precio final</p>
        </div>
    );
};

export default FlightPriceBox;