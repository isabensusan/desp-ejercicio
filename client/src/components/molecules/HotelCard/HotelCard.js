import React, { Component } from 'react';
import HotelDescriptionBox from '../HotelDescriptionBox/HotelDescriptionBox';

const HotelCard = (h) => {
    let hotel = h.data;
    return (
        <div>
            <HotelDescriptionBox 
                name={hotel.name}
                rating={hotel.rating}
                stars={hotel.stars}
                amenities={hotel.amenities}
                features={hotel.features}>
            </HotelDescriptionBox>
        </div>
    );
}

export default HotelCard;