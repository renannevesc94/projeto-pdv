import { Injectable } from '@nestjs/common';
import { ICreateUserRepository } from './repositories/interface-create-user.repository';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class CreateUserService {
  constructor(readonly createUserRepository: ICreateUserRepository) {}

  async create(createUserDto: CreateUserDto) {
    return await this.createUserRepository.create(createUserDto);
  }
}
