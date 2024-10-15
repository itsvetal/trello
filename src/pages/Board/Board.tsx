import React, { useState } from 'react';
import './board.scss';
import { List } from './components/List/List';
import { IList } from '../../common/interfaces/IList';

export function Board(): React.ReactElement {
  const boardTitle = 'Моя тестова дошка';
  const boardLists = [
    {
      id: 1,
      title: 'Плани',
      cards: [
        { id: 1, title: 'помити кота' },
        { id: 2, title: 'приготувати суп' },
        { id: 3, title: 'сходити в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процесі',
      cards: [{ id: 4, title: 'подивитися серіал' }],
    },
    {
      id: 3,
      title: 'Зроблено',
      cards: [
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
      ],
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [title, setTitle] = useState(boardTitle);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lists, setLists] = useState<IList[]>(boardLists);

  return (
    <div className="board-container">
      <div className="nav-bar">
        <h1>{title}</h1>
      </div>
      <div className="lists">
        {lists.map((list) => (
          <div key={list.id}>
            <List title={list.title} cards={list.cards} />
          </div>
        ))}
      </div>

      <button>Create List</button>
    </div>
  );
}
