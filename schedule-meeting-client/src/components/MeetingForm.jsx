import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MeetingForm = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      attendees: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      attendees: Yup.string().required('Attendees are required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/meetings', { ...values, date: new Date(date.getTime() + time.getTime() - new Date().getTime()) });
        console.log('Meeting scheduled:', response.data);
        navigate('/meetings');
      } catch (error) {
        console.error('Error scheduling meeting:', error);
      }
    },
  });

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <Typography variant="h5" className="mb-4">Schedule a Meeting</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Attendees"
              variant="outlined"
              name="attendees"
              value={formik.values.attendees}
              onChange={formik.handleChange}
              error={formik.touched.attendees && Boolean(formik.errors.attendees)}
              helperText={formik.touched.attendees && formik.errors.attendees}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Time"
                value={time}
                onChange={(newValue) => setTime(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Schedule Meeting
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default MeetingForm;