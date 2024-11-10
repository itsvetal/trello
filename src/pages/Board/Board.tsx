import React, { useState } from 'react';
import './Board.scss';
import { useParams } from 'react-router-dom';
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
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
      ],
    },
    {
      id: 4,
      title: 'Зроблено',
      cards: [
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
      ],
    },
    {
      id: 5,
      title: 'Зроблено',
      cards: [
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
      ],
    },
    {
      id: 6,
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
  const { boardId } = useParams();

  return (
    <div className="wrapper">
      <nav className="nav-bar">
        <div className="nav-bar__title">
          <h1>{`${title}: ${boardId}`}</h1>
        </div>
        <div>
          <button className="create-list-button">
            <span>Create List</span>
          </button>
        </div>
      </nav>
      <section className="lists">
        {lists.map((list) => (
          <List key={list.id * Math.random()} title={list.title} cards={list.cards} />
        ))}
      </section>
      <footer className="footer" />
    </div>
  );
}
