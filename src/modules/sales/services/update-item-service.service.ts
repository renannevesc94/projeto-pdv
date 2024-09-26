import { Injectable } from '@nestjs/common';
import { ISaleRepository } from '../repositories/interface-sale.repository';
import { SaleItemDto } from '../dto/sale-item.dto';

@Injectable()
export class UpdateItemServiceService {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async updateItemOnSale(itemOnSale: SaleItemDto, updateDataItem: SaleItemDto) {
    itemOnSale.quantity += updateDataItem.quantity;
    itemOnSale.totalPrice += updateDataItem.totalPrice;
    itemOnSale.unitPrice = parseFloat(
      (itemOnSale.totalPrice / itemOnSale.quantity).toFixed(2),
    );

    return await this.saleRepository.updateItemOnSale(itemOnSale);
  }
}
