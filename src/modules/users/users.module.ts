import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user/create-user.service';
import { UpdateUserService } from './update-user/update-user.service';
import { GetAllUsersService } from './get-all/get-all-users.service';
import { DeleteUserService } from './delete-user/delete-user.service';
import { UsersController } from './users.controller';
import { ICreateUserRepository } from './create-user/repositories/interface-create-user.repository';
import { PrismaCreateuserRepository } from './create-user/repositories/prisma-create-user';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { PrismaGetAllUsersRepository } from './get-all/repositories/prisma.get-all-users.repository';
import { IGetAllRepository } from './get-all/repositories/interface-get-all.repository';
import { IDeleteUserRepository } from './delete-user/repositories/interface-delete-user.repository';
import { PrismaDeleteUserRepository } from './delete-user/repositories/prisma-delete-user.repository';
import { IUpdateUserRepository } from './update-user/repositories/interface-update-user.repository';
import { UpdateUserRepository } from './update-user/repositories/prisma-update-user.repository';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';

@Module({
  providers: [
    CreateUserService,
    UpdateUserService,
    GetAllUsersService,
    DeleteUserService,
    PrismaService,
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
