import * as request from 'supertest';
import { app, token, prisma } from 'tests/helpers/create-test-app';
import { Roles } from '../../user.entity';

const userData = {
  email: 'admin@admin.com',
  password: '12345678',
  name: 'João',
  role: 'ADMINISTRADOR' as Roles,
};

describe('Create User Tests (e2e)', () => {
  it('(POST) should return error and 400 status code when sending incomplete or incorrect data in the body', async () => {
    return await request(app.getHttpServer())
      .post('/users')
      .set('Authorization', `${token}`)
      .send({
        email: 'test@test.com',
        password: 'test1234test',
        role: 'SUPERVISOR',
      })
      .expect(400)
      .expect((res) => {
        expect(res.body.message[0]).toContain('name must be a string');
      });
  });

  it('(POST) should return success and 201 status code when sending correct data in the body', async () => {
    return await request(app.getHttpServer())
      .post('/users')
      .set('Authorization', `${token}`)
      .send(userData)
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('email', 'admin@admin.com');
      });
  });

  it('(POST) should return error and 409 status code when sending an email that already exists', async () => {
    return await request(app.getHttpServer())
      .post('/users')
      .set('Authorization', `${token}`)
      .send(userData)
      .expect(409)
      .expect((res) => {
        expect(res.body.message).toEqual('email already exists');
      });
  });

  afterAll(async () => {
    await prisma.users.delete({
      where: {
        email: 'admin@admin.com',
      },
    });
  });
});
