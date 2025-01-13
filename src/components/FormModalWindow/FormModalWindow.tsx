import React from 'react';
import './FormModalWindow.scss';
import BackDrop from '../BackDrop/BackDrop';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  closeModal: () => void;
}

function FormModalWindow({ children, title, closeModal }: ModalProps): React.ReactElement {
  return (
    <>
      <BackDrop onBackdropClick={(): void => closeModal()} />={}
      <fieldset className="modal-window">
        <legend>{title ? <p>{title}</p> : null}</legend>
        {children}
      </fieldset>
    </>
  );
}

export default FormModalWindow;
