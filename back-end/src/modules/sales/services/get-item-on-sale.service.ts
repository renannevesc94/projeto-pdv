import { Injectable } from '@nestjs/common';
import { SaleItemDto } from '../dto/sale-item.dto';

@Injectable()
export class GetItemOnSaleService {
  constructor() {}

  getItemOnSale(saleItems: SaleItemDto[], productId: string) {
    return saleItems.find((item) => item.productsId === productId);
  }
}
