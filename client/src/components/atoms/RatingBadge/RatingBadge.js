import React from 'react';

const RatingBadge = ({ rating }) => {
    return (
        <div className='rating-badge'>
            { rating }
        </div>
    );
};

export default RatingBadge;