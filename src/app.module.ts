import { Module } from '@nestjs/common';
import { CommomModule } from './common/commom.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CommomModule, UsersModule, AuthModule],
  controllers: [],
})
export class AppModule {}
