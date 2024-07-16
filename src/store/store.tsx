import React, { ReactNode } from "react";
import { VendingMachineProductsProvider } from "./product-slice.tsx";
import { VendingMachineMoneyProvider } from "./money-slice.tsx";
import { VendingMachineSummaryProvider } from "./summary-slice.tsx";

interface VendingMachineProvider {
  children: ReactNode;
}

export const AppProvider: React.FC<VendingMachineProvider> = ({ children }) => {
  return (
    <VendingMachineProductsProvider>
      <VendingMachineMoneyProvider>
        <VendingMachineSummaryProvider>
          {children}
        </VendingMachineSummaryProvider>
      </VendingMachineMoneyProvider>
    </VendingMachineProductsProvider>
  );
};
