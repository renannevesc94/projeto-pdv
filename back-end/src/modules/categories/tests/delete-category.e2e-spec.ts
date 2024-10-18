import * as request from 'supertest';
import { app, token, prisma } from 'tests/helpers/create-test-app';

describe('Delete Category Tests (e2e)', () => {
  let createdId: number;

  beforeAll(async () => {
    const createdData = await prisma.categories.create({
      data: {
        description: 'Test_Test',
      },
    });
    createdId = createdData.id;
  });

  it('(DELETE) should return error and 404 status code when sending an id that does not exist', () => {
    return request(app.getHttpServer())
      .delete('/caregories/9999')
      .set('Authorization', `${token}`)
      .expect(404);
  });

  it('(DELETE) should return success and 200 status code when success deleting a category', () => {
    return request(app.getHttpServer())
      .delete(`/categories/${createdId}`)
      .set('Authorization', token)
      .expect(200);
  });
});
