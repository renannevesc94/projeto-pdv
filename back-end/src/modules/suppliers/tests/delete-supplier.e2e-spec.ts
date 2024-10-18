import * as request from 'supertest';
import { app, token, prisma } from 'tests/helpers/create-test-app';

const supplierData = {
  name: 'My Supplier Test',
  description: 'Supplier for Tests',
};
describe('Delete Supplier Tests (e2e)', () => {
  let createdId: number;

  beforeAll(async () => {
    const createdData = await prisma.suppliers.create({
      data: supplierData,
    });
    createdId = createdData.id;
  });

  it('(DELETE) should return error and 404 status code when sending an id that does not exist', () => {
    return request(app.getHttpServer())
      .delete('/suppliers/9999')
      .set('Authorization', `${token}`)
      .expect(404);
  });

  it('(DELETE) should return success and 200 status code when success deleting a supplier', () => {
    return request(app.getHttpServer())
      .delete(`/suppliers/${createdId}`)
      .set('Authorization', token)
      .expect(200);
  });
});
