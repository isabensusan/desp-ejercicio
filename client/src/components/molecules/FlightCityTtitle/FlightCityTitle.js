import React from 'react';

const FlightCityTitle = ({flightAirportCode, flightCity}) => {
    return (
        <div>
            <h4 className='text--md color--gray'>{flightAirportCode}</h4>
            <p className='text--xs color--light-gray'>{flightCity}</p>
        </div>
    );
};

export default FlightCityTitle;