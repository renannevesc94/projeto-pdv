import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { IUpdateUserRepository } from './repositories/interface-update-user.repository';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UpdateUserService {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async update(email: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      updateUserDto.password = hashedPassword;
    }

    return await this.updateUserRepository.update(email, updateUserDto);
  }
}
