import { Injectable } from '@nestjs/common';
import { ISupplierRepository } from '../repositories/interface-supplier.repository';

@Injectable()
export class DeleteSupplierService {
  constructor(private supplierRepository: ISupplierRepository) {}

  async delete(id: number) {
    return await this.supplierRepository.delete(id);
  }
}
