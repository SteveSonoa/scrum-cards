import React from 'react';

import './Card.css';

export const Card = ({ number, onClick }) => (
    <div className="card-container" onClick={onClick}>
        <h1>{number}</h1>
    </div>
);

export default Card;
