import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = ({ selectedDate, onSelectDate }) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <Calendar onChange={onSelectDate} value={selectedDate} />
    </div>
  );
};

export default CustomCalendar;