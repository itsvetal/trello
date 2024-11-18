import React, { useEffect, useState } from 'react';
import './Board.scss';
import { useParams } from 'react-router-dom';
import { List } from './components/List/List';
import { IList } from '../../common/interfaces/IList';
import TitleInput from './components/TitleInput/TitleInput';
import CreateList from './components/CreateList/CreateList';
import { IDetailBoard } from '../../common/interfaces/IBoards';
import { getBoard } from '../../api/board/getBoard';
import { detailBoardPlug } from '../../common/constants/plugs';

export function Board(): React.ReactElement {
  console.log('Board is rendered');
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
  const [lists, setLists] = useState<IList[]>(boardLists);
  const [input, setInput] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [board, setBoard] = useState<IDetailBoard>(detailBoardPlug);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [update, setUpdate] = useState(false);
  const { boardId } = useParams();

  useEffect(() => {
    getBoard(boardId)
      .then((data) => {
        setBoard(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [update]);

  const updateBoard = (data: string): void => {
    setInput(false);
    if (data === 'Updated') {
      setUpdate((prevState) => !prevState);
      console.log('Data board is updated');
    }
  };

  return (
    <div className="wrapper">
      <nav className="nav-bar">
        <div className="nav-bar__title">
          <h1 onClick={(): void => setInput(true)}>{board?.title ? board.title : ''}</h1>
          {input && <TitleInput id={boardId ? +boardId : null} title={board.title} onTitleChanged={updateBoard} />}
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
