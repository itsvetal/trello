import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Board } from './components/Board/Board';
import './Home.scss';
import './components/Board/Board.scss';
import AddCard from '../../components/AddCard/AddCard';
import { IBoard } from '../../common/interfaces/boards';
import FormModalWindow from '../../components/FormModalWindow/FormModalWindow';
import BoardForm from './components/BoardForm/BoardForm';
import { hexToRgb } from '../../utils/colorUtils';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchBoards } from '../../store/thunks/boardThunks';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

export function Home(): React.ReactElement {
  const dispatch = useAppDispatch();
  const { list, status } = useAppSelector((state) => state.boards);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchBoards('/board'));
  }, [dispatch]);

  return (
    <div className="home-container">
      <header className="home-header">
        <nav className="home-header__nav">
          <h1>My boards</h1>
        </nav>
        {status !== 'failed' && <ProgressBar />}
        {status === 'resolved' && list.length === 0 && <p>No boards available</p>}
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
        <FormModalWindow title="Create Board" closeModal={(): void => setModal(false)}>
          <BoardForm onCardCreated={(): void => setModal(false)} />
        </FormModalWindow>
      )}
      <footer className="home-footer" />
    </div>
  );
}
