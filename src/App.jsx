import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Booking from './pages/Booking';


function App() {
  return (
    <Router>
      <div className="App" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ padding: '20px', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
          <h1>Укрзалізниця  Онлайн бронювання</h1>
        </header>

        <main>
          <Routes>
            {/* Маршрут для Лабораторної 9: Список потягів  */}
            <Route path="/" element={<Home />} />

            {/* Маршрут для Лабораторної 10: Бронювання місць  */}
            <Route path="/booking/:trainId" element={<Booking />} />
          </Routes>
        </main>

        {/* Контейнер для сповіщень про успішне бронювання  */}
        <ToastContainer 
          position="bottom-right" 
          autoClose={3000} 
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;