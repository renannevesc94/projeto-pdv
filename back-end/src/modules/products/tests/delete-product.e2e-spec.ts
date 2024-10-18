import * as request from 'supertest';

import { app, token, prisma } from 'tests/helpers/create-test-app';

const productData = {
  description: 'Product Test',
  ean: '7841546877154',
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

describe('Delete Products Tests (e2e)', () => {
  let createdId: string;

  beforeAll(async () => {
    const createdData = await prisma.products.create({
      data: productData,
    });
    createdId = createdData.id;
  });

  it('(DELETE) should return error and 404 status code when sending an id that does not exist', () => {
    return request(app.getHttpServer())
      .delete('/products/9999')
      .set('Authorization', `${token}`)
      .expect(404);
  });

  it('(DELETE) should return error and 200 status code when success deleting a product', () => {
    return request(app.getHttpServer())
      .delete(`/products/${createdId}`)
      .set('Authorization', token)
      .expect(200)
      .expect((res) => {
        expect(res.body.ean).toEqual(productData.ean);
      });
  });
});
