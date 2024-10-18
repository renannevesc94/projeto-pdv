import * as request from 'supertest';
import { app, prisma, token } from 'tests/helpers/create-test-app';
import { discountTypeEnum } from '../enums/discount-type.enum';

const productsId = '7ceff610-b6e4-46fb-bf55-45e9fc719d7e';
const userId = '573413d7-1438-4926-9413-89d36ccb01f6';

const salesItemMock = (saleId: number) => ({
  sales: {
    connect: { id: saleId },
  },
  products: {
    connect: { id: productsId },
  },
  quantity: 1,
  discountType: 'FIXED',
  discount: 5,
  unitPrice: 15,
  totalPrice: 10,
});

describe('Finalize Sale (e2e)', () => {
  let saleId: number;

  beforeAll(async () => {
    const saleCreated = await prisma.sales.create({
      data: {
        user: { connect: { id: userId } },
      },
      include: {
        SalesItems: true,
      },
    });

    saleId = saleCreated.id;

    await prisma.salesItems.create({
      data: {
        ...salesItemMock(saleId),
        discountType: salesItemMock(saleId).discountType as discountTypeEnum,
      },
    });
  });

  it('(PATCH) should Finalize Sale AFTER POST return success and 200 status code when success updating a sale', async () => {
    return await request(app.getHttpServer())
      .patch(`/sales/${saleId}`)
      .set('Authorization', token)
      .send({
        paymentMethod: 'Dinheiro',
        discountType: 'FIXED',
        discount: 5,
        total: 5,
      })
      .expect((res) => {
        expect(200);
        expect(res.body.total).toEqual(5);
      });
  });

  it('(PATCH) should return error and 400 status code when sending an incorret total', async () =>
    request(app.getHttpServer())
      .patch(`/sales/${saleId}`)
      .set('Authorization', token)
      .send({
        paymentMethod: 'Dinheiro',
        discount: 5,
        total: 100,
      })
      .expect(400));

  it('(PATCH) should return error and 400 status code when seending an discountType that does not exist', async () => {
    return await request(app.getHttpServer())
      .patch(`/sales/${saleId}`)
      .set('Authorization', token)
      .send({
        paymentMethod: 'Dinheiro',
        discountType: 'TYPE',
        discount: 5,
        total: 100,
      })
      .expect((res) => {
        expect(400);
        expect(res.body.message[0]).toContain(
          'discountType must be one of the following values: FIXED, PERCENT',
        );
      });
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
