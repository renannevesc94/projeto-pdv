import { SaleItemDto } from '../dto/sale-item.dto';

export abstract class ICalculateTotalPrice {
  abstract calculateTotalPrice(saleItemDto: SaleItemDto): Promise<SaleItemDto>;
}
