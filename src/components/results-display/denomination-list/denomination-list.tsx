import { Denominations } from "../../../types.ts";
import { useMoney } from "../../../store/money-slice.tsx";
import { useMemo } from "react";
import { getChangeInDenomination } from "../change/utils.ts";

export const DenominationList = () => {
  const { change } = useMoney();
  const changeByDenomination = useMemo(
    () => getChangeInDenomination(change),
    [change],
  );

  return (
    <div className="denomination-count-pair-container">
      <div className="denomination-count-column">
        <h5>Denomination</h5>

        {Object.keys(changeByDenomination).map((key) =>
          changeByDenomination[key as unknown as Denominations] > 0 ? (
            <p key={key}>{key}</p>
          ) : null,
        )}
      </div>

      <div className="denomination-count-column">
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
  );
};
