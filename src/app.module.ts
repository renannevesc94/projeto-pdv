import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { CommomModule } from './common/commom.module';

@Module({
  imports: [CommomModule],
  controllers: [AppController],
})
export class AppModule {}
