import * as request from 'supertest';
import { app, token, prisma } from 'tests/helpers/create-test-app';

const productData = {
  description: 'Product Test',
  ean: '1234567890123',
  unit: 'unit',
  cost: 10.5,
  price: 15,
  stock: 100,
  status: true,
  tags: 'test,product',
  min_stock: 5,
  categoryId: 1,
  supplierId: 1,
  imageUrl: 'https://example.com/product-image.jpg',
};

describe('Create Product Tests (e2e)', () => {
  it('(POST) should return error and 400 status code when sending incomplete or incorrect data in the body', () => {
    return request(app.getHttpServer())
      .post('/products')
      .set('Authorization', `${token}`)
      .send({})
      .expect(400)
      .expect((res) => {
        expect(res.body.message[0]).toEqual('description should not be empty');
      });
  });

  it('POST should return success and 201 status code when sending correct data in the body', () => {
    return request(app.getHttpServer())
      .post('/products')
      .set('Authorization', `${token}`)
      .send(productData)
      .expect(201)
      .expect((res) => {
        expect(res.body.ean).toEqual(productData.ean);
      });
  });

  beforeAll(async () => {
    await prisma.products.delete({
      where: { ean: productData.ean },
    });
  });
});
