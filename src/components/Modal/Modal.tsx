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
        {title ? <h1>{title}</h1> : null}
        {children}
      </div>
    </>
  );
}

export default Modal;
