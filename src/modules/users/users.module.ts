import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user/create-user.service';
import { UpdateUserService } from './update-user/update-user.service';
import { GetAllService } from './get-all/get-all.service';
import { DeleteUserService } from './delete-user/delete-user.service';
import { UsersController } from './users.controller';
import { ICreateUserRepository } from './create-user/repositories/interface-create-user.repository';
import { PrismaCreateuserRepository } from './create-user/repositories/prisma-create-user';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  providers: [
    CreateUserService,
    UpdateUserService,
    GetAllService,
    DeleteUserService,
    PrismaService,
    {
      provide: ICreateUserRepository,
      useClass: PrismaCreateuserRepository,
    },
  ],
  imports: [],
  controllers: [UsersController],
})
export class UsersModule {}
