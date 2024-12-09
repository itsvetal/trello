import React, { useEffect, useState } from 'react';
import './Board.scss';
import { useParams } from 'react-router-dom';
import { List } from './components/List/List';
import TitleInput from './components/TitleInput/TitleInput';
import Modal from '../../components/Modal/Modal';
import ListForm from './components/ListForm/ListForm';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { hexToRgb } from '../../utils/colorUtils';
import AddCard from '../../components/AddCard/AddCard';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchBoard } from '../../store/thunks/boardThunks';
import { getBoardId } from '../../store/slices/boardSlice';

export function Board(): React.ReactElement {
  const [input, setInput] = useState(false);
  const [listModal, setListModal] = useState(false);
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const { board, status, error } = useAppSelector((state) => state.board);

  useEffect(() => {
    dispatch(getBoardId(boardId || ''));
    dispatch(fetchBoard(boardId));
  }, [dispatch]);

  const [r, g, b] = board?.custom?.color ? hexToRgb(board?.custom?.color) : [0, 0, 0];
  const color = r >= 200 && g >= 200 && b >= 200 ? 'black' : `white`;

  return (
    <div className="wrapper" style={{ backgroundColor: board?.custom?.color, color }}>
      <nav className="nav-bar">
        <div className="nav-bar__title">
          <h1 onClick={(): void => setInput(true)}>{board?.title}</h1>
          {input && <TitleInput title={board?.title || null} onTitleChanged={(): void => setInput(false)} />}
        </div>
      </nav>
      <div className="board-loading">
        {status === 'loading' && <Loader />}
        {status === 'failed' && <Error error={error} />}
        {status === 'resolved' && Array.isArray(board?.lists) && (board?.lists.length || 0) === 0 && (
          <p>No lists available</p>
        )}
      </div>

      <section className="lists">
        <AddCard onClickHandler={(): void => setListModal(true)} title="Add another list" color={color} height="81px" />
        {listModal && (
          <Modal title="Create list" onClose={(): void => setListModal(false)}>
            <ListForm onCreateList={(): void => setListModal(false)} />
          </Modal>
        )}
        {board?.lists?.map((list) => (
          <List key={list.id * Math.random()} list={list} textColor={color} boardId={boardId} />
        ))}
      </section>
      <footer className="footer" />
    </div>
  );
}
