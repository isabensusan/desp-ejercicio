import React from 'react';

const Icon = ({size, type, color}) => {
    const sizeClass = size && size !== '' ? 'icon--' + size : '';
    const typeClass = type && type !== '' ? 'icon--' + type : '';
    const colorClass = color && color !== '' ? 'color--' + color : '';
    return (
        <i className={`icon ${sizeClass} ${typeClass} ${colorClass}`}></i>
    );
};

export default Icon;