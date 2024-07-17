import { PrismaService } from 'src/common/prisma/prisma.service';
import { ICreateUserRepository } from './interface-create-user.repository';
import { Roles, User } from '../../user.entity';
import { CreateUserDto } from '../dto/create-user-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCreateuserRepository implements ICreateUserRepository {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.prisma.user.create({
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
}
