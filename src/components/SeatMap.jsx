import React from 'react';

const SeatMap = ({ type, totalSeats, bookedSeats, selectedSeats, onSeatClick }) => {
  const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);
  
  const renderSeat = (seat) => {
    const isBooked = bookedSeats.includes(seat);
    const isSelected = selectedSeats.includes(seat);
    let bgColor = '#00529b';
    if (isBooked) bgColor = '#dc3545';
    if (isSelected) bgColor = '#ffc107';

    return (
      <div
        key={seat}
        onClick={() => !isBooked && onSeatClick(seat)}
        style={{
          width: '40px',
          height: '35px',
          backgroundColor: bgColor,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '11px',
          fontWeight: 'bold',
          cursor: isBooked ? 'not-allowed' : 'pointer',
          borderRadius: '4px',
          border: '1px solid #ccc',
          opacity: isBooked ? 0.6 : 1,
          transition: '0.2s'
        }}
      >
        {seat}
      </div>
    );
  };

  const getLayout = () => {
    if (type === 'Люкс') {
      const coupes = [];
      for (let i = 0; i < seats.length; i += 2) coupes.push(seats.slice(i, i + 2));
      return (
        <div style={{ display: 'flex', width: '100%' }}>
          {coupes.map((c, i) => (
            <div key={i} style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr', gap: '8px', padding: '10px', borderRight: i === coupes.length - 1 ? 'none' : '2px solid #00529b', backgroundColor: '#fafafa' }}>
              {c.map(renderSeat)}
            </div>
          ))}
        </div>
      );
    }

    if (type === 'Плацкарт') {
      const sections = [];
      for (let i = 0; i < 5; i++) {
        const main = seats.slice(i * 4, (i + 1) * 4);
        const side = seats.slice(20 + i * 2, 20 + (i + 1) * 2);
        sections.push({ main, side });
      }

      return (
        <div style={{ display: 'flex', width: '100%' }}>
          {sections.map((section, i) => (
            <div key={i} style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '35px', 
              padding: '10px', 
              borderRight: i === sections.length - 1 ? 'none' : '2px solid #00529b',
              backgroundColor: '#fafafa'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {section.main.map(renderSeat)}
              </div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                {section.side.map(renderSeat)}
              </div>
            </div>
          ))}
        </div>
      );
    }

    const coupes = [];
    for (let i = 0; i < seats.length; i += 4) coupes.push(seats.slice(i, i + 4));
    return (
      <div style={{ display: 'flex', width: '100%' }}>
        {coupes.map((c, i) => (
          <div key={i} style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '10px', borderRight: i === coupes.length - 1 ? 'none' : '2px solid #00529b', backgroundColor: '#fafafa' }}>
            {c.map(renderSeat)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ margin: '20px auto', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '15px' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: 'white', 
        border: '4px solid #00529b', 
        borderRadius: '12px', 
        overflow: 'hidden',
        position: 'relative', 
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', width: '100%' }}>
          {getLayout()}
        </div>
        <div style={{ 
          height: '25px', 
          borderTop: '3px solid #00529b', 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          paddingLeft: '20px', 
          color: '#00529b', 
          fontSize: '10px', 
          fontWeight: 'bold' 
        }}>
          КОРИДОР
        </div>
      </div>
      
      <div style={{ marginTop: '15px', display: 'flex', gap: '20px', justifyContent: 'center', fontSize: '13px' }}>
        <div><span style={{ color: '#00529b' }}>■</span> вільні</div>
        <div><span style={{ color: '#ffc107' }}>■</span> обрані</div>
        <div><span style={{ color: '#dc3545' }}>■</span> зайняті</div>
      </div>
    </div>
  );
};

export default SeatMap;