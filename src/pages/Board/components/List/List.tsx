import React from 'react';
import './List.scss';
import { Card } from './components/Card/Card';
import { AddButton } from '../../../../components/AddButton/AddButton';
import { IDetailList } from '../../../../common/interfaces/IList';

export function List({ list }: IDetailList): React.ReactElement {
  const onClickHandler = (): void => {
    console.log('Click');
  };
  return (
    <div className="list-container">
      <div className="list-title">
        <h2>{list.title}</h2>
      </div>
      <div>
        {list.cards.map((card) => (
          <Card title={card.title} key={card.id * Math.random()} />
        ))}
      </div>
      <AddButton onButtonClick={onClickHandler} label="add card" />
    </div>
  );
}
