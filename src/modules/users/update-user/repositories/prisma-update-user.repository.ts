import { PrismaService } from 'src/common/prisma/prisma.service';
import { IUpdateUserRepository } from './interface-update-user.repository';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateUserRepository implements IUpdateUserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async update(email: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({
      where: {
        email,
      },
      data: {
        ...updateUserDto,
      },
    });

    return updatedUser;
  }
}
