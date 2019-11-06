import React from 'react';
import Icon from '../../atoms/Icon/Icon'

const HotelStars = ({stars}) => {
    const starIcons = [];
    for (let i=0;i<stars;i++) {
        starIcons.push(<Icon size='sm' type='star'></Icon>)
    }

    return (
        <div className='hotel-stars'>
            {starIcons}
        </div>
    );
};

export default HotelStars;