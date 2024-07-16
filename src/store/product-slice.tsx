import { Product } from "../types.ts";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface VendingMachineProductsContextState {
  products: Product[];
  selectedProduct: Product | null;
  setProducts: (products: Product[]) => void;
  toggleSelectedProduct: (products: Product) => void;
  updateProductOnBuy: () => void;
  resetSelectedProduct: () => void;
}

interface VendingMachineProductsProvider {
  children: ReactNode;
}

const VendingMachineProductsContext = createContext<
  VendingMachineProductsContextState | undefined
>({
  selectedProduct: null,
  toggleSelectedProduct: () => undefined,
  updateProductOnBuy: () => undefined,
  setProducts: () => undefined,
  resetSelectedProduct: () => undefined,
  products: [],
});

export const VendingMachineProductsProvider: React.FC<
  VendingMachineProductsProvider
> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const toggleSelectedProduct = (product: Product) => {
    if (product.id === selectedProduct?.id) {
      return setSelectedProduct(null);
    }

    setSelectedProduct(product);
  };

  const updateProductOnBuy = () => {
    // reduce quantity of the current product
    setProducts((prevProducts) => {
      if (!selectedProduct) {
        return prevProducts;
      }

      const currentProdIndex = prevProducts.findIndex(
        (prd) => prd.id === selectedProduct?.id,
      );
      prevProducts[currentProdIndex] = {
        ...selectedProduct,
        quantity: selectedProduct?.quantity - 1,
      };

      return [...prevProducts];
    });
    // clear selection
    setSelectedProduct(null);
  };

  const resetSelectedProduct = () => {
    setSelectedProduct(null);
  }

  return (
    <VendingMachineProductsContext.Provider
      value={{
        products,
        selectedProduct,
        toggleSelectedProduct,
        setProducts,
        updateProductOnBuy,
        resetSelectedProduct
      }}
    >
      {children}
    </VendingMachineProductsContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(VendingMachineProductsContext);
  if (!context)
    throw new Error(
      "useProduct must be used within a VendingMachineProductsContext",
    );
  return context;
};
