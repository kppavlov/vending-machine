import React, { createContext, ReactNode, useContext, useState } from "react";

interface VendingMachineChangeContextState {
  totalAmount: number;
  change: number;
  addToTotalAmount: (amount: number) => void;
  calculateChange: (productPrice: number) => void;
  clearChange: () => void;
  resetMoneyState: () => void;
}

interface VendingMachineProvider {
  children: ReactNode;
}

const VendingMachineMoneyContext = createContext<
  VendingMachineChangeContextState | undefined
>({
  calculateChange: () => undefined,
  totalAmount: 0,
  change: 0,
  addToTotalAmount: () => undefined,
  clearChange: () => undefined,
  resetMoneyState: () => undefined,
});

export const VendingMachineMoneyProvider: React.FC<VendingMachineProvider> = ({
  children,
}) => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [change, setChange] = useState<number>(0);

  const addToTotalAmount = (newAmount: number) => {
    setTotalAmount((currentAmount) => currentAmount + newAmount);
  };

  const calculateChange = (productPrice: number) => {
    if (productPrice === 0) {
      return setChange(0);
    }
    setChange(totalAmount - productPrice);
  };

  const clearChange = () => {
    setChange(0);
  };

  const resetMoneyState = () => {
    setChange(0);
    setTotalAmount(0);
  };

  return (
    <VendingMachineMoneyContext.Provider
      value={{
        addToTotalAmount,
        totalAmount,
        change,
        calculateChange,
        clearChange,
        resetMoneyState,
      }}
    >
      {children}
    </VendingMachineMoneyContext.Provider>
  );
};

export const useMoney = () => {
  const context = useContext(VendingMachineMoneyContext);
  if (!context)
    throw new Error("useMoney must be used within a VendingMachineContext");
  return context;
};
