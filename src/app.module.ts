import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommomModule } from './commom/commom.module';

@Module({
  imports: [CommomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
