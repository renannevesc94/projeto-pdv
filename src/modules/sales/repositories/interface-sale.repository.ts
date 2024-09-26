import { SaleItemDto } from '../dto/sale-item.dto';
import { SaleDto } from '../dto/sale.dto';

export abstract class ISaleRepository {
  abstract addProduct(
    saleId: number,
    saleItemDto: SaleItemDto,
  ): Promise<SaleItemDto>;

  abstract getSalesWithItems(saleId: number): Promise<SaleDto> | null;

  abstract updateItemOnSale(product: SaleItemDto): Promise<SaleItemDto>;

  abstract startSaleWithProduct(userId: string): Promise<SaleDto>;

  abstract getProductById(productId: string): Promise<boolean>;
}
