import { Injectable } from '@nestjs/common';
import { IGetProductById } from 'src/common/interfaces/get-product-by-id.interface';
import { SaleItemDto } from '../dto/sale-item.dto';
import { IApplyDiscount } from '../interfaces/interface-apply-discount';
import { ICalculateTotalPrice } from '../interfaces/interface-calculate-total-price';

@Injectable()
export class CalculateTotalPriceService implements ICalculateTotalPrice {
  constructor(
    private readonly getProductByIdService: IGetProductById,
    private readonly apllyDiscountService: IApplyDiscount,
  ) {}

  async calculateTotalPrice(saleItemDto: SaleItemDto) {
    const product = await this.getProductByIdService.getProductById(
      saleItemDto.productsId,
    );

    const totalPrice = product.price * saleItemDto.quantity;
    const discount = await this.apllyDiscountService.apllyDiscount(
      saleItemDto.discountType,
      saleItemDto.discount,
      totalPrice,
    );
    saleItemDto.totalPrice = discount.totalPrice;
    saleItemDto.discountValue = discount.discountValue;
    saleItemDto.unitPrice = product.price;

    return saleItemDto;
  }
}
