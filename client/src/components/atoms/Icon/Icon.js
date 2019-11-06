import React from 'react';

const Icon = ({size, type}) => {
    return (
        <i className={`icon icon--${size} icon--${type}`}></i>
    );
};

export default Icon;