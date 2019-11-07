import React from 'react';

const FeatureBadge = ({features}) => {
    return (
        <ul>
            {
                features.map((f) => {
                    return(       
                        <li className="feature-badge">
                            <p className="feature-badge--desc text--xs">{f}</p>
                        </li>
                    )
                })
            }
       </ul>
    );
};

export default FeatureBadge;