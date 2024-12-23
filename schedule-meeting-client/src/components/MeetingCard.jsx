import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MeetingCard = ({ meeting }) => {
  return (
    <Card className="m-4">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meeting.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {meeting.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Attendees: {meeting.attendees}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date & Time: {new Date(meeting.date).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MeetingCard;