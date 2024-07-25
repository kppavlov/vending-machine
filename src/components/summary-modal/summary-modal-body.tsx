// COMPONENTS
import { Change } from "../results-display/change/change.tsx";
import { Button } from "../shared/button";

// HOOKS
import { useSummary } from "../../store/summary-slice.tsx";
import { useMoney } from "../../store/money-slice.tsx";

import "./summary-modal.scss";

export const SummaryModalBody = () => {
  const { toggleSummaryModal } = useSummary();
  const { resetMoneyState } = useMoney();

  const handleCloseModal = () => {
    toggleSummaryModal();
    resetMoneyState();
  };

  return (
    <div className="summary-modal-body">
      <Change />

      <Button type="button" onClick={handleCloseModal}>
        Close
      </Button>
    </div>
  );
};
