import React, { Component } from 'react';
import Text from '../../atoms/Text/Text';
import LocationText from '../../atoms/LocationText/LocationText';
import RatingBadge from '../../atoms/RatingBadge/RatingBadge';
import HotelStars from '../HotelStars/HotelStars';
import Amenities from '../Amenities/Amenities';
import FeatureBadge from '../../atoms/FeatureBadge/FeatureBadge';

const HotelDescriptionBox = ({ name, rating, stars, amenities, features }) =>  {
    console.log(name)
    return (
        <div className='hotel-desc-box col-md-5 col-xs-12'>
            <h3>{name}</h3>
            <LocationText text='Miami, Miami Springs' mapLink='www.google.com'></LocationText>
            <RatingBadge rating={rating}></RatingBadge>
            <HotelStars stars={stars}></HotelStars>
            <Amenities amenities={amenities}></Amenities>
            <FeatureBadge features={features}></FeatureBadge>
        </div>
    );
}

export default HotelDescriptionBox;