import React from 'react';
import { Link } from 'react-router-dom';
import { Board } from './components/Board/Board';
import './Home.scss';
import CreateBoard from './components/CreateBoard/CreateBoard';
import { IBoard } from '../../common/interfaces/IBoards';
import { useHome } from '../../hooks/homeHooks';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import Modal from './components/Modal/Modal';

export function Home(): React.ReactElement {
  const { items, loading, error } = useHome();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Мої дошки</h1>
        {loading && <Loader />}
        {error && <Error error={error} />}
      </header>
      <section className="home-section">
        {items?.boards.map((board: IBoard) => (
          <Link to={`/board/${board.id}`} key={board.id}>
            <Board title={board.title} custom={board.custom} />
          </Link>
        ))}
        <CreateBoard />
      </section>
      <footer className="home-footer" />
      <Modal />
    </div>
  );
}
