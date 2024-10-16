export abstract class IApplyDiscount {
  abstract apllyDiscount(
    discountType: string,
    discount: number,
    totalPrice: number,
  ): Promise<{ totalPrice: number; discountValue: number }>;
}
