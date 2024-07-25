import { FormEvent, useState } from "react";

// HOOKS
import { useMoney } from "@/store/money-slice.tsx";
import { useProduct } from "@/store/product-slice.tsx";
import { useSummary } from "@/store/summary-slice.tsx";

// CONSTANTS
import { POSSIBLE_DENOMINATIONS } from "@/constants.ts";

// COMPONENTS
import { SummaryModal } from "@/components/summary-modal";
import { Button } from "@/components/shared/button";
import { Input } from "@/components/shared/input";

import "./money-input.css";

export const MoneyInput = () => {
  const { toggleSummaryModal } = useSummary();
  const { addToTotalAmount, totalAmount, resetMoneyState } = useMoney();
  const { updateProductOnBuy, resetSelectedProduct, selectedProduct } =
    useProduct();
  const [amountError, setAmountError] = useState(false);

  const shouldDisableResetBtn = totalAmount === 0;
  const shouldDisableBuy =
    !selectedProduct || selectedProduct.price > totalAmount;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const amountEntered = Number(data.get("money-amount"));

    if (
      isNaN(amountEntered) ||
      !POSSIBLE_DENOMINATIONS.includes(amountEntered)
    ) {
      return setAmountError(true);
    }

    setAmountError(false);
    addToTotalAmount(amountEntered);
    e.currentTarget.reset();
  };

  const handleBuy = () => {
    toggleSummaryModal();
    updateProductOnBuy();
  };

  const handleReset = () => {
    resetMoneyState();
    resetSelectedProduct();
  };

  return (
    <form onSubmit={handleSubmit} className="information-display">
      <h3>Please add money to buy something</h3>

      {amountError && (
        <>
          <h4 className="error">
            Please enter a valid denomination to continue
          </h4>

          <p className="error">{POSSIBLE_DENOMINATIONS.join(", ")}</p>
        </>
      )}

      <Input
        className={`${amountError ? "error" : ""}`}
        name="money-amount"
        placeholder="Enter amount"
        type="number"
        step={0.01}
      />

      <div className="buttons-wrapper">
        <Button type="submit">Add money</Button>

        <Button type="button" onClick={handleBuy} disabled={shouldDisableBuy}>
          Buy
        </Button>

        <Button
          type="button"
          onClick={handleReset}
          disabled={shouldDisableResetBtn}
        >
          Reset
        </Button>
      </div>

      <SummaryModal />
    </form>
  );
};
