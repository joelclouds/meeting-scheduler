const express = require('express');
const router = express.Router();
const { getAllMeetings, addMeeting, updateMeeting, deleteMeeting } = require('../models/meeting');

// Create a new meeting
router.post('/', (req, res) => {
  try {
    const meeting = addMeeting(req.body);
    res.status(201).send(meeting);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all meetings
router.get('/', (req, res) => {
  try {
    const meetings = getAllMeetings();
    res.send(meetings);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a meeting
router.patch('/:id', (req, res) => {
  try {
    const meeting = updateMeeting(req.params.id, req.body);
    if (!meeting) {
      return res.status(404).send();
    }
    res.send(meeting);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a meeting
router.delete('/:id', (req, res) => {
  try {
    const meeting = deleteMeeting(req.params.id);
    if (!meeting) {
      return res.status(404).send();
    }
    res.send(meeting);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;