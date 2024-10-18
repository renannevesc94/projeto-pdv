import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user-dto';
import { IUserRepository } from '../repositories/interface-user.repository';

@Injectable()
export class CreateUserService {
  constructor(readonly userRepository: IUserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;
    return await this.userRepository.create(createUserDto);
  }
}
