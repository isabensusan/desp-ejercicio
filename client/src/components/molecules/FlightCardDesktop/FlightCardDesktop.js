import React from 'react';
import FlightCardDtHeader from './FlightCardDtHeader/FlightCardDtHeader';
import FlightCardDtDescriptionRow from './FlightCardDtDescriptionRow/FlightCardDtDescriptionRow';
import FlightPriceBox from '../FlightPriceBox/FlightPriceBox';
import Button from '../../atoms/Button/Button';
import CuotasText from '../CuotasText/CuotasText';

const FlightCardDesktop = ({flightData}) => {
    return (
        <div className='flight-card-dt row'>
            <div className='flight-card-dt__details col-xs-9'>
                <div>
                    <FlightCardDtHeader flightLegData={flightData.departure} flightLeg='departure'></FlightCardDtHeader>
                    <FlightCardDtDescriptionRow flightData={flightData.departure}></FlightCardDtDescriptionRow>
                </div>
                <div>
                    <FlightCardDtHeader flightLegData={flightData.return} flightLeg='return'></FlightCardDtHeader>
                    <FlightCardDtDescriptionRow flightData={flightData.return}></FlightCardDtDescriptionRow>
                </div>
                <div className='flight-card-dt__note'>
                    <p className='text--sm color--light-gray'>¡Podés sumar puntos AAdvantage!</p>
                </div>
            </div>
            <div className='flight-card-dt__price-container col-xs-3'>
                <FlightPriceBox flightPrice={flightData.price}></FlightPriceBox>
                <Button theme='primary' size='md'>Seleccionar</Button>
                <CuotasText descText='¡Hasta en 50 cuotas!' linkText='Ver más bancos y tarjetas'></CuotasText>
            </div>
        </div>
    );
};

export default FlightCardDesktop;