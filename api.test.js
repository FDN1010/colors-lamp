const request = require('supertest');
const app = require('./api'); // Import your Express app

describe('API Tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(8000, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('GET / returns 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
