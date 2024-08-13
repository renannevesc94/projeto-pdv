import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { seedTestDatabase } from 'prisma/seedTestDatabase';
import { AppModule } from 'src/app.module';
import { PrismaInitiazilationExceptionFilter } from 'src/common/filters/prisma-initiazilation-exception.filter';
import { PrismaRequestExceptionFilter } from 'src/common/filters/prisma-request-exception.filter';

let app: INestApplication;
let token: string;

export const createTestApp = async (): Promise<INestApplication> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const appInstance = moduleFixture.createNestApplication();
  appInstance.useGlobalFilters(
    new PrismaRequestExceptionFilter(),
    new PrismaInitiazilationExceptionFilter(),
  );

  await appInstance.init();
  return appInstance;
};

const login = async () => {
  const loginReponse = await request(app.getHttpServer())
    .post('/auth/login')
    .send({
      email: 'supervisor@projetopdv.com',
      password: '12345678',
    });

  return loginReponse.headers.authorization;
};

beforeAll(async () => {
  app = await createTestApp();
  token = await login();

  await seedTestDatabase();
});

afterAll(async () => {
  await app.close();
});

export { app, token };
