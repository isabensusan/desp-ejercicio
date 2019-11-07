import React from 'react';

const CuotasText = ({descText, linkText}) => {
    return (
        <div className='cuotas-box text--left col-xs-12'>
            <p className='cuotas-box--desc color--light-gray text--xs'>{descText} </p>
            <a className='cuotas-box--link text--purple text--xs'>{linkText}</a>
        </div>
    );
};

export default CuotasText;