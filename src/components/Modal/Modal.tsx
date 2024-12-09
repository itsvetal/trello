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
      <fieldset className="modal-window">
        <legend>{title ? <p>{title}</p> : null}</legend>
        {children}
      </fieldset>
    </>
  );
}

export default Modal;
