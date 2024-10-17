export abstract class IApplyDiscount {
  abstract applyDiscount(
    discountType: string,
    discount: number,
    totalPrice: number,
  ): Promise<{ totalPrice: number; discountValue: number }>;
}
