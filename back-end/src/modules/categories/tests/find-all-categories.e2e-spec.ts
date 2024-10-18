import { app, token } from 'tests/helpers/create-test-app';
import * as request from 'supertest';

describe('Find All Categories Tests (e2e)', () => {
  it(' ( GET ) should return an array of categories', () => {
    return request(app.getHttpServer())
      .get('/categories')
      .set('Authorization', token)
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body));
        expect(res.body[0]).toHaveProperty('description');
        expect(res.body[0]).toHaveProperty('id');
      });
  });
});
