import { Injectable } from '@nestjs/common';
import { SaleItemDto } from '../dto/sale-item.dto';
import { ICalculateTotalPrice } from '../interfaces/interface-calculate-total-price';
import { IAddItem } from '../interfaces/interface-add-tem';
import { IUpdateItem } from '../interfaces/interface-update-item';

@Injectable()
export class ItemSaleHandlerService {
  constructor(
    private readonly calculateFinalPriceService: ICalculateTotalPrice,
    private readonly addItemService: IAddItem,
    private readonly updateItemService: IUpdateItem,
  ) {}

  async handle(saleId: number, saleItemDto: SaleItemDto, itemOnSale) {
    const productWithDiscount =
      await this.calculateFinalPriceService.calculateTotalPrice(saleItemDto);

    if (itemOnSale) {
      return await this.updateItemService.updateItemOnSale(
        itemOnSale.id,
        productWithDiscount,
      );
    }
    return await this.addItemService.addItem(saleId, productWithDiscount);
  }
}
