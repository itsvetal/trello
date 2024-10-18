import React, { useState } from 'react';
import { Board } from './components/Board/Board';
import './home.scss';

export function Home(): React.ReactElement {
  const dataBoards = {
    boards: [
      { id: 1, title: 'покупки', custom: { background: 'red' } },
      { id: 2, title: 'підготовка до весілля', custom: { background: 'green' } },
      { id: 3, title: 'розробка інтернет-магазину', custom: { background: 'blue' } },
      { id: 4, title: 'курс по просуванню у соцмережах', custom: { background: 'grey' } },
      { id: 3, title: 'відпочинок', custom: { background: 'aqua' } },
      { id: 3, title: 'обслуговування автомобіля', custom: { background: 'brown' } },
      { id: 3, title: 'пошук роботи', custom: { background: 'cornsilk' } },
    ],
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [boards, setBoards] = useState(dataBoards);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Мої дошки</h1>
      </header>
      <section className="home-section">
        {boards.boards.map((board) => (
          <Board title={board.title} custom={board.custom} key={board.id} />
        ))}
      </section>
      <footer className="home-footer" />
    </div>
  );
}
