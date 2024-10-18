import React from 'react';
import './addButton.scss';

interface AddButtonProps {
  label: string;
}

export function AddButton({ label }: AddButtonProps): React.ReactElement {
  return (
    <div>
      <button className="add-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        <div>
          <span>{label}</span>
        </div>
      </button>
    </div>
  );
}
