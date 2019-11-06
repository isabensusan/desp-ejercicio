import React from 'react';
import './styles';

const Link = ({text, type}) => {
    return (
        <a className={`text ${type}`}>{text}</a>
    );
};

export default Link;