import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { DeleteUserService } from './services/delete-user.service';
import { UpdateUserService } from './services/update-user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetAllUsersService } from './services/get-all-users.service';
import { CreateUserService } from './services/create-user.service';

@Controller('users')
export class UsersController {
  constructor(
    private createUserService: CreateUserService,
    private getAllUsersService: GetAllUsersService,
    private deleteUserService: DeleteUserService,
    private updateUserService: UpdateUserService,
  ) {}

  @Post()
  @ApiCreatedResponse({ description: 'User created sucessfully' })
  @UsePipes(new TrimBodyPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.createUserService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.getAllUsersService.findAll();
  }

  @Delete(':email')
  @UsePipes(new TrimBodyPipe())
  async delete(@Param('email') email: string) {
    return await this.deleteUserService.delete(email);
  }

  @Put(':email')
  @UsePipes(new TrimBodyPipe())
  async update(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.updateUserService.update(email, updateUserDto);
  }
}
