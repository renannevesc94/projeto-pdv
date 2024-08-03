import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './login/login.service';
import { ILoginRepository } from './login/repositories/interface-login.repository';
import { PrismaLoginRepository } from './login/repositories/prisma-login.repository';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [
    LoginService,
    PrismaService,
    {
      provide: ILoginRepository,
      useClass: PrismaLoginRepository,
    },
  ],
})
export class AuthModule {}
