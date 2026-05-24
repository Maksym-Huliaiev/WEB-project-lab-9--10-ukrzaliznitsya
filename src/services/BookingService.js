export const BookingService = {
  getBookedSeats: (trainId, wagonId) => {
    const data = localStorage.getItem(`booked_${trainId}_${wagonId}`);
    return data ? JSON.parse(data) : [];
  },

  saveBooking: (trainId, wagonId, seats) => {
    const alreadyBooked = BookingService.getBookedSeats(trainId, wagonId);
    const updated = [...alreadyBooked, ...seats];
    localStorage.setItem(`booked_${trainId}_${wagonId}`, JSON.stringify(updated));
  }
};