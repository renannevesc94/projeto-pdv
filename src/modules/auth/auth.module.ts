import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './services/login.service';
import { ILoginRepository } from './repositories/interface-login.repository';
import { PrismaLoginRepository } from './repositories/prisma-login.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './guards/local.strategy';

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
