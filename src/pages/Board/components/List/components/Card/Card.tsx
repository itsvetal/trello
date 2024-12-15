import React from 'react';
import './Card.scss';
import '../../../../../../styles/_variables.scss';
import { IDetailCard } from '../../../../../../common/interfaces/ICard';

export interface ICardProps extends IDetailCard {
  listId: number;
}

export function Card({ title, description }: IDetailCard): React.ReactElement {
  return (
    <div className="card-container">
      <div className="card-title">{title}</div>
      <div className="card-desc">{description}</div>
    </div>
  );
}
