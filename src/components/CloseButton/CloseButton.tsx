import React from 'react';

interface ICloseButton {
  onClick: () => void;
}

function CloseButton({ onClick }: ICloseButton): React.ReactElement {
  const onClickHandler = (): boolean => {
    console.log('хер тебе');
    onClick();
    return false;
  };
  return (
    <div>
      <button className="close-button" onClick={onClickHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        {}
      </button>
    </div>
  );
}

export default CloseButton;
