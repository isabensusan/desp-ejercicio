import React from 'react';

const StopsComponent = ({stopCount}) => {
    let i = 0;
    let dots = [];
    for (i=0; i < stopCount; i++) {
        dots.push(
            <div className='stops__dots'></div>
        )
    }
    return (
        <div className='stops'>
            <p className='text--xs'>{stopCount} escalas</p>        
            <div className='stops__dots-wrapper'>
                <span className='stops__dots-line'></span>
                {dots}
            </div>
        </div>
    );
};

export default StopsComponent;