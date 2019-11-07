import React from 'react';
import TramoMarker from '../../TramoMarker/TramoMarker';
import FlightCityTitle from '../../FlightCityTtitle/FlightCityTitle';

const FlightCardDtHeader = ({flightLegData, flightLeg}) => {
    return (
        <div className='flight-card-dt__header'>

            <TramoMarker tripLeg={flightLeg} flightDate={flightLegData.date}></TramoMarker>

            <div className='flight-card-dt__header-right'>

                <FlightCityTitle flightAirportCode={flightLegData['airport-code-from']} 
                                    flightCity={flightLegData['city-from']}>
                </FlightCityTitle>

                <FlightCityTitle flightAirportCode={flightLegData['airport-code-to']} 
                                    flightCity={flightLegData['city-to']}>
                </FlightCityTitle>

                <p className='flight-card-dt__header-lugagge text--xs color--light-gray'>Equipaje</p>
                
            </div> 
        </div>
    );
};

export default FlightCardDtHeader;