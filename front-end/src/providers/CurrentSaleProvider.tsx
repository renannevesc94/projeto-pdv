// carregar os dados do carrinho de compras
// atualizar os dados do carrinho de compras
// remover os dados do carrinho de compras

import useLocalStorage from "@rehooks/local-storage";
import { createContext, useCallback, useContext, useMemo } from "react";

type CurrentSaleProviderType = {
  addItemToSale: (saleItem: SaleItemType) => void;
  salesItemsMap: Map<string, number>;
  currentSaleItems: SaleItemType[];
};

type SaleItemType = {
  id: string;
  title: string;
  value: string;
  quatity: number;
};

export const CurrentSaleContext = createContext<CurrentSaleProviderType>({
  addItemToSale: () => {},
  salesItemsMap: new Map<string, number>(),
  currentSaleItems: [],
});

export const CurrentSaleProviderBase = () => {
  const [currentSaleItems, setcurrentSaleItems] = useLocalStorage<SaleItemType[] | []>(
    "saleItems",
    []
  );

  const addItemToSale = useCallback(
    (itemToSale: SaleItemType) => {
      setcurrentSaleItems(() => {
        const itemExistIndex = currentSaleItems.findIndex((el) => el.id === itemToSale.id);
        const updatedItemsSale = currentSaleItems;

        if (itemExistIndex !== -1) {
          if (itemToSale.quatity === 0) {
            return currentSaleItems.filter((_, ind) => itemExistIndex !== ind);
          }
          updatedItemsSale[itemExistIndex] = itemToSale;
          return updatedItemsSale;
        }

        if (itemToSale.quatity === 0) {
          return currentSaleItems;
        }
        return [itemToSale, ...currentSaleItems];
      });
    },
    [setcurrentSaleItems, currentSaleItems]
  );

  const salesItemsMap = useMemo(() => {
    const map = new Map<string, number>();
    currentSaleItems.forEach((item) => {
      map.set(item.id, item.quatity);
    });

    return map;
  }, [currentSaleItems]);

  return {
    addItemToSale,
    salesItemsMap,
    currentSaleItems,
  };
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const value = CurrentSaleProviderBase();
  return <CurrentSaleContext.Provider value={value}>{children}</CurrentSaleContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentSale = () => {
  const context = useContext(CurrentSaleContext);
  if (!context) {
    throw new Error("useAuth must be used within an CartProvider");
  }

  return context;
};
