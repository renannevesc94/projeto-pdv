import { Test, TestingModule } from '@nestjs/testing';
import { ICreateUserRepository } from '../repositories/interface-create-user.repository';
import { CreateUserService } from '../create-user.service';
import { CreateUserDto } from '../dto/create-user-dto';
import { Roles, User } from '../../user.entity';

describe('CreateUserService', () => {
  let service: CreateUserService;
  let createUserRepository: ICreateUserRepository;

  const createUserDto: CreateUserDto = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    role: 'ADMINISTRADOR' as Roles,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: ICreateUserRepository,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CreateUserService>(CreateUserService);
    createUserRepository = module.get<ICreateUserRepository>(
      ICreateUserRepository,
    );
  });

  it('should call the create method of the createUserRepository with the correct arguments', async () => {
    await service.create(createUserDto);
    expect(createUserRepository.create).toHaveBeenCalledWith(createUserDto);
  });

  it('should return the result of the create method of the createUserRepository', async () => {
    const expectedResult: User = {
      id: '',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'ADMINISTRADOR' as Roles,
    };

    jest
      .spyOn(createUserRepository, 'create')
      .mockResolvedValue(expectedResult);

    const result = await service.create(createUserDto);
    expect(result).toEqual(expectedResult);
  });
});
