const request = require('supertest');
const app = require('../server');

describe('Meetings API', () => {
  it('should get all meetings', async () => {
    const res = await request(app).get('/api/meetings');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new meeting', async () => {
    const res = await request(app)
      .post('/api/meetings')
      .send({
        title: 'Test Meeting',
        description: 'This is a test meeting',
        attendees: 'John Doe',
        date: new Date(),
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual('Test Meeting');
  });

  it('should update a meeting', async () => {
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

    res = await request(app)
      .patch(`/api/meetings/${meetingId}`)
      .send({ title: 'Updated Test Meeting' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Updated Test Meeting');
  });

  it('should delete a meeting', async () => {
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

    res = await request(app).delete(`/api/meetings/${meetingId}`);
    expect(res.statusCode).toEqual(200);

    res = await request(app).get('/api/meetings');
    expect(res.statusCode).toEqual(200);
    expect(res.body.some(meeting => meeting._id === meetingId)).toBeFalsy();
  });
});