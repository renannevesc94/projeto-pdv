import * as request from 'supertest';
import { app } from 'tests/helpers/create-test-app';

describe('Update User Tests (e2e)', () => {
  it('(PUT) should return success and 200 status code when success updating a user', () => {
    return request(app.getHttpServer())
      .put('/users/supervisor@projetopdv.com')
      .send({
        name: 'Name Test',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('name', 'Name Test');
      });
  });

  it('(PUT) should return error and 404 status code when sending an email that does not exist', () => {
    return request(app.getHttpServer())
      .put('/users/undefined@test.com')
      .send({
        password: 'newpassword2024',
        name: 'person',
        role: 'ADMINISTRADOR',
      })
      .expect(404)
      .expect((res) => {
        expect(res.body.message).toEqual('Data not found');
      });
  });
});
