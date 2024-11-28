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
    <button className="close-button" onClick={onClickHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
      {}
    </button>
  );
}

export default CloseButton;
