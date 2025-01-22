import useLocalStorage from "@rehooks/local-storage";
import { createContext, useCallback, useContext, useMemo } from "react";
import { sale, SaleContextType, SaleItemType } from "./types";

export const SaleContext = createContext<SaleContextType>({
  addOrUpdateSaleItem: () => {},
  itemQuantityMap: new Map<string, number>(),
  sale: { discountType: "", discountValue: 0, subTotal: 0, total: 0, items: [] },
  itemsWithTotal: [],
  cancelSale: () => {},
  setAdjustmentToSale: () => {},
});

export const SaleProviderBase = () => {
  const [sale, setSale] = useLocalStorage<sale>("saleItems", {
    items: [],
    discountType: "",
    discountValue: 0,
    subTotal: 0,
    total: 0,
  });

  const calculateItemsWithTotal = useCallback((items: SaleItemType[]) => {
    return items.map((item) => ({
      ...item,
      totalPrice: item.quantity * item.value,
    }));
  }, []);

  const itemsWithTotal = useMemo(() => {
    return calculateItemsWithTotal(sale.items);
  }, [calculateItemsWithTotal, sale.items]);

  const addOrUpdateSaleItem = useCallback(
    (itemToSale: SaleItemType) => {
      setSale(() => {
        const currentSale = structuredClone(sale);
        if (itemToSale.quantity === 0) {
          const newItems = currentSale?.items.filter((item) => item.id !== itemToSale.id) || [];
          return {
            discountType: currentSale.discountType,
            discountValue: currentSale.discountValue,
            subTotal: currentSale.total,
            total: currentSale.total - itemToSale.value,
            items: newItems,
          };
        }

        const itemExist = currentSale.items.findIndex((item) => item.id === itemToSale.id);

        if (itemExist === -1) {
          currentSale?.items.push(itemToSale);
        }

        const itemsWithTotalSale = calculateItemsWithTotal(currentSale.items);
        const totalPriceSale = itemsWithTotalSale.reduce((acc, item) => acc + item.totalPrice, 0);

        currentSale.items[itemExist] = itemToSale;
        return { ...currentSale, subTotal: totalPriceSale, total: totalPriceSale };
      });
    },
    [setSale, sale, calculateItemsWithTotal]
  );

  const setAdjustmentToSale = (adjustmentType: string, adjustmentFormat: string, value: number) => {
    if (adjustmentType !== "discount") return;
    if (value < 0) return;
    if (adjustmentFormat === "percentage" && value > 100) return;

    const currentSale = structuredClone(sale);
    const discountValue = adjustmentFormat === "fixed" ? value : (currentSale.total * value) / 100;

    setSale(() => {
      return {
        ...currentSale,
        total: currentSale.total - discountValue,
        discountType: adjustmentFormat,
        discountValue: discountValue,
      };
    });
  };

  const cancelSale = useCallback(() => {
    setSale({ discountType: "", discountValue: 0, subTotal: 0, total: 0, items: [] });
  }, [setSale]);

  const itemQuantityMap = useMemo(() => {
    const map = new Map<string, number>();
    sale.items.forEach((item) => {
      map.set(item.id, item.quantity);
    });

    return map;
  }, [sale]);

  return {
    addOrUpdateSaleItem,
    itemQuantityMap,
    sale,
    itemsWithTotal,
    cancelSale,
    setAdjustmentToSale,
  };
};

export const SaleProvider = ({ children }: { children: React.ReactNode }) => {
  const value = SaleProviderBase();
  return <SaleContext.Provider value={value}>{children}</SaleContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSale = () => {
  const context = useContext(SaleContext);
  if (!context) {
    throw new Error("useSale must be used within a SaleProvider");
  }

  return context;
};
