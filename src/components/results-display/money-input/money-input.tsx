import { FormEvent, useState } from "react";

// HOOKS
import { useMoney } from "../../../store/money-slice.tsx";
import { useProduct } from "../../../store/product-slice.tsx";
import { useSummary } from "../../../store/summary-slice.tsx";

// CONSTANTS
import { POSSIBLE_DENOMINATIONS } from "../../../constants.ts";

// COMPONENTS
import { SummaryModal } from "../../summary-modal/summary-modal.tsx";

import "./money-input.css";

export const MoneyInput = () => {
  const { toggleSummaryModal } = useSummary();
  const { addToTotalAmount, totalAmount, resetMoneyState } = useMoney();
  const { updateProductOnBuy, resetSelectedProduct, selectedProduct } =
    useProduct();
  const [amountError, setAmountError] = useState(false);

  const shouldDisableResetBtn = !selectedProduct && totalAmount === 0;

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
    <form onSubmit={handleSubmit} className="money-in-form information-display">
      <h3>Please add money to buy something</h3>

      {amountError && (
        <>
          <h4 className="error">
            Please enter a valid denomination to continue
          </h4>

          <p className="error">{POSSIBLE_DENOMINATIONS.join(", ")}</p>
        </>
      )}

      <input
        className={`${amountError ? "error" : ""}`}
        name="money-amount"
        placeholder="Enter amount"
        type="number"
        step={0.01}
      />

      <button type="submit">Add money</button>

      <button type="button" onClick={handleBuy} disabled={totalAmount <= 0}>
        Buy
      </button>

      <button
        type="button"
        onClick={handleReset}
        disabled={shouldDisableResetBtn}
      >
        Reset
      </button>

      <SummaryModal />
    </form>
  );
};
