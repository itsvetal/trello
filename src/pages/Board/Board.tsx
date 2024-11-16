import React, { useState } from 'react';
import './Board.scss';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { List } from './components/List/List';
import { IList } from '../../common/interfaces/IList';
import TitleInput from './components/TitleInput/TitleInput';
import CreateList from './components/CreateList/CreateList';
import { IDetailBoard } from '../../common/interfaces/IBoards';
import instance from '../../api/request';

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
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [title, setTitle] = useState(boardTitle);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lists, setLists] = useState<IList[]>(boardLists);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [input, setInput] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { boardId } = useParams();

  const getBoard = async (): Promise<IDetailBoard> => {
    try {
      return await instance.get(`board/${boardId}`);
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err?.response?.data);
      } else if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
    throw new Error('Error getting single board');
  };

  getBoard().then((data) => {
    console.log(data);
  });

  return (
    <div className="wrapper">
      <nav className="nav-bar">
        <div className="nav-bar__title">
          <h1 onClick={(): void => setInput(true)}>{`${title}`}</h1>
          {input && <TitleInput id={boardId ? +boardId : null} title={title} />}
        </div>
      </nav>
      <section className="lists">
        {lists.map((list) => (
          <List key={list.id * Math.random()} title={list.title} cards={list.cards} />
        ))}
        <CreateList />
      </section>
      <footer className="footer" />
    </div>
  );
}
