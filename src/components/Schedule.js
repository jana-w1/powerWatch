
import '../styles/Schedule.css';
import React, { useState } from 'react';


const ElectricitySchedule = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="schedule">
      <h3>Electricity Schedule</h3>
      <p>See the expected power availability schedule.</p>
      <button className="schedule-button" onClick={handleOpenModal}>
        Check
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* <h2>Electricity Schedule</h2> */}
            <p>Here is the expected power availability schedule:</p>
            <ul>
              <li>Monday: 8:00 AM - 12:00 PM</li>
              <li>Tuesday: 10:00 AM - 2:00 PM</li>
              <li>Wednesday: 6:00 PM - 10:00 PM</li>
              <li>Thursday: 9:00 AM - 1:00 PM</li>
              <li>Friday: 11:00 AM - 3:00 PM</li>
              <li>Saturday: 7:00 PM - 11:00 PM</li>
              <li>Sunday: 8:00 AM - 12:00 PM</li>
            </ul>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectricitySchedule;
