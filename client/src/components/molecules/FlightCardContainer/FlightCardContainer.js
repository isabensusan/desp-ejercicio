import React from 'react';
import TramoMarker from '../TramoMarker/TramoMarker';
import FlightCardDesktop from '../FlightCardDesktop/FlightCardDesktop';
import FlightCardMobile from '../FlightCardMobile/FlightCardMobile';

class FlightCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false
        };

        this.updateCondition = this.updateCondition.bind(this);
    }

    componentDidMount() {
        this.updateCondition();
        window.addEventListener("resize", this.updateCondition);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateCondition);
    }

    updateCondition() {
        this.setState({ isDesktop: window.innerWidth > 1024 });
    }

    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <div className='flight-card__container col-xs-8'>
            {isDesktop ? (
                <FlightCardDesktop flightData={this.props.flightData}></FlightCardDesktop>
            ) : (
                <FlightCardMobile flightData={this.props.flightData}></FlightCardMobile>
                // <div data={this.props.flightData}></div>
            )}
            </div>
        );
    }
}

export default FlightCardContainer;