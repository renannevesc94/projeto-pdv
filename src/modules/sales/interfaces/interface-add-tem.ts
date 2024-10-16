import { SaleItemDto } from '../dto/sale-item.dto';

export abstract class IAddItem {
  abstract addItem(
    saleId: number,
    saleItemDto: SaleItemDto,
  ): Promise<SaleItemDto>;
}
