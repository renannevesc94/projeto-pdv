import * as request from 'supertest';
import { app, token, prisma } from 'tests/helpers/create-test-app';

const categoryData = {
  description: 'Category to Test',
};

describe('Update Categories Tests (e2e)', () => {
  let createdId: number;

  beforeAll(async () => {
    const createdData = await prisma.categories.create({
      data: categoryData,
    });
    createdId = createdData.id;
  });

  it('(Patch) should return success and 200 status code when success updating a category', () => {
    return request(app.getHttpServer())
      .patch(`/categories/${createdId}`)
      .set('Authorization', token)
      .send({
        description: 'new description',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body.description).toContain('new description');
      });
  });

  afterAll(async () => {
    await prisma.categories.delete({
      where: {
        id: createdId,
      },
    });
  });
});
