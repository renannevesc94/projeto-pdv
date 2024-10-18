import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/interface-user.repository';

@Injectable()
export class DeleteUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async delete(email: string) {
    return await this.userRepository.delete(email);
  }
}
