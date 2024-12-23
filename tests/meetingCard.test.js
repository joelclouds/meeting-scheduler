import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MeetingCard from '../src/components/MeetingCard';

test('renders meeting card', () => {
  const meeting = {
    title: 'Test Meeting',
    description: 'This is a test meeting',
    attendees: 'John Doe',
    date: new Date(),
  };
  render(<MeetingCard meeting={meeting} />);
  expect(screen.getByText(/test meeting/i)).toBeInTheDocument();
  expect(screen.getByText(/this is a test meeting/i)).toBeInTheDocument();
  expect(screen.getByText(/john doe/i)).toBeInTheDocument();
});