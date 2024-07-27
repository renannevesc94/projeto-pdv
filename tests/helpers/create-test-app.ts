import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { PrismaInitiazilationExceptionFilter } from 'src/common/filters/prisma-initiazilation-exception.filter';
import { PrismaRequestExceptionFilter } from 'src/common/filters/prisma-request-exception.filter';

export const createTestApp = async (): Promise<INestApplication> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleFixture.createNestApplication();
  app.useGlobalFilters(
    new PrismaRequestExceptionFilter(),
    new PrismaInitiazilationExceptionFilter(),
  );

  await app.init();
  return app;
};
