import React, { useState } from 'react';
import './Card.scss';
import '../../../../../../styles/_variables.scss';
import { IDetailCard } from '../../../../../../common/interfaces/ICard';
import CardContent from './components/CardContent/CardContent';
import CardModalWindow from './components/CardModalWindow/CardModalWindow';

export interface ICardProps extends IDetailCard {
  listId: number;
}

export function Card({ title, description }: IDetailCard): React.ReactElement {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="card-container" onClick={(): void => setModal(true)}>
        <div className="card-title">{title}</div>
      </div>
      {modal && (
        <CardModalWindow title={title} closeModal={(): void => setModal(false)}>
          <CardContent description={description} />
        </CardModalWindow>
      )}
    </>
  );
}
