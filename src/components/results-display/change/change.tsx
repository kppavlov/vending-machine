import { DenominationList } from "../denomination-list/denomination-list.tsx";
import { useMoney } from "../../../store/money-slice.tsx";

export const Change = () => {
  const { change } = useMoney();

  return (
    <div className="information-display">
      <h3>Change</h3>
      <p>Total: {change} BGN</p>

      <h3>By denomination</h3>

      <DenominationList />
    </div>
  );
};
