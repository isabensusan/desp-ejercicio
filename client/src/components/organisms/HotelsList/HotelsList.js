import React, { Component } from 'react';
import axios from 'axios';
import HotelCard from '../../molecules/HotelCard/HotelCard';

class HotelsList extends Component {
    state = {
        hotels: []
    }

    componentDidMount(){
        this.getHotels();
    }
    
    getHotels = () => {
        axios.get('/api/hotels')
             .then(res => {
                    if(res.data){
                        this.setState({
                            hotels: res.data
                        })
                    }
                })
             .catch(err => console.log(err))
    }

    render() {
        let { hotels } = this.state;
        console.log(this.state);

        return (
            <div>
                {
                    hotels && hotels.length > 0 ? (
                        hotels.map(hotel => {
                            return (
                                <HotelCard key={hotel._id} data={hotel}></HotelCard>                               
                            )
                        })
                    )
                    :
                    (
                        <li>No hotels found</li>
                    )
                }
            </div>
        );
    }
}

export default HotelsList;