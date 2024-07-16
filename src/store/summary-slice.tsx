import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface VendingMachineSummaryContextState {
  isSummaryModalOpen: boolean;
  toggleSummaryModal: () => void;
}

interface VendingMachineSummaryProvider {
  children: ReactNode;
}

const VendingMachineSummaryContext = createContext<
  VendingMachineSummaryContextState | undefined
>({ isSummaryModalOpen: false, toggleSummaryModal: () => undefined });

export const VendingMachineSummaryProvider: React.FC<
  VendingMachineSummaryProvider
> = ({ children }) => {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

  const toggleSummaryModal = useCallback(
    () => setIsSummaryModalOpen((prev) => !prev),
    [],
  );

  return (
    <VendingMachineSummaryContext.Provider
      value={{ isSummaryModalOpen, toggleSummaryModal }}
    >
      {children}
    </VendingMachineSummaryContext.Provider>
  );
};

export const useSummary = () => {
  const context = useContext(VendingMachineSummaryContext);
  if (!context)
    throw new Error("useTheme must be used within a VendingMachineContext");
  return context;
};
