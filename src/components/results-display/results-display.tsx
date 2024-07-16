import { ProductInformation } from "./product-information/product-information.tsx";
import { MoneyInput } from "./money-input/money-input.tsx";
import { MoneyIn } from "./money-in/money-in.tsx";

import "./results-display.css";

export const ResultsDisplay = () => {
  return (
    <div className="result-display">
      <div className="responsive-results-container">
        <ProductInformation />

        <MoneyIn />
      </div>

      <MoneyInput />
    </div>
  );
};
