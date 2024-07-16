// HOOKS
import { useSummary } from "../../store/summary-slice.tsx";

// COMPONENTS
import { GenericModal } from "../shared/generic-modal/generic-modal.tsx";
import { SummaryModalBody } from "./summary-modal-body.tsx";

export const SummaryModal = () => {
  const { isSummaryModalOpen } = useSummary();
  return (
    <GenericModal isOpen={isSummaryModalOpen}>
      <SummaryModalBody />
    </GenericModal>
  );
};
