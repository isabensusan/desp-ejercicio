import React from 'react';
import Icon from '../../../atoms/Icon/Icon';
import AirlineBadge from '../../../atoms/AirlineBadge/AirlineBadge';
import LugaggeIcons from '../../LugaggeIcons/LugaggeIcons';
import StopsComponent from '../../StopsComponent/StopsComponent';

const FlightCardMDescriptionRow = ({flightData}) => {
    return (
        <div className='flight-card-m-description'>
            <div className='flight-card-m-description__radio-icon'>
                <Icon type='radio-circle'></Icon>
            </div>
            <div className='flight-card-m-description__middle-block-wrapper'>
                <div className='flight-card-m-description__middle-block'>
                    <div className='flight-card-m-description__departure'>
                        <p className='color--gray'>{flightData['airport-code-from']}</p>
                        <p className='text--md color--dark-gray text--semibold'>{flightData['departure-time']}</p>                
                    </div>
                    <StopsComponent stopCount={flightData.stops}></StopsComponent>
                    <div className='flight-card-m-description__arrival'>
                        <p className='color--gray'>{flightData['airport-code-to']}</p>
                        <p className='flight-card-m-description__a-time text--md color--dark-gray text--semibold'>{flightData['arrival-time']}</p>
                        <p className='flight-card-m-description__days-after text--xs color--red'>+{flightData['arrival-days-after']}</p>
                    </div>
                    <div className='flight-card-m-description__lugagge-wrapper'>                
                        <LugaggeIcons lugaggeData={flightData.lugagge}></LugaggeIcons>
                    </div>
                </div>
                <div>
                    <p className='flight-card-m__duration text--xs color--gray text--left'>Duración: {flightData.duration}</p>                   
                </div>
            </div>            
        </div>
    );
};

export default FlightCardMDescriptionRow;