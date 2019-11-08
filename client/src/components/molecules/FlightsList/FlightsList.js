import React from 'react';
import FlightCardContainer from '../FlightCardContainer/FlightCardContainer';

const FlightsList = () => {
    // dummy json data for flight
    const flights = [{
        'price': '42.479',
        'cuotas': 50,
        'departure': {
        'airport-code-from': 'EZE',
        'city-from': 'Buenos Aires',
        'airport-code-to': 'CDG',
        'city-to': 'Paris',
        'date': 'dom, 22 sep. 2019',
        'airline': 'American',
        'departure-time': '20:55',
        'arrival-time': '6:50',
        'arrival-days-after': 2,
        'duration': '28h 55m',
        'stops': 2,
        'lugagge': [
            'handbag',
            'single'
        ]
        },
        'return': {
        'airport-code-from': 'CDG',
        'city-from': 'Paris',
        'airport-code-to': 'EZE',
        'city-to': 'Buenos Aires',
        'date': 'mié, 2 oct. 2019',
        'airline': 'American',
        'departure-time': '14:15',
        'arrival-time': '09:01',
        'arrival-days-after': 1,
        'duration': '23h 46m',
        'stops': 2,
        'lugagge': [
            'handbag',
            'single'
        ]
        }
    }]

    return (
        <div className='flights-list'>
           { 
                flights.map(flight => {
                    return (                       
                        <FlightCardContainer flightData={flight}></FlightCardContainer>
                    )                    
                })
            }
        </div>
    );
};

export default FlightsList;