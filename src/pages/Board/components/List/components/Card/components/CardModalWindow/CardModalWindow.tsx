import React from 'react';
import BackDrop from '../../../../../../../../components/BackDrop/BackDrop';
import './CardModalWindow.scss';

interface ICardModalWindowProps {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
}

function CardModalWindow({ title, children, closeModal }: ICardModalWindowProps): React.ReactElement {
  return (
    <>
      <BackDrop onBackdropClick={(): void => closeModal()} />
      <div className="card-modal">
        <div className="card-modal__title">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </>
  );
}

export default CardModalWindow;
