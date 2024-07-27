import { INestApplication } from '@nestjs/common';
import { createTestApp } from '../../../../../tests/helpers/create-test-app';
import * as request from 'supertest';

describe('Get All Users Tests (e2e)', () => {
  let app: INestApplication;
  beforeEach(async () => {
    app = await createTestApp();
  });

  it('(GET) should return an array of users', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });
});
