import * as request from 'supertest';
import { app, token } from 'tests/helpers/create-test-app';

describe('Get All Users Tests (e2e)', () => {
  it('(GET) should return an array of users', () => {
    return request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `${token}`)
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });
});
