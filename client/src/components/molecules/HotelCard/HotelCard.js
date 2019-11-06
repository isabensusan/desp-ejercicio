import React, { Component } from 'react';
import HotelDescriptionBox from '../HotelDescriptionBox/HotelDescriptionBox';

class HotelCard extends Component {
    render() {
        return (
            <div>
                <HotelDescriptionBox></HotelDescriptionBox>
            </div>
        );
    }
}

export default HotelCard;