import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUserRepository } from '../repositories/interface-user.repository';

@Injectable()
export class UpdateUserService {
  constructor(private readonly userRepository: IUserRepository) {}
  async update(email: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      updateUserDto.password = hashedPassword;
    }

    return await this.userRepository.update(email, updateUserDto);
  }
}
