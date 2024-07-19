import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaRequestExceptionFilter } from './common/filters/prisma-request-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaInitiazilationExceptionFilter } from './common/filters/prisma-initiazilation-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(
    new PrismaRequestExceptionFilter(),
    new PrismaInitiazilationExceptionFilter(),
  );

  const config = new DocumentBuilder()
    .setTitle('API PDV')
    .setDescription('Rotas API PDV')
    .setVersion('1.0')
    .addTag('Users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
