const request = require('supertest');
const app = require('../server');

describe('Meeting Flow', () => {
  it('creates, retrieves, updates, and deletes a meeting', async () => {
    // Create a meeting
    let res = await request(app)
      .post('/api/meetings')
      .send({
        title: 'Test Meeting',
        description: 'This is a test meeting',
        attendees: 'John Doe',
        date: new Date(),
      });
    expect(res.statusCode).toEqual(201);
    const meetingId = res.body._id;

    // Retrieve all meetings
    res = await request(app).get('/api/meetings');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);

    // Update the meeting
    res = await request(app)
      .patch(`/api/meetings/${meetingId}`)
      .send({ title: 'Updated Test Meeting' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Updated Test Meeting');

    // Delete the meeting
    res = await request(app).delete(`/api/meetings/${meetingId}`);
    expect(res.statusCode).toEqual(200);

    // Verify deletion
    res = await request(app).get('/api/meetings');
    expect(res.statusCode).toEqual(200);
    expect(res.body.some(meeting => meeting._id === meetingId)).toBeFalsy();
  });
});