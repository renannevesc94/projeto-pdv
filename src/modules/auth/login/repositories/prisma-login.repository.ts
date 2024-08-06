import { PrismaService } from 'src/common/prisma/prisma.service';
import { ILoginRepository } from './interface-login.repository';
import { Roles, User } from 'src/modules/users/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaLoginRepository implements ILoginRepository {
  constructor(private readonly prisma: PrismaService) {}
  async getByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return null;
    }

    return new User(
      user.id,
      user.name,
      user.email,
      user.password,
      user.role as Roles,
    );
  }
}
