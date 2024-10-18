import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { PrismaInitiazilationExceptionFilter } from 'src/common/filters/prisma-initiazilation-exception.filter';
import { PrismaRequestExceptionFilter } from 'src/common/filters/prisma-exception.filter';
import { PrismaService } from 'src/common/prisma/prisma.service';

let app: INestApplication;
let token: string;
let prisma: PrismaService;

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
      email: 'admin@projetopdv.com',
      password: '12345678',
    });
  const result = loginReponse.headers.authorization;
  return result;
};

beforeAll(async () => {
  app = await createTestApp();
  prisma = app.get<PrismaService>(PrismaService);
  token = await login();
});

afterAll(async () => {
  await app.close();
});

export { app, token, prisma };
