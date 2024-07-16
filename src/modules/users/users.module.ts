import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user/create-user.service';
import { UpdateUserService } from './update-user/update-user.service';
import { GetAllService } from './get-all/get-all.service';
import { DeleteUserService } from './delete-user/delete-user.service';

@Module({
  providers: [CreateUserService, UpdateUserService, GetAllService, DeleteUserService],
  imports: [],
})
export class UsersModule {}
