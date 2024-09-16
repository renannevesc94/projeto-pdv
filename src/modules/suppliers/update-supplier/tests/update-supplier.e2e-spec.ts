import { app, token, prisma } from 'tests/helpers/create-test-app';
import * as request from 'supertest';

const supplierBase = {
  name: 'My Supplier Test',
  description: 'Supplier for Tests',
};

describe('Update Supplier Tests (e2e)', () => {
  let supplierBaseId: number;

  beforeAll(async () => {
    const response = await prisma.suppliers.create({
      data: supplierBase,
    });
    supplierBaseId = response.id;
  });

  it('(PATCH) should return error and 404 status code when sending an id that does not exist', async () => {
    return await request(app.getHttpServer())
      .patch(`/suppliers/99999`)
      .set('Authorization', token)
      .send({
        name: 'New Name Test',
      })
      .expect(404);
  });

  it('(PATCH) should return success and 200 status code when success updating a supplier', async () => {
    return await request(app.getHttpServer())
      .patch(`/suppliers/${supplierBaseId}`)
      .set('Authorization', token)
      .send({
        name: 'New Name Supplier',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.id).toEqual(supplierBaseId);
        expect(res.body.name).toEqual('New Name Supplier');
      });
  });

  it('(PATCH) should return error and 400 status code when sending incorrect data in the body', async () => {
    return await request(app.getHttpServer())
      .patch(`/suppliers/${supplierBaseId}`)
      .set('Authorization', token)
      .send({
        invalidProperty: 'New Name Supplier',
      })
      .expect(400)
      .expect((res) => {
        expect(res.body.message[0]).toEqual(
          'property invalidProperty should not exist',
        );
      });
  });

  afterAll(async () => {
    await prisma.suppliers.delete({
      where: { id: supplierBaseId },
    });
  });
});
