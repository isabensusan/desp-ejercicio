import React from 'react';
import americanLogo from '../../../resources/images/icons/American.png';

const AirlineBadge = ({airline}) => {
    return (
        <div className='row middle-xs'>
            <img src={americanLogo}></img>
            <p>{airline}</p>
        </div>
    );
};

export default AirlineBadge;