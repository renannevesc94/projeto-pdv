import * as request from 'supertest';
import { app, token, prisma } from 'tests/helpers/create-test-app';

describe('Create Category Tests (e2e)', () => {
  it('(POST) should return error and 400 status code when sending incomplete or incorrect data in the body', async () => {
    return await request(app.getHttpServer())
      .post('/categories')
      .set('Authorization', `${token}`)
      .send({
        description: '',
      })
      .expect(400)
      .expect((res) => {
        expect(res.body.message[0]).toEqual(
          'description must be longer than or equal to 5 characters',
        );
      });
  });

  it('POST should return success and 201 status code when sending correct data in the body', async () => {
    return await request(app.getHttpServer())
      .post('/categories')
      .set('Authorization', `${token}`)
      .send({
        description: 'Teste',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body.description).toEqual('Teste');
      });
  });

  it('POST should  return error and 409 status code when sending a category that already exists', async () => {
    return await request(app.getHttpServer())
      .post('/categories')
      .set('Authorization', `${token}`)
      .send({
        description: 'Teste',
      })
      .expect(409)
      .expect(() => {});
  });

  afterAll(async () => {
    await prisma.categories.delete({
      where: {
        description: 'Teste',
      },
    });
  });
});
