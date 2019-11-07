import React, { Component } from 'react';
import HotelsList from '../organisms/HotelsList/HotelsList';


class Home extends Component {
    render() {
        return (
            <div>
                <HotelsList></HotelsList>
            </div>
        );
    }
}

export default Home;