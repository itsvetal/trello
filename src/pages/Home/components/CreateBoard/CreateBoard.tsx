import React from 'react';
import '../Board/Board.scss';
import './CreateBoard.scss';

interface ICreateBoard {
  onClickHandler: () => void;
}

function CreateBoard({ onClickHandler }: ICreateBoard): React.ReactElement {
  const clickHandler = (): void => {
    console.log('Click');
    onClickHandler();
  };
  return (
    <div className="home-board create-board-container" onClick={clickHandler}>
      <div className="home-board__content">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fafafa">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        <div>
          <span>Додати дошку</span>
        </div>
      </div>
    </div>
  );
}

export default CreateBoard;
