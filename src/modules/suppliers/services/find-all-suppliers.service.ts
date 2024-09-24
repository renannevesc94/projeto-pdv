import { Injectable } from '@nestjs/common';
import { IFindAllSuppliersRepository } from '../repositories/interface-find-all-suppliers.repository';

@Injectable()
export class FindAllSuppliersService {
  constructor(
    private findAllSuppliersRepository: IFindAllSuppliersRepository,
  ) {}

  async findAll() {
    return await this.findAllSuppliersRepository.findAll();
  }
}
