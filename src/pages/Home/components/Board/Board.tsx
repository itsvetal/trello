import React from 'react';
import './Board.scss';
import { IBoard } from '../../../../common/interfaces/IBoards';
import { createRandomRgb } from '../../../../utils/colorUtils';

export function Board({ title, custom }: IBoard): React.ReactElement {
  function getDescription(customObj: { [key: string]: string } | undefined): string | null {
    if (customObj) {
      const key = Object.keys(customObj).find((element: string) => element === 'description');
      if (key) {
        return customObj[key];
      }
    }
    return null;
  }

  const description = getDescription(custom);
  const [r, g, b] = createRandomRgb();

  return (
    <div
      className="home-board"
      style={{
        backgroundColor: `rgb(${r},${g}, ${b})`,
        color: r >= 200 && g >= 200 && b >= 200 ? 'black' : `white`,
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
