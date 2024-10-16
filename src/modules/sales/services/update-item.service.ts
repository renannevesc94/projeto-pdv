import { Injectable } from '@nestjs/common';
import { ISaleRepository } from '../repositories/interface-sale.repository';
import { SaleItemDto } from '../dto/sale-item.dto';
import { IUpdateItem } from '../interfaces/interface-update-item';

@Injectable()
export class UpdateItemService implements IUpdateItem {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async updateItemOnSale(id: string, updateDataItem: SaleItemDto) {
    return await this.saleRepository.updateItemOnSale(id, updateDataItem);
  }
}
