import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/interface-user.repository';

@Injectable()
export class GetAllUsersService {
  constructor(private readonly userRepository: IUserRepository) {}
  async findAll() {
    return await this.userRepository.findAll();
  }
}
