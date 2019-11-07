import React from 'react';
import HotelImage from '../../atoms/HotelImage/HotelImage';

const HotelImageBox = ({hotelName}) => {
    return (
        <div className='hotel-image-box col-md-4 col-xs-12'>
            <HotelImage hotelName={hotelName}></HotelImage>
        </div>
    );
};

export default HotelImageBox;