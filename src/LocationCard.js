import React from 'react';
import './locationCardStyling.css'

export const LocationCard = ({name, desc}) => (
<div className="location-container">
    <h1 className="location-name">{name}</h1>
    <p className="location-desc">{desc}</p>
</div>
)

export default LocationCard;
