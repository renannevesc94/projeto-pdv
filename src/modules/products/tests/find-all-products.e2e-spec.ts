import * as request from 'supertest';
import { prisma, app, token } from 'tests/helpers/create-test-app';

const productData = {
  description: 'Product Test',
  ean: '74125896365478',
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

describe('Find All Products Tests (e2e)', () => {
  beforeAll(async () => {
    await prisma.products.create({
      data: productData,
    });
  });

  it('(POST) should return status code 200 and a list of all products', async () => {
    return await request(app.getHttpServer())
      .get('/products')
      .set('Authorization', token)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              ...productData,
            }),
          ]),
        );
      });
  });

  afterAll(async () => {
    await prisma.products.delete({
      where: { ean: productData.ean },
    });
  });
});
