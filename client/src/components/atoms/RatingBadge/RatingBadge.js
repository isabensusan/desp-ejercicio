import React from 'react';
import './styles.scss';

const RatingBadge = ({rating}) => {
    return (
        <div className='rating-badge'>
            {rating}
        </div>
    );
};

export default RatingBadge;