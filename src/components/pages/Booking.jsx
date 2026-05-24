import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trains } from '../data/trains';
import { BookingService } from '../services/BookingService';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import { toast } from 'react-toastify';

const Booking = () => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const train = trains.find(t => t.id === parseInt(trainId));
  
  const [selectedWagon, setSelectedWagon] = useState(train?.wagons[0]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (selectedWagon) {
      setBookedSeats(BookingService.getBookedSeats(trainId, selectedWagon.id));
      setSelectedSeats([]);
    }
  }, [selectedWagon, trainId]);

  const getSeatCount = (type) => {
    if (type === 'Люкс') return 10;
    if (type === 'Плацкарт') return 30;
    return 24; 
  };

  const toggleSeat = (seat) => {
    setSelectedSeats(prev => 
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const finalizeBooking = (userData) => {
    if (selectedSeats.length === 0) {
      toast.warning("Будь ласка, оберіть хоча б одне місце!");
      return;
    }
    
    BookingService.saveBooking(trainId, selectedWagon.id, selectedSeats);
    toast.success(`Успішно! Квитки на ім'я ${userData.name} заброньовано.`);
    navigate('/');
  };

  if (!train) return <div style={{ padding: '20px' }}>Потяг не знайдено</div>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Бронювання: Потяг {train.number}</h2>
      <p style={{ color: '#666' }}>{train.route.from} — {train.route.to}</p>

      <div style={{ marginBottom: '30px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Оберіть вагон:</label>
        <select 
          value={selectedWagon?.id}
          onChange={(e) => setSelectedWagon(train.wagons.find(w => w.id === parseInt(e.target.value)))}
        >
          {train.wagons.map(w => (
            <option key={w.id} value={w.id}>{w.type} (№{w.id})</option>
          ))}
        </select>
      </div>

      <SeatMap 
        type={selectedWagon?.type} 
        totalSeats={getSeatCount(selectedWagon?.type)}
        bookedSeats={bookedSeats} 
        selectedSeats={selectedSeats} 
        onSeatClick={toggleSeat} 
      />

      {selectedSeats.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h3>Оформлення квитків</h3>
          <BookingForm onSubmit={finalizeBooking} />
        </div>
      )}
    </div>
  );
};

export default Booking;