import { Test, TestingModule } from '@nestjs/testing';

import { IUpdateUserRepository } from '../repositories/interface-update-user.repository';
import { UpdateUserService } from '../services/update-user.service';

describe('UpdateUserService', () => {
  let service: UpdateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateUserService,
        {
          provide: IUpdateUserRepository,
          useValue: {
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UpdateUserService>(UpdateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
