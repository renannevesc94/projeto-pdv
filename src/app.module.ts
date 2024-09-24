import { Module, ValidationPipe } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { CategoriesModule } from './modules/categories/categories.module';
import { SupplierModule } from './modules/suppliers/supplier.module';
import { ProductsModule } from './modules/products/products.module';
import { SalesModule } from './modules/sales/sales.module';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    UsersModule,
    CategoriesModule,
    SupplierModule,
    ProductsModule,
    SalesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_PIPE,

      useFactory: () => {
        return new ValidationPipe({
          whitelist: true,
          forbidNonWhitelisted: true,
        });
      },
    },
  ],
  controllers: [],
})
export class AppModule {}
