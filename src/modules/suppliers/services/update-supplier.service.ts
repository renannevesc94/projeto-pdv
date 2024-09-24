import { Injectable } from '@nestjs/common';
import { IUpdateSupplierRepository } from '../repositories/interface-update-supplier.repository';
import { UpdateSupplierDto } from '../dto/UppdateSupplier.dto';

@Injectable()
export class UpdateSupplierService {
  constructor(
    private readonly updateSupplierRepository: IUpdateSupplierRepository,
  ) {}

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return await this.updateSupplierRepository.update(id, updateSupplierDto);
  }
}
