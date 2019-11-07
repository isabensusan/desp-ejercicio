import React from 'react';
import Icon from '../../atoms/Icon/Icon';

const LugaggeIcons = ({lugaggeData}) => {
    return (
        <div>
            {
                lugaggeData.map(piece => {
                    return (
                        <Icon type={piece} color='green' size='lg'></Icon>
                    )                    
                })
            }
        </div>
    );
};

export default LugaggeIcons;