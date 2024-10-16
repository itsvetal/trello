import React from 'react';
import './list.scss';
import { IListProps } from '../../../../common/interfaces/IListProps';
import { Card } from '../Card/Card';

export function List({ title, cards }: IListProps): React.ReactElement {
  return (
    <div className="list-container">
      <div className="list-title">
        <h2>{title}</h2>
      </div>
      <div>
        {cards.map((card) => (
          <Card title={card.title} key={card.id} />
        ))}
      </div>
      <div className="add-card-button">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
          <div>
            <span>add card</span>
          </div>
        </button>
      </div>
    </div>
  );
}
