import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './login/login.service';
import { ILoginRepository } from './login/repositories/interface-login.repository';
import { PrismaLoginRepository } from './login/repositories/prisma-login.repository';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './login/local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_JWT,
    }),
  ],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    LoginService,

    {
      provide: ILoginRepository,
      useClass: PrismaLoginRepository,
    },
  ],
})
export class AuthModule {}
