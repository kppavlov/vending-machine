import { useMoney } from "../../../store/money-slice.tsx";

export const Change = () => {
  const { change } = useMoney();

  return (
    <div className="information-display">
      <h3>Change</h3>
      <p>{change} BGN</p>
    </div>
  );
};
