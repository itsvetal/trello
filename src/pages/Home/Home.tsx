import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';
import { Board } from './components/Board/Board';
import './home.scss';
import { AddButton } from '../../components/AddButton/AddButton';
import instance from '../../api/request';

interface BoardProps {
  id: number;
  title: string;
  custom: { [key: string]: string };
}

interface ArrBoardsProps {
  boards: BoardProps[];
}

export function Home(): React.ReactElement {
  const getBoards = async (): Promise<AxiosResponse<ArrBoardsProps>> => {
    try {
      return await instance.get('/board');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message);
      }
      throw error;
    }
  };
  const [items, setItems] = useState<ArrBoardsProps | null>(null);
  const [error, setError] = useState();
  useEffect(() => {
    getBoards()
      .then((response) => setItems(response.data))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Мої дошки</h1>
      </header>
      <section className="home-section">
        {items?.boards.map((board: BoardProps) => (
          <Link to={`/board/${board.id}`} key={board.id}>
            <Board title={board.title} custom={board.custom} />
          </Link>
        ))}
        <Board>
          <AddButton label="add board" />
        </Board>
      </section>
      <footer className="home-footer" />
    </div>
  );
}
