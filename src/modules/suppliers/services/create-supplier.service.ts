import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { ISupplierRepository } from '../repositories/interface-supplier.repository';

@Injectable()
export class CreateSupplierService {
  constructor(private supplierRepository: ISupplierRepository) {}
  async create(createSupplierDto: CreateSupplierDto) {
    return this.supplierRepository.create(createSupplierDto);
  }
}
