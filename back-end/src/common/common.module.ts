import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_JWT,
    }),
  ],
  providers: [PrismaService, JwtStrategy, JwtAuthGuard],
  exports: [PrismaService, JwtAuthGuard, JwtStrategy],
})
export class CommonModule {}
