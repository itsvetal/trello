import React from 'react';
import './Board.scss';
import { HomeBoard } from '../../../../common/interfaces/HomeBoard';

export function Board({ title, custom }: HomeBoard): React.ReactElement {
  return (
    <div
      className="home-board"
      style={{
        backgroundColor: custom?.background,
      }}
    >
      {title}
    </div>
  );
}
