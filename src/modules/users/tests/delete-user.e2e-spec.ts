import * as request from 'supertest';
import { app, token, prisma } from 'tests/helpers/create-test-app';
import { Roles } from '../user.entity';

const userData = {
  email: 'admin@admin.com',
  password: '12345678',
  name: 'João',
  role: 'ADMINISTRADOR' as Roles,
};

describe('Delete User Tests (e2e)', () => {
  let createdEmail: string;

  beforeAll(async () => {
    const createdData = await prisma.users.create({
      data: userData,
    });
    createdEmail = createdData.email;
  });

  it('(DELETE) should return success and 200 status code when success deleting a user', async () => {
    return await request(app.getHttpServer())
      .delete(`/users/${createdEmail}`)
      .set('Authorization', `${token}`)
      .expect(200);
  });

  it('(DELETE) should return error and 404 status code when sending an email that does not exist', async () => {
    return await request(app.getHttpServer())
      .delete(`/users/${createdEmail}`)
      .set('Authorization', `${token}`)
      .expect(404)
      .expect((res) => {
        expect(res.body.message).toContain('Data not found');
      });
  });
});
