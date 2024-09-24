import { Injectable } from '@nestjs/common';
import { IDeleteSupplierRepository } from '../repositories/interface-delete-supplier.repository';

@Injectable()
export class DeleteSupplierService {
  constructor(private deleteSupplierRepository: IDeleteSupplierRepository) {}

  async delete(id: number) {
    return await this.deleteSupplierRepository.delete(id);
  }
}
