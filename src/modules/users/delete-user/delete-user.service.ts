import { Injectable } from '@nestjs/common';
import { IDeleteUserRepository } from './repositories/interface-delete-user.repository';

@Injectable()
export class DeleteUserService {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async delete(email: string) {
    return await this.deleteUserRepository.delete(email);
  }
}
