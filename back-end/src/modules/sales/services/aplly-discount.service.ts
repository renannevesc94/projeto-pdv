import { Injectable } from '@nestjs/common';
import { IApplyDiscount } from '../interfaces/interface-apply-discount';

@Injectable()
export class ApllyDiscountService implements IApplyDiscount {
  async applyDiscount(
    discountType: string,
    discount: number,
    totalPrice: number,
  ) {
    let discountValue = 0;
    if (discountType === 'PERCENT') {
      discountValue = (totalPrice * discount) / 100;
      totalPrice -= discountValue;
      return { totalPrice, discountValue };
    }
    totalPrice -= discount;
    discountValue = discount;
    return { totalPrice, discountValue };
  }
}
