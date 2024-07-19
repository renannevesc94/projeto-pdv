import { Test, TestingModule } from '@nestjs/testing';
import { GetAllUsersService } from '../get-all-users.service';
import { IGetAllRepository } from '../repositories/interface-get-all.repository';

describe('GetAllUsersService', () => {
  let service: GetAllUsersService;
  let getAllUsersRepository: IGetAllRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAllUsersService,
        {
          provide: IGetAllRepository,
          useValue: {
            getAll: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<GetAllUsersService>(GetAllUsersService);
    getAllUsersRepository = module.get<IGetAllRepository>(IGetAllRepository);
  });

  it('should call the getAll method of getAllUsersRepository', async () => {
    await service.getAll();
    expect(getAllUsersRepository.getAll).toHaveBeenCalled();
  });
});
