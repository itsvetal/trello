import React from 'react';
import './CloseButton.scss';

interface ICloseButton {
  onClick: () => void;
}

function CloseButton({ onClick }: ICloseButton): React.ReactElement {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    onClick();
  };
  return (
    <button aria-label="Close button" className="close-button" onClick={onClickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#5f6368"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="15px"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
  );
}

export default CloseButton;
