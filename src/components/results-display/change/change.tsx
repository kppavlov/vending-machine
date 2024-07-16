import { useMemo } from "react";

// HOOKS
import { useMoney } from "../../../store/money-slice.tsx";

// UTILS
import { getChangeInDenomination } from "./utils.ts";

// TYPES
import { Denominations } from "../../../types.ts";

export const Change = () => {
  const { change } = useMoney();
  const changeByDenomination = useMemo(
    () => getChangeInDenomination(change),
    [change],
  );

  return (
    <div className="information-display">
      <h3>Change</h3>
      <p>Total: {change} BGN</p>

      <h3>By denomination</h3>
      <div className="denomination-count-pair-container">
        <div className="column">
          <h5>Denomination</h5>
          {Object.keys(changeByDenomination).map((key) =>
            changeByDenomination[key as unknown as Denominations] > 0 ? (
              <p key={key}>{key}</p>
            ) : null,
          )}
        </div>

        <div className="column">
          <h5>Pieces</h5>
          {Object.keys(changeByDenomination).map((key) =>
            changeByDenomination[key as unknown as Denominations] > 0 ? (
              <p key={key}>
                {changeByDenomination[key as unknown as Denominations]}
              </p>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};
