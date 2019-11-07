import React, { Component } from 'react';
import HotelsList from '../organisms/HotelsList/HotelsList';
import FlightsList from '../molecules/FlightsList/FlightsList';
import Tabs from '../molecules/Tabs/Tabs';

class Home extends Component {
    render() {
        return (
            <Tabs>
                Vista Hoteles
                <span>
                    <HotelsList></HotelsList>
                </span>
                Vista Vuelos                
                <span>
                    <FlightsList></FlightsList>    
                </span>            
            </Tabs>
        );
    }
}

export default Home;
