import { Module } from '@nestjs/common';
import { DeleteUserService } from './services/delete-user.service';
import { UsersController } from './users.controller';
import { PrismaCreateuserRepository } from './repositories/prisma-create-user';
import { PrismaGetAllUsersRepository } from './repositories/prisma.get-all-users.repository';
import { IGetAllRepository } from './repositories/interface-get-all.repository';
import { IDeleteUserRepository } from './repositories/interface-delete-user.repository';
import { PrismaDeleteUserRepository } from './repositories/prisma-delete-user.repository';
import { IUpdateUserRepository } from './repositories/interface-update-user.repository';
import { UpdateUserRepository } from './repositories/prisma-update-user.repository';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';
import { UpdateUserService } from './services/update-user.service';
import { GetAllUsersService } from './services/get-all-users.service';
import { CreateUserService } from './services/create-user.service';
import { ICreateUserRepository } from './repositories/interface-create-user.repository';

@Module({
  providers: [
    CreateUserService,
    UpdateUserService,
    GetAllUsersService,
    DeleteUserService,
    JwtStrategy,
    {
      provide: ICreateUserRepository,
      useClass: PrismaCreateuserRepository,
    },
    {
      provide: IGetAllRepository,
      useClass: PrismaGetAllUsersRepository,
    },
    {
      provide: IDeleteUserRepository,
      useClass: PrismaDeleteUserRepository,
    },
    {
      provide: IUpdateUserRepository,
      useClass: UpdateUserRepository,
    },
  ],
  imports: [],
  controllers: [UsersController],
})
export class UsersModule {}
