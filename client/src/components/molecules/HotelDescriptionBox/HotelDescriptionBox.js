import React, { Component } from 'react';
import Text from '../../atoms/Text/Text';
import LocationText from '../../atoms/LocationText/LocationText';
import RatingBadge from '../../atoms/RatingBadge/RatingBadge';

class HotelDescriptionBox extends Component {
    render() {
        return (
            <div className='description-box'>
                <h3></h3>
                {/* <Text text={'Hotel Faena'} type={'title'} level={'h1'}></Text> */}
                <LocationText text='Miami, Miami Springs' mapLink='www.google.com'></LocationText>
                <RatingBadge rating='7.7'></RatingBadge>
            </div>
        );
    }
}

export default HotelDescriptionBox;