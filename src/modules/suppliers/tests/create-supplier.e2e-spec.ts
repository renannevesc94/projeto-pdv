import * as request from 'supertest';
import { app, token, prisma } from 'tests/helpers/create-test-app';

describe('Create Supplier Tests (e2e)', () => {
  it('(POST) should return success and 201 status code when sending correct data in the body', () => {
    return request(app.getHttpServer())
      .post('/suppliers')
      .set('Authorization', token)
      .send({
        name: 'Supplier to Test',
        description: 'Supplier Test Description',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual({
          name: 'Supplier to Test',
          description: 'Supplier Test Description',
          id: expect.any(Number),
        });
      });
  });

  it('(POST) should return error and 400 status code when sending incomplete or incorrect data in the body', () => {
    return request(app.getHttpServer())
      .post('/suppliers')
      .set('Authorization', token)
      .send({
        name: 'Supplier to Test',
        description: '',
      })
      .expect(400)
      .expect((res) => {
        expect(res.body.message[0]).toEqual(
          'description must be longer than or equal to 5 characters',
        );
      });
  });

  it('(POST) return error and 409 status code when sending duplicate data in the body', () => {
    return request(app.getHttpServer())
      .post('/suppliers')
      .set('Authorization', token)
      .send({
        name: 'Supplier to Test',
        description: 'Supplier Test Description',
      })
      .expect(409)
      .expect((res) => {
        expect(res.body.message).toEqual('name already exists');
      });
  });

  afterAll(async () => {
    await prisma.suppliers.delete({
      where: { name: 'Supplier to Test' },
    });
  });
});
