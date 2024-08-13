import { Injectable } from '@nestjs/common';
import { IGetAllRepository } from './repositories/interface-get-all.repository';

@Injectable()
export class GetAllUsersService {
  constructor(private readonly getAllUsersRepository: IGetAllRepository) {}
  async findAll() {
    return await this.getAllUsersRepository.findAll();
  }
}
