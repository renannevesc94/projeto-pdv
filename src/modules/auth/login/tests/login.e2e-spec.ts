import * as request from 'supertest';
import { app } from 'tests/helpers/create-test-app';

describe('Auth module tests', () => {
  it('should return status 201 in case of successful login', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'supervisor@projetopdv.com',
        password: '12345678',
      })
      .expect(200);
  });

  it('should return status 401 in case of invalid credentials', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'supervisor@projetopdv.com',
        password: 'invalid-password',
      })
      .expect(401);
  });
});
