import { Test, TestingModule } from '@nestjs/testing';
import { DeleteUserService } from '../delete-user.service';
import { IDeleteUserRepository } from '../repositories/interface-delete-user.repository';

describe('DeleteUserService', () => {
  let service: DeleteUserService;
  let deleteUserRepository: IDeleteUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteUserService,
        {
          provide: IDeleteUserRepository,
          useValue: {
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<DeleteUserService>(DeleteUserService);
    deleteUserRepository = module.get<IDeleteUserRepository>(
      IDeleteUserRepository,
    );
  });

  it('should call the delete method of deleteUserRepository', async () => {
    const email = 'test@example.com';
    await service.delete(email);
    expect(deleteUserRepository.delete).toHaveBeenCalledWith(email);
  });
});
