import React from 'react';
import Icon from '../../atoms/Icon/Icon';

const Amenities = ({amenities}) => {
    return (
        <div className='amenities'>
            {
                amenities.map((a) => {
                    return(
                        <Icon size={'lm'} type={a}></Icon>
                    )
                })
            }
        </div>
    );
};

export default Amenities;