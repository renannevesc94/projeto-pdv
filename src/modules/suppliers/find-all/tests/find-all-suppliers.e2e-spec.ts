import * as request from 'supertest';
import { app, token } from 'tests/helpers/create-test-app';

describe('Find All Suppliers Tests (e2e)', () => {
  it(' ( GET ) should return status 201 and an array of suppliers', () => {
    return request(app.getHttpServer())
      .get('/suppliers')
      .set('Authorization', token)
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('description');
      });
  });
});
