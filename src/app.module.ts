import { Module } from '@nestjs/common';
import { CommomModule } from './common/commom.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [CommomModule, UsersModule],
  controllers: [],
})
export class AppModule {}
