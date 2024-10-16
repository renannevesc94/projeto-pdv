import { Module } from '@nestjs/common';
import { DeleteUserService } from './services/delete-user.service';
import { UsersController } from './users.controller';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';
import { UpdateUserService } from './services/update-user.service';
import { GetAllUsersService } from './services/get-all-users.service';
import { CreateUserService } from './services/create-user.service';
import { PrismaUserRepository } from './repositories/prisma-user.repository';
import { IUserRepository } from './repositories/interface-user.repository';

@Module({
  controllers: [UsersController],
  providers: [
    CreateUserService,
    UpdateUserService,
    GetAllUsersService,
    DeleteUserService,
    JwtStrategy,
    {
      provide: IUserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  imports: [],
})
export class UsersModule {}
