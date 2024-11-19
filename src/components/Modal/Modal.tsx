import React from 'react';
import './Modal.scss';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

function Modal({ children, title, onClose }: ModalProps): React.ReactElement {
  return (
    <>
      <div className="modal-backdrop" onClick={(): void => onClose()} />
      <div className="modal-window">
        {title ? <p>{title}</p> : null}
        {children}
      </div>
    </>
  );
}

export default Modal;
