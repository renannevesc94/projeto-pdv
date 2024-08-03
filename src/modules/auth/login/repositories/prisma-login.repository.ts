import { PrismaService } from 'src/common/prisma/prisma.service';
import { ILoginRepository } from './interface-login.repository';
import { User } from 'src/modules/users/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaLoginRepository implements ILoginRepository {
  constructor(private readonly prisma: PrismaService) {}
  async getUser(
    email: string,
  ): Promise<Pick<User, 'email' | 'password'> | null> {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return null;
    }

    return { email: user.email, password: user.password };
  }
}
