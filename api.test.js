const request = require('supertest');

test('GET / returns 200', async () => {
  const response = await request('http://localhost:8000').get('/');
  expect(response.statusCode).toBe(200);
});
