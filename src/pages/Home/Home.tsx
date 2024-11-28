import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Board } from './components/Board/Board';
import './Home.scss';
import './components/Board/Board.scss';
import AddCard from '../../components/AddCard/AddCard';
import { IBoard } from '../../common/interfaces/boards';
import Modal from '../../components/Modal/Modal';
import BoardForm from './components/BoardForm/BoardForm';
import { hexToRgb } from '../../utils/colorUtils';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import Error from '../../components/Error/Error';
import { fetchBoards } from '../../store/thunks/boardThunks';

export function Home(): React.ReactElement {
  const dispatch = useAppDispatch();
  const { list, status, error } = useAppSelector((state) => state.boards);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchBoards('/board'));
  }, [dispatch]);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Мої дошки</h1>
        {status === 'loading' && <p>Loading</p>}
        {status === 'failed' && <Error error={error} />}
        {status === 'resolved' && list.length === 0 && <p>No lists available</p>}
      </header>
      <section className="home-section">
        <AddCard onClickHandler={(): void => setModal(true)} title="Додати дошку" color="white" height="140px" />
        {list.map((board: IBoard) => {
          const color = board.custom?.color;
          const [r, g, b] = color ? hexToRgb(color) : [0, 0, 0];
          return (
            <Link
              className="home-board"
              to={`/board/${board.id}`}
              key={board.id}
              style={{
                backgroundColor: `rgb(${r},${g}, ${b})`,
                color: r >= 200 && g >= 200 && b >= 200 ? 'black' : `white`,
              }}
            >
              <Board title={board.title} custom={board.custom} id={board.id} />
            </Link>
          );
        })}
      </section>
      {modal && (
        <Modal title="Create Board" onClose={(): void => setModal(false)}>
          <BoardForm onCardCreated={(): void => setModal(false)} />
        </Modal>
      )}
      <footer className="home-footer" />
    </div>
  );
}
