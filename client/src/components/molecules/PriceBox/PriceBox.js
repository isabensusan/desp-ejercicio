import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';

const PriceBox = ({hotelPrice, hotelDiscount}) => {    
    const discount = parseInt(hotelDiscount);
    const price = parseInt(hotelPrice);
    const discountedPrice = discount && discount > 0 ? + Math.round((price - (price * discount / 100)) * 1000) : hotelPrice;

    return (
        <div class='price-box text--left col-xs-12'>
            <p className='price-box__final-price-text text--xs color--light-gray'>Precio final por 1 noche para 2 personas</p>
            {
                discount && discount > 0 ? <s className='text--xs color--light-gray'>$ {hotelPrice}</s> : ''
            }            
            <div className='price-box__final-price-wrapper'>
                <Icon color="purple" type="info-circle-outline" size="lm"></Icon>
                <h1 className="price-box__final-price">
                    <span className='text--md'> $</span>
                    {discountedPrice}
                </h1>        
            </div>
            <Button theme='primary' size='md' classN='price-box__button'>Ver detalle</Button>     
        </div>
    );
};

export default PriceBox;