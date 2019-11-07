import React, { Component } from 'react';
import HotelsList from '../organisms/HotelsList/HotelsList';
import FlightCardContainer from '../molecules/FlightCardContainer/FlightCardContainer';
import FlightsList from '../molecules/FlightsList/FlightsList';


class Home extends Component {
    render() {
        return (
            <div>
                {/* <HotelsList></HotelsList> */}
                <FlightsList></FlightsList>
                {/* <FlightCardContainer></FlightCardContainer> */}
            </div>
        );
    }
}

export default Home;