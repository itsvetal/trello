import React from 'react';
import './List.scss';
import { ListProps } from '../../../../common/interfaces/ListProps';
import { Card } from '../Card/Card';
import { AddButton } from '../../../../components/AddButton/AddButton';

export function List({ title, cards }: ListProps): React.ReactElement {
  const onClickHandler = (): void => {
    console.log('Click');
  };
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
      <AddButton onClick={onClickHandler} label="add cart" />
    </div>
  );
}
