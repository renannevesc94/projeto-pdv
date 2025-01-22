export type SaleContextType = {
  addOrUpdateSaleItem: (saleItem: SaleItemType) => void;
  itemQuantityMap: Map<string, number>;
  sale: sale;
  itemsWithTotal: (SaleItemType & { totalPrice: number })[];
  cancelSale: VoidFunction;
  setAdjustmentToSale: (adjustmentType: string, adjustmentFormat: string, value: number) => void;
};

export type SaleItemType = {
  id: string;
  title: string;
  quantity: number;
  value: number;
};

export type sale = {
  items: SaleItemType[];
  discountType?: string;
  discountValue?: number;
  subTotal: number;
  total: number;
};
