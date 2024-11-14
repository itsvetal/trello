import React from 'react';
import './Board.scss';
import { IBoard } from '../../../../common/interfaces/IBoards';
import { hexToRgb } from '../../../../utils/hexToRgb';

export function Board({ title, custom }: IBoard): React.ReactElement {
  function getColor(customObj: { [key: string]: string } | undefined): string | null {
    if (customObj) {
      const key = Object.keys(customObj).find((element: string) => element === 'color');
      if (key) {
        return customObj[key];
      }
    }
    return null;
  }

  const color = getColor(custom);
  const [r, g, b] = color ? hexToRgb(color) : [null];

  return (
    <div
      className="home-board"
      style={{
        backgroundColor: color || 'transparent',
        color: r !== null && r >= 200 && g !== null && g >= 200 && b !== null && b >= 200 ? 'black' : `white`,
      }}
    >
      {title}
    </div>
  );
}
