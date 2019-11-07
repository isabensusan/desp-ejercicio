import React from 'react';
import Icon from '../../../atoms/Icon/Icon';
import AirlineBadge from '../../../atoms/AirlineBadge/AirlineBadge';
import LugaggeIcons from '../../LugaggeIcons/LugaggeIcons';

const FlightCardDtDescriptionRow = ({flightData}) => {
    return (
        <div className='flight-card-dt-description'>
            <div>
                <Icon type='radio-circle'></Icon>
                <AirlineBadge airline={flightData.airline}></AirlineBadge>
            </div>
            <div>
                <p className='text--md color--dark-gray text--semibold'>{flightData['departure-time']}</p>
                
            </div>
            <div>
                <p className='text--md color--dark-gray text--semibold'>{flightData['arrival-time']}</p>
                <p className='text--xs color--red'>+{flightData['arrival-days-after']}</p>
                <p className='text--semibold color--gray text--xs'>{flightData.duration}</p>
            </div>
            <div>                
                <LugaggeIcons lugaggeData={flightData.lugagge}></LugaggeIcons>
                <Icon type='arrow-down' color='dark-gray'></Icon>
            </div>
        </div>
    );
};

export default FlightCardDtDescriptionRow;