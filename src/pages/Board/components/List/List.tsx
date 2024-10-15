import React from 'react';
import './list.scss';
import { IListProps } from '../../../../common/interfaces/IListProps';
import { Card } from '../Card/Card';

export function List({ title, cards }: IListProps): React.ReactElement {
  return (
    <div className="list-container">
      <div>{title}</div>
      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <Card title={card.title} />
          </div>
        ))}
      </div>
      <button>Add card</button>
    </div>
  );
}
