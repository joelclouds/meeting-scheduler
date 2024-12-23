import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MeetingForm from '../src/components/MeetingForm';

test('renders meeting form', () => {
  render(<MeetingForm />);
  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/attendees/i)).toBeInTheDocument();
  expect(screen.getByText(/schedule meeting/i)).toBeInTheDocument();
});

test('submits form with valid data', async () => {
  render(<MeetingForm />);
  fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Meeting' } });
  fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'This is a test meeting' } });
  fireEvent.change(screen.getByLabelText(/attendees/i), { target: { value: 'John Doe' } });
  fireEvent.click(screen.getByText(/schedule meeting/i));
  expect(screen.getByText(/this is a test meeting/i)).toBeInTheDocument();
});