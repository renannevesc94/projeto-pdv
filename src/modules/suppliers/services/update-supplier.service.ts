import { Injectable } from '@nestjs/common';
import { UpdateSupplierDto } from '../dto/UppdateSupplier.dto';
import { ISupplierRepository } from '../repositories/interface-supplier.repository';

@Injectable()
export class UpdateSupplierService {
  constructor(private readonly supplierRepository: ISupplierRepository) {}

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return await this.supplierRepository.update(id, updateSupplierDto);
  }
}
