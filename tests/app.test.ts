import request from 'supertest';
import app from '../src/app.js';

describe('GET /health', () => {
  it('returns 200 and status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('up');
  });
});
