import React, { Component } from 'react';
import Text from '../../atoms/Text/Text';
import LocationText from '../../atoms/LocationText/LocationText';
import RatingBadge from '../../atoms/RatingBadge/RatingBadge';
import HotelStars from '../HotelStars/HotelStars';
import Amenities from '../Amenities/Amenities';

const HotelDescriptionBox = ({ name, rating, stars, amenities, features }) =>  {
    console.log(name)
    return (
        <div className='description-box'>
            <h3>{name}</h3>
            {/* <Text text={'Hotel Faena'} type={'title'} level={'h1'}></Text> */}
            <LocationText text='Miami, Miami Springs' mapLink='www.google.com'></LocationText>
            <RatingBadge rating={rating}></RatingBadge>
            <HotelStars stars={stars}></HotelStars>
            <Amenities amenities={amenities}></Amenities>
        </div>
    );
}

export default HotelDescriptionBox;