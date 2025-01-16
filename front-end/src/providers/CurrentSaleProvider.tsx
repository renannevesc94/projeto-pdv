import useLocalStorage from "@rehooks/local-storage";
import { createContext, useCallback, useContext, useMemo } from "react";

type SaleContextType = {
  addOrUpdateSaleItem: (saleItem: SaleItemType) => void;
  itemQuantityMap: Map<string, number>;
  saleItems: SaleItemType[];
  itemsWithTotalPrice: (SaleItemType & { totalPrice: number })[];
  TotalSale: number;
  cancelSale: () => void;
};

type SaleItemType = {
  id: string;
  title: string;
  quatity: number;
  value: number;
  discount?: number;
};

export const SaleContext = createContext<SaleContextType>({
  addOrUpdateSaleItem: () => {},
  itemQuantityMap: new Map<string, number>(),
  saleItems: [],
  itemsWithTotalPrice: [],
  TotalSale: 0,
  cancelSale: () => {},
});

export const SaleProviderBase = () => {
  const [saleItems, setSaleItems] = useLocalStorage<SaleItemType[] | []>("saleItems", []);

  const addOrUpdateSaleItem = useCallback(
    (itemToSale: SaleItemType) => {
      setSaleItems(() => {
        if (itemToSale.quatity === 0) {
          return saleItems.filter((item) => item.id !== itemToSale.id);
        }
        const itemIndex = saleItems.findIndex((el) => el.id === itemToSale.id);
        const isExistingItem = itemIndex !== -1;

        if (isExistingItem) {
          return saleItems.map((item, index) => (index === itemIndex ? itemToSale : item));
        }

        return [itemToSale, ...saleItems];
      });
    },
    [setSaleItems, saleItems]
  );

  const cancelSale = useCallback(() => {
    setSaleItems([]);
  }, [setSaleItems]);

  const itemsWithTotalPrice = useMemo(() => {
    return saleItems.map((item) => ({
      ...item,
      totalPrice: item.quatity * item.value,
    }));
  }, [saleItems]);

  const itemQuantityMap = useMemo(() => {
    const map = new Map<string, number>();
    saleItems.forEach((item) => {
      map.set(item.id, item.quatity);
    });

    return map;
  }, [saleItems]);

  const TotalSale = useMemo(() => {
    return itemsWithTotalPrice.reduce((acc, item) => acc + item.totalPrice, 0);
  }, [itemsWithTotalPrice]);

  return {
    addOrUpdateSaleItem,
    itemQuantityMap,
    saleItems,
    itemsWithTotalPrice,
    TotalSale,
    cancelSale,
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
