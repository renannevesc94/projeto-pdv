import { PrismaService } from 'src/common/prisma/prisma.service';
import { User } from '../../user.entity';
import { IDeleteUserRepository } from './interface-delete-user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaDeleteUserRepository implements IDeleteUserRepository {
  constructor(private prisma: PrismaService) {}
  async delete(email: string): Promise<User> {
    const deletedUser = await this.prisma.user.delete({ where: { email } });
    return new User(
      deletedUser.id,
      deletedUser.name,
      deletedUser.email,
      deletedUser.password,
      deletedUser.role as User['role'],
    );
  }
}
