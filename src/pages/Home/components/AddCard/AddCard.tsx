import React from 'react';
import './AddCard.scss';

interface IAddCard {
  onClickHandler: () => void;
  title: string;
  color: string;
  height: string;
}

function AddCard({ onClickHandler, title, color, height }: IAddCard): React.ReactElement {
  const clickHandler = (): void => {
    console.log('Click');
    onClickHandler();
  };
  return (
    <div className="add-card-container" onClick={clickHandler} style={{ minHeight: height }}>
      <div className="add-card-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={color || '#fafafa'}
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default AddCard;
