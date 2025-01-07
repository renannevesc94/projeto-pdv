import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './services/login.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './guards/local.strategy';
import { PrismaAuthRepository } from './repositories/prisma-auth.repository';
import { IAuthRepository } from './repositories/interface-auth.repository';

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
      provide: IAuthRepository,
      useClass: PrismaAuthRepository,
    },
  ],
})
export class AuthModule {}
