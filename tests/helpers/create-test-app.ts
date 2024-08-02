import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { seedTestDatabase } from 'prisma/seedTestDatabase';
import { AppModule } from 'src/app.module';
import { PrismaInitiazilationExceptionFilter } from 'src/common/filters/prisma-initiazilation-exception.filter';
import { PrismaRequestExceptionFilter } from 'src/common/filters/prisma-request-exception.filter';

let app: INestApplication;

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

beforeAll(async () => {
  app = await createTestApp();
  await seedTestDatabase();
});

afterAll(async () => {
  await app.close();
});

export { app };
