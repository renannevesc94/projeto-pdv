import { SaleItemDto } from '../dto/sale-item.dto';

export abstract class IUpdateItem {
  abstract updateItemOnSale(
    id: string,
    saleItemDto: SaleItemDto,
  ): Promise<SaleItemDto>;
}
