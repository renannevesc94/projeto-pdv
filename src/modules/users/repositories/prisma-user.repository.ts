import { PrismaService } from 'src/common/prisma/prisma.service';
import { Roles, User } from '../user.entity';
import { CreateUserDto } from '../dto/create-user-dto';
import { Injectable } from '@nestjs/common';
import { IUserRepository } from './interface-user.repository';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.prisma.users.create({
      data: {
        ...createUserDto,
      },
    });

    return new User(
      createdUser.id,
      createdUser.name,
      createdUser.email,
      createdUser.password,
      createdUser.role as Roles,
    );
  }

  async delete(email: string): Promise<User> {
    const deletedUser = await this.prisma.users.delete({ where: { email } });
    return new User(
      deletedUser.id,
      deletedUser.name,
      deletedUser.email,
      deletedUser.password,
      deletedUser.role as User['role'],
    );
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.users.update({
      where: {
        email,
      },
      data: {
        ...updateUserDto,
      },
    });

    return {
      ...updatedUser,
      role: updatedUser.role as User['role'],
    };
  }

  async findAll() {
    const users = await this.prisma.users.findMany();

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
