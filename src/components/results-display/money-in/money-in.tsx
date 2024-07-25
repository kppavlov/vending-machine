import { useMoney } from "@/store/money-slice.tsx";

import "./money-in.css";

export const MoneyIn = () => {
  const { totalAmount } = useMoney();

  return (
    <div className="information-display">
      <h3>Money in</h3>

      <div>{totalAmount} BGN</div>
    </div>
  );
};
