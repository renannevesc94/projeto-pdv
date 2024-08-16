import * as request from 'supertest';
import { app, token } from 'tests/helpers/create-test-app';

describe('Update Categories Tests (e2e)', () => {
  it('(Patch) should return success and 200 status code when success updating a category', () => {
    return request(app.getHttpServer())
      .patch('/categories/1')
      .set('Authorization', token)
      .send({
        description: 'new description',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body.description).toContain('new description');
      });
  });
});
