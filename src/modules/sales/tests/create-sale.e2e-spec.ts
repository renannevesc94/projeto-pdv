import * as request from 'supertest';
import { app, prisma, token } from 'tests/helpers/create-test-app';

const saleData = {
  productsId: '7ceff610-b6e4-46fb-bf55-45e9fc719d7e',
  quantity: 10,
  unitPrice: 10,
  discountType: 'FIXED',
  totalPrice: 100,
  discount: 10,
};

describe('Create Sale (e2e)', () => {
  let saleId: number;

  it('(POST) should return success and 201 status code', async () => {
    return await request(app.getHttpServer())
      .post('/sales/')
      .set('Authorization', token)
      .send(saleData)
      .expect(201)
      .expect((res) => {
        saleId = res.body.id;
        expect(res.body).toHaveProperty('SalesItems');
      });
  });

  it('(POST) should return error and 400 status code when sending incomplete or incorrect data in the body', async () => {
    return await request(app.getHttpServer())
      .post('/sales/')
      .set('Authorization', token)
      .send({ ...saleData, quantity: '10,5' })
      .expect(400)
      .expect((res) => {
        expect(res.body.message[0]).toEqual(
          'quantity must be a positive number',
        );
      });
  });

  it('(PATCH) AFTER POST should return success and 200 status code when success updating a sale', async () => {
    return await request(app.getHttpServer())
      .patch(`/sales/${saleId}/items`)
      .set('Authorization', token)
      .send({ ...saleData, quantity: 50 })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('SalesItems');
        expect(res.body.SalesItems[0]).toHaveProperty('quantity');
        expect(res.body.SalesItems[0].quantity).toEqual(50);
      });
  });

  it('(PATCH) AFTER POST should return error and 404 status code when sending an id that does not exist', async () => {
    return await request(app.getHttpServer())
      .patch(`/sales/9999/items`)
      .set('Authorization', token)
      .send(saleData)
      .expect(404)
      .expect((res) => {
        expect(res.body.message).toEqual('Sale not found');
      });
  });

  it('(PATCH) APPLY DISCOUNT AFTER POST should return success and 200 status code when success updating a sale', async () => {
    return await request(app.getHttpServer())
      .patch(`/sales/${saleId}/items`)
      .set('Authorization', token)
      .send({ ...saleData, discount: 50 })
      .expect(200);
  });

  afterAll(async () => {
    await prisma.salesItems.deleteMany({
      where: {
        salesId: saleId,
      },
    });
    await prisma.sales.delete({
      where: { id: saleId },
    });
  });
});
