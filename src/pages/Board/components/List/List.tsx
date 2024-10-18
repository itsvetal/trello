import React from 'react';
import './list.scss';
import { ListProps } from '../../../../common/interfaces/ListProps';
import { Card } from '../Card/Card';
import { AddButton } from '../../../../components/AddButton/AddButton';

export function List({ title, cards }: ListProps): React.ReactElement {
  return (
    <div className="list-container">
      <div className="list-title">
        <h2>{title}</h2>
      </div>
      <div>
        {cards.map((card) => (
          <Card title={card.title} key={card.id * Math.random()} />
        ))}
      </div>
      <AddButton label="add cart" />
    </div>
  );
}
