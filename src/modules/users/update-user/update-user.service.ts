import { Injectable } from '@nestjs/common';
import { IUpdateUserRepository } from './repositories/interface-update-user.repository';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UpdateUserService {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async update(email: string, updateUserDto: UpdateUserDto) {
    return await this.updateUserRepository.update(email, updateUserDto);
  }
}
