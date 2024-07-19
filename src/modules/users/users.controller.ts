import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserService } from './create-user/create-user.service';
import { CreateUserDto } from './create-user/dto/create-user-dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { GetAllUsersService } from './get-all/get-all-users.service';
import { DeleteUserService } from './delete-user/delete-user.service';

@Controller('users')
export class UsersController {
  constructor(
    private createUserService: CreateUserService,
    private getAllUsersService: GetAllUsersService,
    private deleteUserService: DeleteUserService,
  ) {}

  @Post()
  @ApiCreatedResponse({ description: 'User created sucessfully' })
  @UsePipes(new TrimBodyPipe(), new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.createUserService.create(createUserDto);
  }

  @Get()
  async getAll() {
    return await this.getAllUsersService.getAll();
  }

  @Delete(':email')
  @UsePipes(new TrimBodyPipe())
  async delete(@Param('email') email: string) {
    return await this.deleteUserService.delete(email);
  }
}
