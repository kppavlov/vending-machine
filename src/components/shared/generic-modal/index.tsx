import { FC, PropsWithChildren } from "react";

import "./generic-modal.scss";

interface Props {
  isOpen: boolean;
}

export const GenericModal: FC<PropsWithChildren<Props>> = ({
  children,
  isOpen,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>
  );
};
