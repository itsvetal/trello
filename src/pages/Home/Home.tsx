import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Board } from './components/Board/Board';
import './Home.scss';
import './components/Board/Board.scss';
import CreateBoard from './components/CreateBoard/CreateBoard';
import { IBoard } from '../../common/interfaces/IBoards';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import Modal from '../../components/Modal/Modal';
import BoardForm from './components/BoardForm/BoardForm';
import { useHome } from '../../hooks/homeHooks';
import { hexToRgb } from '../../utils/colorUtils';

export function Home(): React.ReactElement {
  const { items, loading, error, setUpdate } = useHome();
  const [modal, setModal] = useState(false);

  const updateHomeBoard = (result: string): void => {
    setModal(false);
    if (result === 'Created' || result === 'Deleted') {
      setUpdate((prevState) => !prevState);
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Мої дошки</h1>
        {loading && <Loader />}
        {error && <Error error={error} />}
      </header>
      <section className="home-section">
        <CreateBoard onClickHandler={(): void => setModal(true)} />
        {items?.map((board: IBoard) => {
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
              <Board onClose={updateHomeBoard} title={board.title} custom={board.custom} id={board.id} />
            </Link>
          );
        })}
      </section>
      {modal && (
        <Modal title="Create Board" onClose={(): void => setModal(false)}>
          <BoardForm onCardCreated={updateHomeBoard} />
        </Modal>
      )}
      <footer className="home-footer" />
    </div>
  );
}
