import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const RetreatDetail = () => {
  const { id } = useParams();
  const [retreat, setRetreat] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRetreat = async () => {
      const response = await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`);
      setRetreat(response.data);
    };
    fetchRetreat();
  }, [id]);

  const handleBackClick = () => {
    // history.push('/retreat');
  };

  return retreat ? (
    <div className="retreat-detail">
      <img src={retreat.image} alt={retreat.title} />
      <h1>{retreat.title}</h1>
      <p>{retreat.description}</p>
      <p>{retreat.date}</p>
      <p>{retreat.location}</p>
      <p>{retreat.price}</p>
      <button onClick={handleBackClick}>Back</button>
    </div>
  ) : (
    <div>Loading...</div>
  
  );
};

export default RetreatDetail;
