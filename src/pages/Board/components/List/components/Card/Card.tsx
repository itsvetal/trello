import React, { useState } from 'react';
import './Card.scss';
import '../../../../../../styles/_variables.scss';
import { IDetailCard } from '../../../../../../common/interfaces/ICard';
import FormModalWindow from '../../../../../../components/FormModalWindow/FormModalWindow';
import CardContent from './components/CardContent/CardContent';

export interface ICardProps extends IDetailCard {
  listId: number;
}

export function Card({ title, description }: IDetailCard): React.ReactElement {
  const [modal, setModal] = useState(false);
  const closeModal = (): void => {
    console.log('FormModalWindow Clicked ');
    setModal(false);
  };
  return (
    <>
      <div className="card-container" onClick={(): void => setModal(true)}>
        <div className="card-title">{title}</div>
      </div>
      {modal && (
        <FormModalWindow title={title} onClose={closeModal}>
          <CardContent description={description} />
        </FormModalWindow>
      )}
    </>
  );
}
