import React from 'react';
import './card.css';

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${monster.id}?set=set5`} />
      <h1>{monster.name}</h1>
    </div>    
  );
};

export default Card;