import { Module } from '@nestjs/common';
import { CommomModule } from './common/commom.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { CategoriesModule } from './modules/categories/categories.module';
import { SupplierModule } from './modules/suppliers/supplier.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    CommomModule,
    UsersModule,
    AuthModule,
    CategoriesModule,
    SupplierModule,
    ProductsModule,
  ],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [],
})
export class AppModule {}
