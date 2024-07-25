// HOOKS
import { useSummary } from "@/store/summary-slice.tsx";

// COMPONENTS
import { GenericModal } from "@/components/shared/generic-modal";
import { SummaryModalBody } from "@/components/summary-modal/summary-modal-body";

export const SummaryModal = () => {
  const { isSummaryModalOpen } = useSummary();
  return (
    <GenericModal isOpen={isSummaryModalOpen}>
      <SummaryModalBody />
    </GenericModal>
  );
};
