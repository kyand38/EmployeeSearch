import React, { useState } from 'react';
import Candidate from '../interfaces/Candidate.interface'


interface CardProps {
    item: Candidate;
  }
  
  const Card: React.FC<CardProps> = ({ item }) => {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: '18rem',
    backgroundColor: '#343a40',
    margin: '1rem',
    border: '2px solid #17a2b8',
    borderRadius: '5px',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    boxShadow: isHovered ? '0 0 15px 5px rgba(0, 255, 255, 0.6)' : 'none', // glow effect
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <div
      className="card"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.avatar_url} alt="Avatar Image" className="card-img-top" />

      <div className="">
        <p>{item.login}</p>
        <p>{item.location}</p>
        <p>{item.email}</p>
        <p>{item.company}</p>
        <p>{item.bio}</p>
      </div>
    </div>
  );
};

export default Card;