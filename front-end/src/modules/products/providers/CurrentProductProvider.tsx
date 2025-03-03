// Criar um contexto que receba o produto a ser editado e mantenha o estado pra informar se o produto está em edição
//Precisa retornar essas informações e função para setar esses estados

import { createContext, useContext, useState } from "react";
import { NewProductType } from "../types";

type ProductContextType = {
  currentProduct: NewProductType | null;
  setCurrentProduct: (product: NewProductType) => void;
  isEditing: boolean;
  setIsEditing: (state: boolean) => void;
};

const ProductContext = createContext<ProductContextType>({
  currentProduct: null,
  setCurrentProduct: () => {},
  isEditing: false,
  setIsEditing: () => {},
});

const useProductContextBase = () => {
  const [currentProduct, setCurrentProduct] = useState<NewProductType | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return {
    currentProduct,
    setCurrentProduct,
    isEditing,
    setIsEditing,
  };
};

export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useProductContextBase();
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("ProductContext must be used within an CurrentProfileProvider");
  }
  return context;
};
