import { Injectable } from '@nestjs/common';
import { ISupplierRepository } from '../repositories/interface-supplier.repository';

@Injectable()
export class FindAllSuppliersService {
  constructor(private supplierRepository: ISupplierRepository) {}

  async findAll() {
    return await this.supplierRepository.findAll();
  }
}
