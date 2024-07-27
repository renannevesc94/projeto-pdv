import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestApp } from '../../../../../tests/helpers/create-test-app';

describe('Create User Tests (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await createTestApp();
  });

  it('(POST) should return error and 400 status code when sending incomplete or incorrect data in the body', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        email: 'test@test.com',
        password: 'test1234test',
        role: 'SUPERVISOR',
      })
      .expect(400)
      .expect((res) => {
        expect(res.body.message[0]).toContain('name must be a string');
      });
  });

  it('(POST) should return success and 201 status code when sending correct data in the body', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        email: 'test@test.com',
        password: 'test1234test',
        name: 'test',
        role: 'ADMINISTRADOR',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('email', 'test@test.com');
      });
  });

  it('(POST) should return error and 409 status code when sending an email that already exists', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        email: 'test@test.com',
        password: 'test1234test',
        name: 'test',
        role: 'ADMINISTRADOR',
      })
      .expect(409)
      .expect((res) => {
        expect(res.body.message).toEqual('email already exists');
      });
  });
});
