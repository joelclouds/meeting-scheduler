let meetings = [];
let currentId = 1;

const getAllMeetings = () => meetings;

const addMeeting = (meeting) => {
  meeting._id = currentId++;
  meetings.push(meeting);
  return meeting;
};

const updateMeeting = (id, updatedMeeting) => {
  const index = meetings.findIndex(meeting => meeting._id === parseInt(id));
  if (index !== -1) {
    meetings[index] = { ...meetings[index], ...updatedMeeting };
    return meetings[index];
  }
  return null;
};

const deleteMeeting = (id) => {
  const index = meetings.findIndex(meeting => meeting._id === parseInt(id));
  if (index !== -1) {
    const deletedMeeting = meetings.splice(index, 1);
    return deletedMeeting[0];
  }
  return null;
};

module.exports = {
  getAllMeetings,
  addMeeting,
  updateMeeting,
  deleteMeeting,
};