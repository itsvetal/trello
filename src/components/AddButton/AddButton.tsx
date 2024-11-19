import React from 'react';
import './addButton.scss';

interface AddButtonProps {
  label: string;
  onButtonClick: () => void;
  color: string;
}

export function AddButton({ label, onButtonClick, color }: AddButtonProps): React.ReactElement {
  return (
    <div>
      <button className="add-button" onClick={(): void => onButtonClick()}>
        <svg
          style={{ fill: color }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        <div>
          <span>{label}</span>
        </div>
      </button>
    </div>
  );
}
