import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { ICreateSupplierRepository } from './repositories/interface-create-supplier.repository';

@Injectable()
export class CreateSupplierService {
  constructor(private createSupplierRepository: ICreateSupplierRepository) {}
  async create(createSupplierDto: CreateSupplierDto) {
    return this.createSupplierRepository.create(createSupplierDto);
  }
}
