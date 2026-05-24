import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrainCard = ({ train }) => {
  const navigate = useNavigate();

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px' }}>
      <h3>Потяг {train.number}</h3>
      <p><strong>Маршрут:</strong> {train.route.from} → {train.route.to}</p>
      <p><strong>Відправлення:</strong> {new Date(train.departure).toLocaleString('uk-UA')}</p>
      <p><strong>Тривалість:</strong> {train.duration}</p>
      <button 
        onClick={() => navigate(`/booking/${train.id}`)}
        style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Вибрати квитки
      </button>
    </div>
  );
};

export default TrainCard;