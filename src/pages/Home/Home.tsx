import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Board } from './components/Board/Board';
import './Home.scss';
import CreateBoard from './components/CreateBoard/CreateBoard';
import { IBoard } from '../../common/interfaces/IBoards';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import Modal from './components/Modal/Modal';
import BoardForm from './components/Modal/components/BoardForm/BoardForm';
import { useHome } from '../../hooks/homeHooks';

export function Home(): React.ReactElement {
  const { items, loading, error, setUpdate } = useHome();
  const [modal, setModal] = useState(false);

  const updateHomeBoard = (result: string): void => {
    setModal(false);
    if (result === 'Created') {
      setUpdate((prevState) => !prevState);
      console.log('Board created');
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
        {items?.map((board: IBoard) => {
          return (
            <Link to={`/board/${board.id}`} key={board.id}>
              <Board title={board.title} custom={board.custom} key={board.id} />
            </Link>
          );
        })}
        <CreateBoard onClickHandler={(): void => setModal(true)} />
      </section>
      <footer className="home-footer" />
      {modal && (
        <Modal title="Create Board" onClose={(): void => setModal(false)}>
          <BoardForm onCardCreated={updateHomeBoard} />
        </Modal>
      )}
    </div>
  );
}
