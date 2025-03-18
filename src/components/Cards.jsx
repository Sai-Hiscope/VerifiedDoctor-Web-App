import React from 'react';
import './Cards.css';

const Cards = ({ details }) => {
    const { name, role, image } = details;

    console.log("Rendering Card Component for:", name);
    return (
        <li className="founder-details">
            <img src={image} alt={`${name}`}  />
            <h3>{name}</h3>
            <p>{role}</p>
        </li>
    );
};

export default Cards;
