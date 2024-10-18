import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user-dto';
import { Roles, User } from '../user.entity';
import { PrismaCreateuserRepository } from '../repositories/prisma-user.repository';

describe('PrismaCreateuserRepository', () => {
  let repository: PrismaCreateuserRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaCreateuserRepository,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    repository = module.get<PrismaCreateuserRepository>(
      PrismaCreateuserRepository,
    );
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should call the create method of prisma.user with the correct arguments', async () => {
    const createUserDto: CreateUserDto = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'ADMINISTRATOR' as Roles,
    };

    await repository.create(createUserDto);

    expect(prismaService.users.create).toHaveBeenCalledWith({
      data: createUserDto,
    });
  });

  it('should return a new User instance with the correct values', async () => {
    const createUserDto: CreateUserDto = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'ADMINISTRATOR' as Roles,
    };

    const createdUser = {
      id: '123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'ADMINISTRATOR' as Roles,
    };

    jest.spyOn(prismaService.users, 'create').mockResolvedValue(createdUser);

    const result = await repository.create(createUserDto);

    expect(result).toEqual(
      new User(
        createdUser.id,
        createdUser.name,
        createdUser.email,
        createdUser.password,
        createdUser.role,
      ),
    );
  });
});
