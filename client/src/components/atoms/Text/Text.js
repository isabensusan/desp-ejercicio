import React from 'react';
import './styles.scss'

const Text = ({text, type, level}) => {
    const textLevel = level;
    return (
        <div>
            <textLevel className={`text ${type}`}>
                {text}
            </textLevel>
        </div>        
    );
};

export default Text;
