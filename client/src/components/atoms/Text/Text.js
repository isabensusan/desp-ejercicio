import React, { Component } from '././././node_modules/react';
import './styles.css'

const Text = ({text, type}) => {
    return (
        <p className={`text ${type}`}>
            {text}
        </p>
    );
};

export default Text;