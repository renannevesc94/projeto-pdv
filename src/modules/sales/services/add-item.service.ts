import { Injectable } from '@nestjs/common';
import { SaleItemDto } from '../dto/sale-item.dto';
import { ISaleRepository } from '../repositories/interface-sale.repository';
import { IAddItem } from '../interfaces/interface-add-tem';

@Injectable()
export class AddItemService implements IAddItem {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async addItem(saleId: number, saleItemDto: SaleItemDto) {
    return await this.saleRepository.addProduct(saleId, saleItemDto);
  }
}
