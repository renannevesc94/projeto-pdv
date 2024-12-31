import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './services/login.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './guards/local.strategy';
import { PrismaAuthRepository } from './repositories/prisma-auth.repository';
import { IAuthRepository } from './repositories/interface-auth.repository';
import { ValidLoginServise } from './services/validate-login.service';

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
    ValidLoginServise,

    {
      provide: IAuthRepository,
      useClass: PrismaAuthRepository,
    },
  ],
})
export class AuthModule {}
