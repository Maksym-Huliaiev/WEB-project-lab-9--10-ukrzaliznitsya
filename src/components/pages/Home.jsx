import React, { useState } from 'react';
import { trains } from '../data/trains';
import TrainCard from '../components/TrainCard';

const Home = () => {
  const [search, setSearch] = useState('');

  const filteredTrains = trains.filter(t => 
    t.number.toLowerCase().includes(search.toLowerCase()) ||
    t.route.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Розклад потягів</h1>
      <input 
        type="text" 
        placeholder="Пошук за номером або містом..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredTrains.map(train => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
};

export default Home;