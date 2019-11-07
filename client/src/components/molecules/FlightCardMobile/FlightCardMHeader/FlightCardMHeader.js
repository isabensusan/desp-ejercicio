import React from 'react';
import AirlineBadge from '../../../atoms/AirlineBadge/AirlineBadge';
import Icon from '../../../atoms/Icon/Icon';

const FlightCardMHeader = ({flightLegData}) => {
    return (
        <div className='flight-card-m__header'>
            <span></span>
            <AirlineBadge airline={flightLegData.airline}></AirlineBadge>
            <Icon type='info-circle-outline' color='purple' size='lg'></Icon>
        </div>
    );
};

export default FlightCardMHeader;