import React from 'react';
import './BackDrop.scss';

interface IBackDropProps {
  onBackdropClick: () => void;
}

function BackDrop({ onBackdropClick }: IBackDropProps): React.ReactElement {
  return <div className="backdrop" onClick={(): void => onBackdropClick()} />;
}

export default BackDrop;
