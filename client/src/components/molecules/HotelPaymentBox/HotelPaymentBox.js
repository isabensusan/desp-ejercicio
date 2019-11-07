import React from 'react';
import PriceBox from '../PriceBox/PriceBox';
import CuotasText from '../CuotasText/CuotasText';

const HotelPaymentBox = ({hotelPrice, hotelDiscount}) => {
    return (        
        <div class='hotel-payment-box col-md-3 col-xs-12'>
                <PriceBox hotelPrice={hotelPrice} hotelDiscount={hotelDiscount} ></PriceBox>
                <CuotasText descText='Paga al alojamiento o hasta en 12 cuotas sin interés.' 
                            linkText='Ver bancos y tarjetas'>
                </CuotasText>
        </div>
    );
};

export default HotelPaymentBox;