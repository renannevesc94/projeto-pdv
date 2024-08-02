import * as request from 'supertest';
import { app } from 'tests/helpers/create-test-app';

describe('Delete User Tests (e2e)', () => {
  it('(DELETE) should return success and 200 status code when success deleting a user', () => {
    return request(app.getHttpServer())
      .delete('/users/operador@projetopdv.com')
      .expect(200);
  });

  it('(DELETE) should return error and 404 status code when sending an email that does not exist', () => {
    return request(app.getHttpServer())
      .delete('/users/undefined@test.com')
      .expect(404)
      .expect((res) => {
        expect(res.body.message).toEqual('Data not found');
      });
  });
});
