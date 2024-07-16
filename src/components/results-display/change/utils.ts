import { POSSIBLE_DENOMINATIONS } from "../../../constants.ts";
import { initialDenominationsState } from "./constants.ts";

export const getChangeInDenomination = (change: number) =>
  POSSIBLE_DENOMINATIONS.reduce((denominationCounts, currentDenomination) => {
    let denominationCount = 0;

    while (change >= currentDenomination) {
      change = Number((change - currentDenomination).toFixed(2));
      ++denominationCount;
    }

    return {
      ...denominationCounts,
      [currentDenomination]: denominationCount,
    };
  }, initialDenominationsState);
