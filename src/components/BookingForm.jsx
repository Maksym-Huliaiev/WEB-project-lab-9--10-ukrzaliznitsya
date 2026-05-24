import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Заповніть усі дані!'); 
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
      <input type="text" placeholder="Ім'я" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
      <input type="tel" placeholder="Телефон" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
      <input type="email" placeholder="Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
      <button type="submit" style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none' }}>
        Підтвердити бронювання
      </button>
    </form>
  );
};

export default BookingForm;