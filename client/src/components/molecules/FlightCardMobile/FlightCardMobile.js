import React from 'react';
// import FlightCardDtHeader from '../FlightCardDtHeader/FlightCardDtHeader';
// import FlightCardDtDescriptionRow from './FlightCardDtDescriptionRow/FlightCardDtDescriptionRow';
// import FlightPriceBox from '../FlightPriceBox/FlightPriceBox';
import Button from '../../atoms/Button/Button';
import CuotasText from '../CuotasText/CuotasText';
import TramoMarker from '../TramoMarker/TramoMarker';
import FlightCardMHeader from './FlightCardMHeader/FlightCardMHeader';
import FlightPriceBox from '../FlightPriceBox/FlightPriceBox';
import FlightCardMDescriptionRow from './FlightCardMDescription/FlightCardMDescription';

const FlightCardDesktop = ({flightData}) => {
    return (
        <div className='flight-card-m row'>
            <div className='flight-card-m__details col-xs-12'>
                <div>
                    <TramoMarker tripLeg='departure' flightDate={flightData.departure.date}></TramoMarker>
                    <FlightCardMHeader flightLegData={flightData.departure}></FlightCardMHeader>
                    <FlightCardMDescriptionRow flightData={flightData.departure}></FlightCardMDescriptionRow>
                </div>
                <div className='flight-card-m__details-return'>
                    <TramoMarker tripLeg='return' flightDate={flightData.return.date}></TramoMarker>
                    <FlightCardMHeader flightLegData={flightData.return}></FlightCardMHeader>
                    <FlightCardMDescriptionRow flightData={flightData.return}></FlightCardMDescriptionRow>
                </div>
                <div className='flight-card-m__note'>
                    <p className='text--sm color--light-gray text--center'>¡Podés sumar puntos AAdvantage!</p>
                </div>
            </div>
            <div className='flight-card-m__price-container col-xs-12'>
                <div className='row'>
                    <FlightPriceBox flightPrice={flightData.price}></FlightPriceBox> 
                    <Button theme='primary' size='md' classN='col-xs-5'>Seleccionar</Button>      
                </div>                       
            </div>
            <div className='flight-card-m__cuotas col-xs-12'>    
                <CuotasText descText='¡Hasta en 50 cuotas!' linkText='Ver más bancos y tarjetas'></CuotasText>
            </div>
        </div>
    );
};

export default FlightCardDesktop;