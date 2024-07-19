import { PrismaService } from 'src/common/prisma/prisma.service';
import { IGetAllRepository } from './interface-get-all.repository';
import { Roles, User } from '../../user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaGetAllUsersRepository implements IGetAllRepository {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const users = await this.prisma.user.findMany();

    return users.map(
      (user) =>
        new User(
          user.id,
          user.name,
          user.email,
          user.password,
          user.role as Roles,
        ),
    );
  }
}
