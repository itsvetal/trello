import React, { useEffect, useState } from 'react';
import './Board.scss';
import { useParams } from 'react-router-dom';
import { List } from './components/List/List';
import TitleInput from './components/TitleInput/TitleInput';
import CreateList from './components/CreateList/CreateList';
import { IDetailBoard } from '../../common/interfaces/IBoards';
import { getBoard } from '../../api/board/getBoard';
import Modal from '../../components/Modal/Modal';
import ListForm from './components/ListForm/ListForm';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

export function Board(): React.ReactElement {
  const [error, setError] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(false);
  const [listModal, setListModal] = useState(false);
  const [board, setBoard] = useState<IDetailBoard | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [update, setUpdate] = useState(false);
  const { boardId } = useParams();

  useEffect(() => {
    setLoading(true);
    getBoard(boardId)
      .then((data) => {
        setBoard(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
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
          <h1 onClick={(): void => setInput(true)}>{board?.title}</h1>
          {input && <TitleInput id={boardId ? +boardId : null} title={board?.title} onTitleChanged={updateBoard} />}
        </div>
      </nav>
      <div className="board-loading">
        {loading && <Loader />}
        {error && <Error error={error} />}
      </div>

      <section className="lists">
        <CreateList onCreateList={(): void => setListModal(true)} />
        {listModal && (
          <Modal title="Create list" onClose={(): void => setListModal(false)}>
            <ListForm id={boardId || ''} />
          </Modal>
        )}
        {board?.lists?.map((list) => <List key={list.id * Math.random()} list={list} />)}
      </section>
      <footer className="footer" />
    </div>
  );
}
