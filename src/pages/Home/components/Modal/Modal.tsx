import React from 'react';
import './Modal.scss';

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

function Modal({ children, title }: ModalProps): React.ReactElement {
  return (
    <>
      <div className="modal-backdrop" />
      <div className="modal-window">
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
}

export default Modal;
