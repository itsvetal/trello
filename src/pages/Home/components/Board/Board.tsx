import React from 'react';
import './Board.scss';
import { IBoard } from '../../../../common/interfaces/IBoards';

export function Board({ title, custom }: IBoard): React.ReactElement {
  const values = Object.values(custom);
  const value = values[0];

  const hexToRgb = (hex: string): number[] => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };
  const [r, g, b] = hexToRgb(value);

  return (
    <div
      className="home-board"
      style={{
        backgroundColor: value,
        color: r >= 220 && g >= 220 && b >= 220 ? 'black' : `white`,
      }}
    >
      {title}
    </div>
  );
}
