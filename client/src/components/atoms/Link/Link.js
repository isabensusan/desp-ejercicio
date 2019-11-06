import React from 'react';
import './styles.scss';

const Link = ({text, type}) => {
    return (
        <a className={`link ${type}`}>{text}</a>
    );
};

export default Link;