import * as request from 'supertest';
import { app, prisma, token } from 'tests/helpers/create-test-app';

const productData = {
  description: 'Product Test',
  ean: '98756412469874',
  unit: 'unit',
  cost: 3.5,
  price: 8.2,
  stock: 70,
  status: true,
  tags: 'product, test',
  min_stock: 8,
  categoryId: 1,
  supplierId: 1,
  imageUrl: 'https://example.com/product-image.jpg',
};

describe('Update Product Tests (e2e)', () => {
  let createdId: string;
  beforeAll(async () => {
    const response = await prisma.products.create({
      data: productData,
    });
    createdId = response.id;
  });

  it('(PATCH) should return error and 404 status code when sending an id that does not exist', async () => {
    return request(app.getHttpServer())
      .patch(`/products/99999`)
      .set('Authorization', token)
      .send({})
      .expect(404);
  });

  it('(PATCH) should return success and 201 status code when success updating a product', async () => {
    return request(app.getHttpServer())
      .patch(`/products/${createdId}`)
      .set('Authorization', token)
      .send({
        price: 9.5,
        stock: 80,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.price).toEqual(9.5);
        expect(res.body.stock).toEqual(80);
      });
  });

  afterAll(async () => {
    await prisma.products.delete({
      where: { id: createdId },
    });
  });
});
