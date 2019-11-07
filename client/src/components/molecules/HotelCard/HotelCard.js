import React, { Component } from 'react';
import HotelDescriptionBox from '../HotelDescriptionBox/HotelDescriptionBox';
import HotelImageBox from '../HotelImageBox/HotelImageBox';
import HotelPaymentBox from '../HotelPaymentBox/HotelPaymentBox';

const HotelCard = (h) => {
    let hotel = h.data;
    return (
        <div className='hotel-card col-xs-10 col-sm-8'> 
            <div className='hotel-card__wrapper row'>
                <HotelImageBox hotelName={hotel.name}></HotelImageBox>
                <HotelDescriptionBox 
                    name={hotel.name}
                    rating={hotel.rating}
                    stars={hotel.stars}
                    amenities={hotel.amenities}
                    features={hotel.features}>
                </HotelDescriptionBox>
                <HotelPaymentBox
                    hotelPrice={hotel.price}
                    hotelDiscount={hotel.discount}>                    
                </HotelPaymentBox>
            </div>                       
        </div>
    );
}

export default HotelCard;