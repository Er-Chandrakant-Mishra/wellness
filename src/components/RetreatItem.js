import React from 'react';
import { Link } from 'react-router-dom';

const RetreatItem = ({ retreat }) => (
  <div className="retreat-item">
    <img src={retreat.image} alt={retreat.title} />
    <h2>{retreat.title}</h2>
    <p>{retreat.description}</p>
    <p>{retreat.date}</p>
    <p>{retreat.location}</p>
    <p>{retreat.price}</p>
    <Link to={`/retreat/${retreat.id}`}>View Details</Link>
  </div>
);

export default RetreatItem;
