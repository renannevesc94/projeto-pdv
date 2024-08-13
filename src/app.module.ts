import { Module } from '@nestjs/common';
import { CommomModule } from './common/commom.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [CommomModule, UsersModule, AuthModule, CategoriesModule],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [],
})
export class AppModule {}
