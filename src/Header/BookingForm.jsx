import  { useState } from 'react';
import { Calendar, Users, Baby, Home } from 'lucide-react';

import "../Header/Booking.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    rooms: '1'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Booking data:', formData);
    alert('Checking availability...');
  };

  return (
    <div className="booking-form">
      <h2 className="form-title">Book A Room</h2>
      
      <div className="form-grid">
        <div className="form-grid-2">
          <div className="input-group">
            <label className="input-label">
              <Calendar size={16} />
              Check In Date
            </label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="input-group">
            <label className="input-label">
              <Calendar size={16} />
              Check Out Date
            </label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">
            <Users size={16} />
            Adults
          </label>
          <select
            name="adults"
            value={formData.adults}
            onChange={handleInputChange}
            className="form-select"
          >
            {[1,2,3,4,5,6].map(num => (
              <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div className="form-grid-2">
          <div className="input-group">
            <label className="input-label">
              <Baby size={16} />
              Child
            </label>
            <select
              name="children"
              value={formData.children}
              onChange={handleInputChange}
              className="form-select"
            >
              {[0,1,2,3,4].map(num => (
                <option key={num} value={num}>{num} Child{num > 1 ? 'ren' : ''}</option>
              ))}
            </select>
          </div>
          
          <div className="input-group">
            <label className="input-label">
              <Home size={16} />
              Room
            </label>
            <select
              name="rooms"
              value={formData.rooms}
              onChange={handleInputChange}
              className="form-select"
            >
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="check-availability-btn"
        >
          CHECK AVAILABILITY
        </button>
      </div>
    </div>
  );
};

export default BookingForm;