import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserService } from './create-user/create-user.service';
import { CreateUserDto } from './create-user/dto/create-user-dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';

@Controller('users')
export class UsersController {
  constructor(private createUserService: CreateUserService) {}

  @Post()
  @UsePipes(new TrimBodyPipe(), new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.createUserService.create(createUserDto);
  }
}
