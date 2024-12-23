import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MeetingForm from './components/MeetingForm';
import MeetingCard from './components/MeetingCard';
import CustomCalendar from './components/Calendar';
import axios from 'axios';

const App = () => {
  const [meetings, setMeetings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    axios.get('/api/meetings')
      .then(response => setMeetings(response.data))
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4 text-white">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="font-bold">Job Matching Platform</Link>
            <Link to="/schedule" className="hover:underline">Schedule Meeting</Link>
          </div>
        </nav>
        <main className="py-8">
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6">Scheduled Meetings</h1>
                <CustomCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
                {meetings.filter(meeting => new Date(meeting.date).toDateString() === selectedDate.toDateString()).map(meeting => <MeetingCard key={meeting._id} meeting={meeting} />)}
              </div>
            } />
            <Route path="/schedule" element={<MeetingForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;