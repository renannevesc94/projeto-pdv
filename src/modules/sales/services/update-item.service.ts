import { Injectable } from '@nestjs/common';
import { ISaleRepository } from '../repositories/interface-sale.repository';
import { SaleItemDto } from '../dto/sale-item.dto';

@Injectable()
export class UpdateItemServiceService {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async updateItemOnSale(updateDataItem: SaleItemDto) {
    return await this.saleRepository.updateItemOnSale(updateDataItem);
  }
}
