import { ProductInformation } from "./product-information/product-information.tsx";

import "./results.-display.css";
import { MoneyInput } from "./money-input/money-input.tsx";
import { MoneyIn } from "./money-in/money-in.tsx";
import { Change } from "./change/change.tsx";

export const ResultsDisplay = () => {
  return (
    <div className="result-display">
      <ProductInformation />

      <Change />

      <MoneyIn />

      <MoneyInput />
    </div>
  );
};
